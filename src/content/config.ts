import { z, defineCollection } from 'astro:content';

const settings = defineCollection({
    type: 'data',
    schema: z.object({
        siteTitle: z.string(),
        logo: z.string().optional(),
        heroImage: z.string(),
        heroTitle: z.string(),
        heroSubtitle: z.string(),
    }),
});

const about = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        profileImage: z.string(),
    })
});

const portfolio = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        coverImage: z.string(),
        galleryImages: z.array(z.string()).optional(),
        description: z.string(),
    })
});

const courses = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        coverImage: z.string(),
        description: z.string(),
        price: z.number(),
        duration: z.string(),
        targetAudience: z.string(),
    })
});

const contact = defineCollection({
    type: 'content',
    schema: z.object({
        instagram: z.string().optional(),
        line: z.string().optional(),
        email: z.string().optional(),
        contactText: z.string(),
    })
});

export const collections = {
    settings,
    about,
    portfolio,
    courses,
    contact
};
