import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "xxxxx";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "xxxxx";
const token = process.env.SANITY_READ_TOKEN || "xxxxx";

const isSanityConfigured = !!(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
  process.env.NEXT_PUBLIC_SANITY_DATASET
);

let client = null;

if (isSanityConfigured) {
  client = createClient({
    projectId,
    dataset,
    useCdn: false,
    apiVersion: "2021-03-25",
    token,
  });
}

export default { client, isSanityConfigured };
