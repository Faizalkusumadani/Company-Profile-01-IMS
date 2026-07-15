// src/data/schema.ts
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  name: "PT. Intisukses Mitra Sejati",
  alternateName: "Intisukses Mitra Sejati",
  description:
    "Distributor Building Materials, MEP Systems (Mechanical, Electrical, Plumbing), Sanitary, dan EV Charger untuk wilayah Jabodetabek.",
  knowsAbout: ["MEP Systems", "Building Materials", "Sanitary", "EV Charger"],
  url: "https://intisukses-ms.com",
  telephone: "+62-213-0067-868",
  email: "sales@intisukses-ms.com",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Rukan Business Park Kebon Jeruk Blok C-2 No.8, Jl. Meruya Ilir No.88",
    addressLocality: "Kembangan, Jakarta Barat",
    addressRegion: "DKI Jakarta",
    postalCode: "11620",
    addressCountry: "ID",
  },
  sameAs: [
    "https://www.instagram.com/intisuksesmitrasejati/",
    "https://www.facebook.com/intisuksesms/",
    "https://www.tiktok.com/@intisuksesmitrasejati",
  ],
};

// Dipakai untuk halaman brand-hub seperti /produk/[slug] — 1 brand, banyak varian item
// (contoh: halaman "Daikin" yang isinya 6 varian AC Daikin)
export function productGroupSchema(opts: {
  name: string;
  description: string;
  url: string;
  image?: string;
  category?: string;
  variantNames?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    ...(opts.image && { image: opts.image }),
    ...(opts.category && { category: opts.category }),
    brand: { "@type": "Brand", name: opts.name },
    ...(opts.variantNames &&
      opts.variantNames.length > 0 && {
        hasVariant: opts.variantNames.map((variantName) => ({
          "@type": "Product",
          name: variantName,
        })),
      }),
  };
}

// Dipakai di halaman produk — lihat contoh pemakaian di komentar bawah
export function productSchema(opts: {
  name: string;
  description: string;
  image: string;
  url: string;
  brand?: string;
  category?: string;
  warrantyYears?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: opts.name,
    description: opts.description,
    image: opts.image,
    url: opts.url,
    ...(opts.category && { category: opts.category }),
    ...(opts.brand && {
      brand: { "@type": "Brand", name: opts.brand },
      manufacturer: { "@type": "Organization", name: opts.brand },
    }),
    ...(opts.warrantyYears && {
      warranty: {
        "@type": "WarrantyPromise",
        durationOfWarranty: {
          "@type": "QuantitativeValue",
          value: opts.warrantyYears,
          unitCode: "ANN",
        },
      },
    }),
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "PT. Intisukses Mitra Sejati" },
    },
  };
}
