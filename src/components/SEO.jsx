import { Title, Meta, Link as HeadLink } from "react-head";

/**
 * SEO component to inject common meta tags
 * props:
 * - title: string (required)
 * - description: string
 * - canonical: string (absolute URL)
 * - image: string (absolute URL for OG/Twitter)
 * - type: string (website | article | product)
 * - locale: string (fr_FR by default)
 */
export default function SEO({
  title,
  description = "Menuiseries PVC, aluminium et bois: fenêtres, portes, coulissants, volets – fabrication et pose.",
  canonical,
  image,
  type = "website",
  locale = "fr_FR",
  jsonLd,
}) {
  return (
    <>
      {title && <Title>{title}</Title>}
      {description && <Meta name="description" content={description} />}
      <Meta name="robots" content="index,follow" />
      <Meta name="theme-color" content="#0f172a" />

      {canonical && <HeadLink rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <Meta property="og:site_name" content="Axelium Menuiseries" />
      {title && <Meta property="og:title" content={title} />}
      {description && <Meta property="og:description" content={description} />}
      <Meta property="og:type" content={type} />
      {canonical && <Meta property="og:url" content={canonical} />}
      {image && <Meta property="og:image" content={image} />}
      <Meta property="og:locale" content={locale} />

      {/* Twitter */}
      <Meta name="twitter:card" content="summary_large_image" />
      {title && <Meta name="twitter:title" content={title} />}
      {description && <Meta name="twitter:description" content={description} />}
      {image && <Meta name="twitter:image" content={image} />}

      {/* JSON-LD */}
      {jsonLd &&
        (Array.isArray(jsonLd) ? (
          jsonLd.map((obj, idx) => (
            <script
              key={idx}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
            />
          ))
        ) : (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        ))}
    </>
  );
}
