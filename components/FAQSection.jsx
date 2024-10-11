import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question:
      "How can DORA metrics help improve software delivery performance?",
    answer:
      "DORA metrics provide key insights into software delivery performance, helping teams identify bottlenecks and optimize their workflows for faster and more reliable releases.",
  },
  {
    question: "What are DORA metrics, and how do they help in an IDP?",
    answer:
      "DORA metrics (Deployment Frequency, Lead Time for Changes, Mean Time to Recovery, and Change Failure Rate) are key indicators used to measure software delivery performance. In an Internal Developer Platform (IDP), a DORA metrics dashboard provides real-time visibility into these metrics, helping teams track deployment efficiency and system reliability. By using the dashboard, teams can quickly identify bottlenecks, improve deployment speed, and reduce recovery time from failures. It supports continuous improvement, enabling faster, more reliable software delivery.",
  },
  {
    question:
      "Can DORA metrics be customized for different teams within the organization?",
    answer:
      "Yes, DORA metrics can be tailored to meet the specific needs of various teams, ensuring that the metrics align with the unique goals and workflows of each team.",
  },
  {
    question: "How frequently should teams review their DORA metrics?",
    answer:
      "Teams should regularly review their DORA metrics, ideally on a weekly or bi-weekly basis, to ensure that they are continuously improving their software delivery performance.",
  },
];

const FAQSection = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-4">FAQs</h2>
      <p className="text-center text-[#878B9E] text-sm font-medium mb-10">
        Your most burning questions on development efficiency and platform
        engineering answered!
      </p>
      <Accordion
        type="single"
        collapsible
        className="flex flex-col gap-4"
        defaultValue="item-1"
      >
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border px-4 rounded-sm"
          >
            <AccordionTrigger className="font-medium text-base hover:no-underline hover:text-primary py-2 data-[state=open]:text-[#0683DE]">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 border-l-2 border-[#1695F1] pl-4 pr-2 mb-4 mt-2 pb-0 text-xs leading-6">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQSection;
