import { HelpCircle, Puzzle, Settings } from "lucide-react";

const cardData = [
  {
    icon: HelpCircle,
    title: "SkyU Support Desk",
    description:
      "Raise tickets, check ticket status and troubleshoot issues with our dedicated teams.",
  },
  {
    icon: Settings,
    title: "Feature Guides",
    description: "Explore how to use our platform's key features effectively.",
  },
  {
    icon: Puzzle,
    title: "Insights & Extensions",
    description:
      "Discover tips and tools to enhance your development experience.",
  },
];

const Card = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg p-6 text-center border border-gray-200">
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
        {cardData.map((card, index) => (
          <div key={index} className="w-full md:w-1/3">
            <Card
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
