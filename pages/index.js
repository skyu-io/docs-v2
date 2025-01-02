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

  if (!isSanityConfigured) {
    return { props: { data: null } };
  }

  const articles = await client?.fetch(postQuery);

  return {
    props: {
      articles,
    },
    revalidate: 60,
  };
}
