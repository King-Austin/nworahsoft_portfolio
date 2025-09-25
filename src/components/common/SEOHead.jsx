import { Helmet } from 'react-helmet-async';

const SEOHead = ({
  title = "NworahSoft Technologies - Custom Software Development | Web & Mobile Apps Nigeria",
  description = "Leading Nigerian software development company specializing in custom web applications, e-commerce platforms, mobile apps, and digital solutions. React, Node.js, Python experts.",
  keywords = "software development Nigeria, web development Lagos, mobile app development, e-commerce Nigeria, React development, Node.js, Python programming",
  image = "/assets/img/about/about-square-13.webp",
  url = "https://nworahsoft.com",
  type = "website"
}) => {
  const siteName = "NworahSoft Technologies";
  const twitterHandle = "@nworahsoft"; // Replace with actual Twitter handle

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={siteName} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_NG" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      {twitterHandle && <meta property="twitter:site" content={twitterHandle} />}

      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#f85d23" />
      <meta name="msapplication-TileColor" content="#f85d23" />
      <meta name="application-name" content={siteName} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": siteName,
          "url": url,
          "logo": `${url}/assets/img/logo.webp`,
          "description": description,
          "foundingDate": "2020",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Awka",
            "addressRegion": "Anambra",
            "addressCountry": "NG"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+234-XXX-XXX-XXXX",
            "contactType": "customer service",
            "availableLanguage": "English"
          },
          "sameAs": [
            "https://linkedin.com/company/nworahsoft",
            "https://twitter.com/nworahsoft",
            "https://github.com/nworahsoft"
          ],
          "serviceType": ["Web Development", "Mobile App Development", "E-commerce Solutions", "Custom Software Development"],
          "areaServed": {
            "@type": "Country",
            "name": "Nigeria"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;
