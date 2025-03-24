"use client";
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What is Coursiv?",
    answer: "Coursiv is an online educational platform that helps users learn AI tools and digital skills to increase their income potential. It offers courses on high-income skills, online professions, and applying AI in business."
  },
  {
    question: "How to download and use Coursiv",
    answer: "Please download the Coursiv app from the Google Play Store (for Android) or Apple App Store (for iOS). Once installed, create an account by signing up. After registering, browse the available courses, select one, and start learning at your own pace."
  },
  {
    question: "How to log in into Coursiv?",
    answer: "Open the app or visit the Coursiv website. Enter your registered email and password in the login fields. Once logged in, you can access your courses, tools and monitor your progress."
  },
  {
    question: "How to cancel Coursiv subscription?",
    answer: "Yes, you can cancel your subscription through your account settings in the subscription section. For specific cancellation or refund details, review Coursiv's terms and conditions. If needed, you can contact our support center for further assistance."
  }
];

const AccordionItem = ({ item, isOpen, onClick, index }: {
  item: FAQItem;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}) => (
  <div className="border border-gray-200 rounded-lg overflow-hidden">
    <button
      onClick={onClick}
      className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-50 transition-all duration-200"
      aria-expanded={isOpen}
      aria-controls={`faq-${index}`}
    >
      <h3 className="text-[#24234c] text-[20px] font-medium text-left">{item.question}</h3>
      <div className={`transform transition-transform duration-200 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-gray-500">
          <path d="M9.16663 9.16663V4.16663H10.8333V9.16663H15.8333V10.8333H10.8333V15.8333H9.16663V10.8333H4.16663V9.16663H9.16663Z" 
                fill="currentColor"/>
        </svg>
      </div>
    </button>
    <div 
      className={`transition-all duration-200 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden`}
      id={`faq-${index}`}
    >
      <div className="px-6 py-4 text-[#78788e] text-base bg-gray-50">
        {item.answer}
      </div>
    </div>
  </div>
);

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20">
        <div className="lg:w-1/3">
          <h2 className="text-[#24234c] text-3xl lg:text-4xl font-medium leading-tight tracking-[-1px]">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-[#24234c] text-lg opacity-90">
            Find answers to common questions about Coursiv
          </p>
        </div>
        
        <div className="lg:w-2/3">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
