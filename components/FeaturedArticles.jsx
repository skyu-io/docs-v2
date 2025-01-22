import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/imageBuilder";

const FeatureArticleCard = ({ imageSrc, title, tags, date, slug }) => {
  return (
    <div className="bg-white rounded-lg p-4 border border-gray-200 gap-4 flex justify-between">
      {/* Image */}
      <Link href={`https://skyu.io/blogs/${slug}`}>
        <img
          src={imageSrc}
          alt={title}
          className="w-64 h-full object-cover rounded-md mb-4"
        />
      </Link>

      <div className="flex flex-col gap-2">
        {/* Title */}
        <h3 className="text-sm font-semibold text-[#424B66] leading-6 hover:text-[#0683DE] mb-2">
          <Link href={`https://skyu.io/blogs/${slug}`}>{title}</Link>
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap space-x-2 mb-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`px-2 py-1 text-xs rounded bg-[#E8F4FE] text-[#1695F1]`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center text-[#878B9E] text-xs italic">
          <span>{date}</span>
          <Image
            src="/logo/SkyULogo.svg"
            width={30}
            height={30}
            alt="skyu logo"
            className="border rounded-full border-[#0368B1]"
          />
        </div>
      </div>
    </div>
  );
};

const FeatureArticles = ({ articles }) => {
  return (
    <div className="container mx-auto pt-10 pb-24">
      <h2 className="text-3xl font-bold text-center mb-4">Feature Articles</h2>
      <p className="text-center text-[#878B9E] text-sm font-medium mb-10">
        Ever wondered why we built that? Every SkyU feature has a story behind
        it.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles?.map((article, index) => (
          <FeatureArticleCard
            key={index}
            imageSrc={
              article.mainImage
                ? urlFor(article.mainImage)
                : "/placeholder.png"
            }
            title={article.title}
            tags={article.categories.map((cat) => cat.title)}
            date={new Date(article.publishedAt).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
            slug={article.slug.current}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureArticles;
