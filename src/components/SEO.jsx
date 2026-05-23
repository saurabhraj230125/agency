import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const buildAbsoluteUrl = (siteUrl, pathname) => {
  if (siteUrl) {
    return `${siteUrl.replace(/\/$/, "")}${pathname}`;
  }
  if (typeof window !== "undefined") {
    return `${window.location.origin}${pathname}`;
  }
  return pathname;
};

export default function SEO({
  title,
  description,
  canonical,
  image = "/icons.svg",
  keywords,
  robots = "index, follow",
  siteUrl = import.meta.env.VITE_SITE_URL
}) {
  const { pathname } = useLocation();
  const resolvedCanonical = canonical || buildAbsoluteUrl(siteUrl, pathname);
  
  // Create a clean base URL for schema and absolute image paths
  const baseUrl = siteUrl 
    ? siteUrl.replace(/\/$/, "") 
    : (typeof window !== "undefined" ? window.location.origin : "");

  // SEO CRITICAL: Social platforms require absolute URLs for images
  const resolvedImage = image.startsWith("http")
    ? image
    : `${baseUrl}${image}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${baseUrl}#organization`, // Syntax error fixed here
        name: "Future Q",
        alternateName: "FutureQ",
        url: resolvedCanonical,
        email: "saurabh.futureq@gmail.com",
        logo: resolvedImage
      },
      {
        "@type": "ProfessionalService",
        "@id": `${baseUrl}#professional-service`, // Syntax error fixed here
        name: "Future Q",
        alternateName: "FutureQ",
        url: resolvedCanonical,
        email: "saurabh.futureq@gmail.com",
        areaServed: "IN",
        serviceType: ["Web Development", "AI Automation"],
        provider: { "@id": `${baseUrl}#organization` }
      }
    ]
  };

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={resolvedCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={resolvedCanonical} />
      <meta property="og:image" content={resolvedImage} />
      <meta property="og:site_name" content="Future Q" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={resolvedImage} />

      {/* JSON-LD Schema (Using dangerouslySetInnerHTML is safer for JSON in Helmet) */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}