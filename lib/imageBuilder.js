import imageUrlBuilder from "@sanity/image-url";
import { client, isSanityConfigured } from "./sanityClient";

let builder = null;

if (isSanityConfigured && client) {
  builder = imageUrlBuilder(client);
} 
// else {
//   console.warn(
//     "Sanity is not configured."
//   );
// }

export function urlFor(source) {
  if (!builder || !source) {
    return "/placeholder.png";
  }
  return builder.image(source);
}
