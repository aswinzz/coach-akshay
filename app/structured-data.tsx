export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Coach Akshay Personal Training",
    "image": "https://coachakshay.com/images/logo.png",
    "description": "Professional personal training services specializing in competition preparation, weight loss, and muscle gain.",
    "@id": "https://coachakshay.com",
    "url": "https://coachakshay.com",
    "telephone": "+91-9744962827",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kerala",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "12.9716",
      "longitude": "77.5946"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "06:00",
        "closes": "21:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/_coach_akshay/",
      // Add other social media URLs
    ],
    "priceRange": "₹₹",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "27"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
} 