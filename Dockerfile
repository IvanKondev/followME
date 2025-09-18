# Multi-stage Dockerfile for Next.js 15 app suitable for Coolify
# Build stage
FROM public.ecr.aws/docker/library/node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install OS deps if needed (uncomment if you use sharp or similar)
# RUN apk add --no-cache libc6-compat

# Copy package files and install dependencies
COPY package.json package-lock.json* npm-shrinkwrap.json* ./
RUN npm ci --ignore-scripts --no-audit --no-fund || npm install --ignore-scripts --no-audit --no-fund

# Copy the rest of the app source
COPY . .

# Build the app
RUN npm run build

# Production runtime stage
FROM public.ecr.aws/docker/library/node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Next.js needs a non-root user for security best practices
# But Coolify runs fine with root as well. We'll create a user and use it.
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

# Copy only the necessary files from the builder
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# If you have a standalone output you can switch to it for smaller images
# COPY --from=builder /app/.next/standalone ./
# COPY --from=builder /app/.next/static ./.next/static

# Expose the Next.js port
EXPOSE 3000

# Set the correct permissions
RUN chown -R nextjs:nodejs /app
USER nextjs

# Start the server
# Coolify will inject environment variables; ensure TELEGRAM_* are set there.
CMD ["npm", "run", "start"]
