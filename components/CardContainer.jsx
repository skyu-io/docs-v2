import { HelpCircle, Puzzle, Settings } from "lucide-react";
import Link from "next/link";

const cardData = [
  {
    icon: HelpCircle,
    title: "SkyU Support Desk",
    description:
      "Raise tickets, check ticket status and troubleshoot issues with our dedicated teams.",
    link: "https://insighture-help.freshdesk.com/support/home",
    target: "_blank",
  },
  {
    icon: Settings,
    title: "Feature Guides",
    description: "Explore how to use our platform's key features effectively.",
    link: "https://skyu.io/blogs/introducing-project-releases-on-the-skyu-platform/",
    target: "_blank",
  },
  {
    icon: Puzzle,
    title: "Insights & Extensions",
    description:
      "Discover tips and tools to enhance your development experience.",
    link: "/docs/insightsinfrastructures/infrastructure/deploy-rds",
    target: "_parent",
  },
];

const Card = ({ icon: Icon, title, description, link }) => {
  return (
    <div
      className={`bg-white rounded-lg p-6 text-center border border-gray-200 ${
        link === "/"
          ? "opacity-70 cursor-default"
          : "hover:shadow-[0px_4px_71px_0px_rgba(0,_0,_0,_0.1)] transition-shadow duration-500"
      }`}
    >
      <Icon className="mx-auto mb-4 text-primary" size={40} />
      <h2 className="text-xl font-semibold mb-2 text-[#424B66]">{title}</h2>
      <p className="text-[#424B66] text-xs">{description}</p>
    </div>
  );
};

const CardContainer = () => {
  return (
    <div className="py-10 bg-[#F7F8FE] grid place-content-center">
      <div className="container flex flex-col md:flex-row justify-between space-x-0 md:space-x-6 space-y-6 md:space-y-0 ">
        {cardData.map((card, index) => {
          const isClickable = card.link !== "/";
          const cardContent = (
            <Card
              icon={card.icon}
              title={card.title}
              description={card.description}
              link={card.link}
            />
          );

          return isClickable ? (
            <Link
              href={card.link}
              target={card.target}
              key={index}
              className="w-full md:w-1/3"
            >
              {cardContent}
            </Link>
          ) : (
            <div key={index} className="w-full md:w-1/3">
              {cardContent}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardContainer;
