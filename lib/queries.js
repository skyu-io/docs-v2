import groq from 'groq';

export const postQuery = groq`
*[_type == "post" && defined(publishedAt)] | order(publishedAt desc) [0...3]{
    title,
    slug,
    author->{name, image},
    mainImage,
    "categories": categories[]->{"title": title},
    publishedAt,
    content
  }
`;
