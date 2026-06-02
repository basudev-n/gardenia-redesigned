import sanityClientPkg from '@sanity/client';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID || '';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

let client: any = null;
if (projectId) {
  client = sanityClientPkg({
    projectId,
    dataset,
    useCdn: true,
    apiVersion: '2024-01-01'
  });
} else {
  // Fallback mock client for local dev when env vars are not set.
  client = {
    fetch: async () => {
      return [];
    }
  } as any;
}

export const sanityClient = client;
