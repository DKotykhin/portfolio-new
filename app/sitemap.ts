import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://dmytro-kotykhin.pp.ua',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          en: 'https://dmytro-kotykhin.pp.ua',
          uk: 'https://dmytro-kotykhin.pp.ua/ua',
        },
      },
    },
  ];
}
