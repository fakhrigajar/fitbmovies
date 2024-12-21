import { Flex } from "antd";
import React from "react";

function SectionHeader({ title, description }) {
  return (
    <Flex vertical gap={14}>
      <h1 className="desktop:font-bold desktop:text-[38px] sm:font-semibold sm:text-3xl text-2xl">
        {title}
      </h1>
      <p className="text-gray-60 text-sm sm:text-lg">{description}</p>
    </Flex>
  );
}

export default SectionHeader;
