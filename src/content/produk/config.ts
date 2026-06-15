import { defineCollection, z } from "astro:content";

const produk = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      // ← destructure image dari parameter
      name: z.string(),
      category: z.string(),
      image: image(),
      logo: image(),
      nameKey: z.string(),
      descKey: z.string(),
      features: z
        .array(
          z.object({
            titleKey: z.string(),
            items: z.array(z.string()).optional().default([]),
            descKey: z.string().optional(),
          }),
        )
        .optional()
        .default([]),
      variants: z
        .array(
          z.object({
            name: z.string(),
            image: image(),
          }),
        )
        .optional()
        .default([]),
    }),
});

export const collections = { produk };
