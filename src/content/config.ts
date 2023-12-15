import { defineCollection, z } from 'astro:content';

const hewan = defineCollection({
  type: 'content',
  schema: z.object({
    draft: z.boolean().default(false),
    date: z.date().transform((str) => new Date(str)),
    namaHewan: z.string(),
    harga: z.number(),
    bobot: z.number(),
    jenis: z.enum(['domba', 'sapi utuh', 'sapi kolektif']),
    share: z
      .object({
        image: z.string().optional(),
        title: z.string(),
      })

  })
});

export const collections = { hewan };