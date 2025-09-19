// Google Analytics 4 configuration and utilities

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-YMLSDXTPMF'

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID!, {
      page_path: url,
    })
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (action: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, parameters)
    console.log('GA4: Event sent -', action, parameters)
  } else {
    console.warn('GA4: gtag not available, event not sent -', action)
  }
}

// Custom event for QR code tracking
export const trackQRCode = (qrCode: string, additionalData?: Record<string, any>) => {
  event('qr_code_scan', {
    event_category: 'QR Code',
    event_label: qrCode,
    qr_code: qrCode,
    qr_source: `qr_${qrCode}`,
    campaign_name: `QR_${qrCode.toUpperCase()}`,
    custom_parameter_1: 'followme_qr_tracking',
    ...additionalData
  })
  
  console.log(`GA4 Event: QR code "${qrCode}" tracked`)
}

// Track page views for QR redirects
export const trackQRRedirect = (qrCode: string, fromUrl: string, toUrl: string) => {
  event('qr_redirect', {
    event_category: 'QR Code',
    event_label: `${qrCode}_redirect`,
    qr_code: qrCode,
    from_url: fromUrl,
    to_url: toUrl,
    redirect_type: 'qr_to_home'
  })
  
  console.log(`GA4 Event: QR redirect from "${fromUrl}" to "${toUrl}"`)
}

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: any
    ) => void
  }
}
