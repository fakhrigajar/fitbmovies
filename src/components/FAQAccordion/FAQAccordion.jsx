import { Flex } from "antd";
import React from "react";

function FAQAccordion({ i, activeFAQ, setActiveFAQ, faq, isLast, listLength }) {
  return (
    <div
      data-aos={`fade-left`}
      style={{
        borderImage:
          "linear-gradient(to right bottom, #E50000 0%, #E50000 17%, rgba(229, 0, 0, 0) 100%)",
        borderImageSlice: 1,
      }}
      className={`py-[34px] border-b border-transparent flex flex-col h-fit overflow-hidden ${
        +faq.id === listLength ? "border-none" : isLast ? "sm:border-none" : ""
      }`}
      onClick={() => {
        setActiveFAQ((prev) => (prev === faq.id ? "" : faq.id));
      }}
    >
      <div className="flex justify-between items-center gap-5">
        <Flex gap={10}>
          <span className="w-[34px] min-w-[34px] h-[34px] bg-dark-12 border border-transparent border-dark-15 flex justify-center items-center rounded-[10px]">
            0{faq.id}
          </span>
          <h1 className="text-sm desktop:text-[22px] font-medium grid place-items-center">
            {faq.question}
          </h1>
        </Flex>
        <button className="flex justify-between">
          <svg
            className="fill-white shrink-0"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center transition duration-200 ease-out ${
                activeFAQ === i && "!rotate-180"
              }`}
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                activeFAQ === i && "!rotate-180"
              }`}
            />
          </svg>
        </button>
      </div>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-gray-60 ${
          activeFAQ === faq.id
            ? "grid-rows-[1fr] opacity-100 mt-5"
            : "grid-rows-[0fr] opacity-0 mt-0"
        }`}
      >
        <p className="overflow-hidden sm:ml-[54px]">{faq.answer}</p>
      </div>
    </div>
  );
}

export default FAQAccordion;
