import { Flex } from "antd";
import React from "react";
import serviceIcon1 from "../../assets/images/services-icon-smartphone.png";
import serviceIcon2 from "../../assets/images/services-icon-tablet.png";
import serviceIcon3 from "../../assets/images/services-icon-smart-tv.png";
import serviceIcon4 from "../../assets/images/services-icon-laptops.png";
import serviceIcon5 from "../../assets/images/services-icon-gaming-consoles.png";
import serviceIcon6 from "../../assets/images/services-icon-vr-headsets.png";
import SectionHeader from "../SectionHeader/SectionHeader";
import {
  StyledDarkSurface,
  StyledSection,
} from "../../assets/styles/styled.components";

function Services() {
  const services = [
    {
      title: "Smartphones",
      icon: serviceIcon1,
      description:
        "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },
    {
      title: "Tablet",
      icon: serviceIcon2,
      description:
        "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },
    {
      title: "Smart TV",
      icon: serviceIcon3,
      description:
        "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },
    {
      title: "Laptops",
      icon: serviceIcon4,
      description:
        "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },
    {
      title: "Gaming Consoles",
      icon: serviceIcon5,
      description:
        "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },
    {
      title: "VR Headsets",
      icon: serviceIcon6,
      description:
        "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },
  ];

  return (
    <StyledSection className="!gap-10">
      <SectionHeader
        title={"We Provide you streaming experience across various devices."}
        description={
          "With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."
        }
      />
      <div className="grid desktop:grid-cols-3 sm:grid-cols-2 gap-[30px]">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-dark-06 border border-dark-15 desktop:p-[50px] p-[30px] rounded-xl flex flex-col sm:gap-[30px] gap-4 relative overflow-hidden duration-300 group hover:scale-[0.97]"
          >
            <div
              className="w-[1000px] h-[1000px] absolute left-0 top-0 duration-300 group-hover:-left-32"
              style={{
                backgroundImage:
                  "radial-gradient(closest-side, rgba(227, 0, 0, 0.21), transparent)",
              }}
            ></div>
            <Flex align="center" gap={12} className="flex-col sm:flex-row">
              <StyledDarkSurface width={54} height={54}>
                <img src={service.icon} alt={service.title + "image"} />
              </StyledDarkSurface>
              <h1 className="font-semibold desktop:text-xl sm:text-lg text-xl">
                {service.title}
              </h1>
            </Flex>
            <p className="text-gray-60 sm:text-start text-center text-sm sm:text-base">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </StyledSection>
  );
}

export default Services;
