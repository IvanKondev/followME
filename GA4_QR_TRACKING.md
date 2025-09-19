# QR Code Tracking System с Google Analytics 4

## Как работи системата

Системата използва **Google Analytics 4** за професионално проследяване на QR кодове. Всеки QR код автоматично се записва като custom event в GA4 и пренасочва към главната страница.

## Конфигурирани QR кодове

Следните URL-и са настроени за проследяване:

- `https://followme.bg/casaparadiso` → Casa Paradiso
- `https://followme.bg/seasalt` → Sea Salt  
- `https://followme.bg/beach` → Beach
- `https://followme.bg/middlestreet` → Middle Street
- `https://followme.bg/cards` → Cards
- `https://followme.bg/port` → Port

## Google Analytics 4 Integration

### Measurement ID
```
G-YMLSDXTPMF
```

### Custom Events
Всеки QR код генерира 2 custom events в GA4:

1. **`qr_code_scan`** - основно проследяване
   - `event_category`: "QR Code"
   - `event_label`: име на QR кода (напр. "casaparadiso")
   - `qr_code`: име на QR кода
   - `custom_parameter_1`: "followme_qr_tracking"

2. **`qr_redirect`** - проследяване на пренасочването
   - `event_category`: "QR Code"  
   - `event_label`: "{qr_code}_redirect"
   - `from_url`: QR URL-то
   - `to_url`: главната страница
   - `redirect_type`: "qr_to_home"

## Преглед на статистики

### В Google Analytics 4:

1. **Отидете на** [analytics.google.com](https://analytics.google.com)
2. **Изберете** вашия property (G-YMLSDXTPMF)
3. **Reports** → **Engagement** → **Events**
4. **Търсете** events: `qr_code_scan` и `qr_redirect`

### Полезни GA4 отчети:

- **Real-time** → виждате QR посещения в реално време
- **Events** → общо QR събития  
- **Custom dimensions** → анализ по QR код
- **Audience** → демографски данни на QR посетителите
- **Acquisition** → източник на трафика (QR vs други)

## Как да добавя нови QR кодове

1. **Отворете** `app/[qrCode]/page.tsx`
2. **Добавете** новия код в масива `validQRCodes`:
   ```typescript
   const validQRCodes = [
     'casaparadiso',
     'seasalt', 
     'beach',
     'middlestreet',
     'cards',
     'port',
     'your-new-qr-code'  // ← добавете тук
   ]
   ```
3. **Готово!** GA4 автоматично ще проследява новия код

## Технически детайли

### Файлове в системата:

- `lib/gtag.ts` - Google Analytics utilities и custom events
- `components/GoogleAnalytics.tsx` - GA4 script integration  
- `app/[qrCode]/page.tsx` - Dynamic route за QR кодове
- `app/layout.tsx` - GA4 компонент в layout

### Environment Variables:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-YMLSDXTPMF
NEXT_PUBLIC_BASE_URL=https://followme.bg
```

## Как да тествам

1. **Отворете** `https://followme.bg/casaparadiso` в браузъра
2. **Трябва** да бъдете пренасочени към главната страница  
3. **Отворете** браузърската конзола - трябва да видите:
   ```
   GA4 Event: QR code "casaparadiso" tracked
   ```
4. **Проверете** GA4 Real-time отчета за новото събитие

## Предимства на GA4 подхода

✅ **Професионални отчети** - богати analytics данни  
✅ **Реално време** - виждате посещения веднага  
✅ **Демографски данни** - възраст, пол, местоположение  
✅ **Device tracking** - Mobile vs Desktop  
✅ **Retention analysis** - връщащи се потребители  
✅ **Conversion tracking** - цели и конверсии  
✅ **Безплатно** - до 10 милиона events месечно  
✅ **GDPR compliant** - Google се грижи за съответствието  

## Мониториране

### Конзола логове:
```
GA4 Event: QR code "casaparadiso" tracked
GA4 Event: QR redirect from "https://followme.bg/casaparadiso" to "https://followme.bg"
```

### GA4 Real-time:
- Отидете на **Real-time** в GA4
- Виждате активни QR посещения
- Филтрирайте по event name: `qr_code_scan`
