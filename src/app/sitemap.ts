import type { MetadataRoute } from 'next';

import { getBaseUrl } from '@/utils/getBaseUrl';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${getBaseUrl()}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
  ];
}
