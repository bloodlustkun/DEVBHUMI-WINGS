import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  url?: string;
}

export function SEO({
  title = "Devbhoomi Wings - Premium Travel Services | Delhi to Uttarakhand Cabs & Tours",
  description = "Devbhoomi Wings Travels Pvt. Ltd. offers premium cab services and tour packages from Delhi NCR to Uttarakhand. Specializing in Pithoragarh, Haridwar, Nainital, Mussoorie trips. 24/7 service, verified drivers, best prices.",
  keywords = "devbhoomi wings, delhi to pithoragarh cab, delhi to haridwar cab, uttarakhand tour packages, nainital travel, mussoorie tour, delhi ncr cab service, shared cab to uttarakhand, tempo traveller booking, luxury suv hire delhi, delhi to rishikesh cab, jim corbett tour package, auli trip, uttarakhand pilgrimage tour, mountain travel india",
  ogImage = "https://devbhoomiwings.com/og-image.jpg",
  url = "https://devbhoomiwings.com",
}: SEOProps) {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute("content", content);
    };

    // Standard meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("author", "Devbhoomi Wings Travels Pvt. Ltd.");
    updateMetaTag("robots", "index, follow");
    updateMetaTag("viewport", "width=device-width, initial-scale=1.0");
    updateMetaTag("theme-color", "#06b6d4");

    // Open Graph meta tags
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", ogImage, true);
    updateMetaTag("og:url", url, true);
    updateMetaTag("og:type", "website", true);
    updateMetaTag("og:site_name", "Devbhoomi Wings", true);
    updateMetaTag("og:locale", "en_IN", true);

    // Twitter Card meta tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", ogImage);
    updateMetaTag("twitter:site", "@devbhoomiwings");
    updateMetaTag("twitter:creator", "@devbhoomiwings");

    // Additional SEO tags
    updateMetaTag("geo.region", "IN-DL");
    updateMetaTag("geo.placename", "Delhi NCR");
    updateMetaTag("geo.position", "28.6139;77.2090");
    updateMetaTag("ICBM", "28.6139, 77.2090");

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    // Structured Data - Organization
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "TravelAgency",
      "name": "Devbhoomi Wings Travels Pvt. Ltd.",
      "alternateName": "Devbhoomi Wings",
      "url": url,
      "logo": `${url}/logo.png`,
      "description": description,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Delhi NCR",
        "addressRegion": "Delhi",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 28.6139,
        "longitude": 77.2090
      },
      "telephone": "+91-98765-43210",
      "email": "info@devbhoomiwings.com",
      "priceRange": "₹₹",
      "areaServed": [
        "Delhi",
        "Noida",
        "Gurgaon",
        "Faridabad",
        "Ghaziabad",
        "Uttarakhand",
        "Pithoragarh",
        "Haridwar",
        "Rishikesh",
        "Nainital",
        "Mussoorie",
        "Dehradun"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Travel Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cab Services",
              "description": "Premium cab services from Delhi NCR to Uttarakhand destinations"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Tour Packages",
              "description": "Customized tour packages for Uttarakhand pilgrimage and tourism"
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "1250",
        "bestRating": "5",
        "worstRating": "1"
      },
      "sameAs": [
        "https://facebook.com/devbhoomiwings",
        "https://instagram.com/devbhoomiwings",
        "https://twitter.com/devbhoomiwings"
      ]
    };

    // Add or update structured data script
    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.setAttribute("type", "application/ld+json");
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(organizationSchema);

  }, [title, description, keywords, ogImage, url]);

  return null;
}
