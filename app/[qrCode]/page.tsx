'use client'

import { useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { trackQRCode, trackQRRedirect } from '@/lib/gtag'

// Valid QR codes that we track
const validQRCodes = [
  'casaparadiso',
  'seasalt', 
  'beach',
  'middlestreet',
  'cards',
  'port'
]

export default function QRRedirectPage() {
  const params = useParams()
  const router = useRouter()
  const qrCode = params.qrCode as string

  useEffect(() => {
    const trackAndRedirect = async () => {
      // Check if this is a valid QR code
      if (validQRCodes.includes(qrCode)) {
        // Track with Google Analytics
        trackQRCode(qrCode, {
          page_title: `QR Code: ${qrCode}`,
          page_location: window.location.href,
          user_agent: navigator.userAgent
        })
        
        trackQRRedirect(
          qrCode, 
          window.location.href, 
          window.location.origin
        )
        
        console.log(`GA4: Tracked QR code visit for "${qrCode}"`)
      }
      
      // Redirect to home page after a short delay to ensure GA tracking
      setTimeout(() => {
        router.push('/')
      }, 300) // Reduced delay since we don't need API call
    }

    trackAndRedirect()
  }, [qrCode, router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Зареждане...
        </h2>
        <p className="text-gray-600">
          {validQRCodes.includes(qrCode) 
            ? `Проследяваме посещението от ${qrCode}` 
            : 'Пренасочваме ви към началната страница'
          }
        </p>
      </div>
    </div>
  )
}
