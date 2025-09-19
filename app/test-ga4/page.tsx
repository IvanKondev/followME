'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { trackQRCode, event } from '@/lib/gtag'

export default function TestGA4Page() {
  const [eventsSent, setEventsSent] = useState<string[]>([])

  const sendTestEvent = () => {
    const timestamp = new Date().toLocaleTimeString()
    event('test_button_click', {
      event_category: 'Test',
      event_label: 'Manual Test Button',
      timestamp: timestamp
    })
    setEventsSent(prev => [...prev, `test_button_click - ${timestamp}`])
  }

  const sendQRTestEvent = () => {
    const timestamp = new Date().toLocaleTimeString()
    trackQRCode('test-qr-code', {
      test_mode: true,
      timestamp: timestamp
    })
    setEventsSent(prev => [...prev, `qr_code_scan (test-qr-code) - ${timestamp}`])
  }

  const checkGtagStatus = () => {
    const timestamp = new Date().toLocaleTimeString()
    if (typeof window !== 'undefined') {
      const gtagExists = typeof window.gtag === 'function'
      const dataLayerExists = Array.isArray((window as any).dataLayer)
      
      console.log('GA4 Status Check:', {
        gtag_function: gtagExists,
        dataLayer_array: dataLayerExists,
        dataLayer_length: (window as any).dataLayer?.length || 0,
        measurement_id: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
      })
      
      setEventsSent(prev => [...prev, `Status Check - gtag: ${gtagExists}, dataLayer: ${dataLayerExists} - ${timestamp}`])
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Google Analytics 4 Test Page</CardTitle>
            <CardDescription>
              Тестване на GA4 интеграцията. Отворете браузърската конзола за debug информация.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button onClick={checkGtagStatus} variant="outline">
                Провери GA4 Status
              </Button>
              <Button onClick={sendTestEvent}>
                Изпрати Test Event
              </Button>
              <Button onClick={sendQRTestEvent}>
                Изпрати QR Test Event
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Изпратени Events</CardTitle>
            <CardDescription>
              Списък на изпратените GA4 events. Проверете в GA4 Real-time отчета.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {eventsSent.length === 0 ? (
              <p className="text-gray-500">Все още няма изпратени events...</p>
            ) : (
              <div className="space-y-2">
                {eventsSent.map((event, index) => (
                  <div key={index} className="bg-gray-100 p-2 rounded text-sm font-mono">
                    {event}
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Инструкции за проверка</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <h4 className="font-semibold">1. Браузърска конзола:</h4>
              <p className="text-sm text-gray-600">
                F12 → Console → търсете съобщения започващи с "GA4:"
              </p>
            </div>
            <div>
              <h4 className="font-semibold">2. Network tab:</h4>
              <p className="text-sm text-gray-600">
                F12 → Network → търсете заявки към "google-analytics.com" или "googletagmanager.com"
              </p>
            </div>
            <div>
              <h4 className="font-semibold">3. Google Analytics:</h4>
              <p className="text-sm text-gray-600">
                analytics.google.com → Real-time → Events → търсете "test_button_click" и "qr_code_scan"
              </p>
            </div>
            <div>
              <h4 className="font-semibold">4. Measurement ID:</h4>
              <p className="text-sm text-gray-600 font-mono">
                {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'НЕ Е НАМЕРЕН!'}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
