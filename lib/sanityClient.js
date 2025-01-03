import { createClient } from "@sanity/client";

const isSanityConfigured = !!(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
  process.env.NEXT_PUBLIC_SANITY_DATASET
);

let client = null;

if (isSanityConfigured) {
  client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: process.env.NODE_ENV === "production",
    apiVersion: "2021-03-25",
    token: process.env.SANITY_READ_TOKEN,
  });
} else {
  console.warn(
    "Sanity is not configured."
  );
}

export { client, isSanityConfigured };
