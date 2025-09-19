'use client'

import Script from 'next/script'
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-YMLSDXTPMF'

export default function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'undefined') {
    console.warn('GA4: No valid measurement ID found')
    return null
  }
  
  console.log('GA4: Initializing with ID:', GA_MEASUREMENT_ID)

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        onLoad={() => {
          console.log('GA4: Script loaded successfully')
        }}
        onError={(e) => {
          console.error('GA4: Script failed to load', e)
        }}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        onLoad={() => {
          console.log('GA4: Configuration script loaded')
        }}
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              debug_mode: true,
              send_page_view: true,
              anonymize_ip: true
            });
            console.log('GA4: Configured with ID ${GA_MEASUREMENT_ID}');
            
            // Test event to verify GA4 is working
            setTimeout(() => {
              gtag('event', 'ga4_initialized', {
                event_category: 'System',
                event_label: 'GA4 Setup Test'
              });
              console.log('GA4: Test event sent');
            }, 1000);
          `,
        }}
      />
    </>
  )
}
