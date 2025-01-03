import CardContainer from "@/components/CardContainer";
import FAQSection from "@/components/FAQSection";
import FeatureArticles from "@/components/FeaturedArticles";
import Hero from "@/components/Hero";
import Wrapper from "@/components/Wrapper";
import { postQuery } from "@/lib/queries";
import { client, isSanityConfigured } from "@/lib/sanityClient";

export default function HomePage({ articles }) {

  return (
    <Wrapper>
      <Hero />
      <CardContainer />
      <FAQSection />
      {isSanityConfigured && <FeatureArticles articles={articles} />}
    </Wrapper>
  );
}

export async function getStaticProps() {
  let articles = null;

  if (isSanityConfigured && client) {
    try {
      articles = await client.fetch(postQuery);
    } catch (error) {
      console.error("Error fetching articles from Sanity:", error);
      articles = null;
    }
  }

  return {
    props: {
      articles,
    },
  };
}
