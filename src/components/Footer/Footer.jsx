import { Flex } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "../../assets/icons/FacebookIcon";
import InstagramIcon from "../../assets/icons/InstagramIcon";
import TelegramIcon from "../../assets/icons/TelegramIcon";
import { StyledDarkSurface } from "../../assets/styles/styled.components";

function Footer() {
  const navigations = [
    {
      title: "Home",
      childs: [
        {
          label: "Categories",
          value: "/#categories",
        },
        {
          label: "Devices",
          value: "/#devices",
        },
        {
          label: "Pricing",
          value: "/#pricing",
        },
        {
          label: "FAQ",
          value: "/#faq",
        },
      ],
    },
    {
      title: "Movies",
      childs: [
        {
          label: "Gernes",
          value: "/movies#gernes",
        },
        {
          label: "Trending",
          value: "/movies#trending",
        },
        {
          label: "New Release",
          value: "/movies#new-release",
        },
        {
          label: "Popular",
          value: "/movies#popular",
        },
      ],
    },
    {
      title: "Support",
      childs: [
        {
          label: "Contact Us",
          value: "/contact",
        },
      ],
    },
    {
      title: "Subscription",
      childs: [
        {
          label: "Plans",
          value: "/subscription#plans",
        },
        {
          label: "Features",
          value: "/subscription#features",
        },
      ],
    },
    {
      title: "Connect With us",
      socials: [
        { value: "", icon: <FacebookIcon /> },
        { value: "", icon: <InstagramIcon /> },
        { value: "", icon: <TelegramIcon /> },
      ],
    },
  ];

  return (
    <footer className="px-5 sm:px-10 pb-[50px] pt-[100px] bg-dark-06 flex flex-col gap-[100px] overflow-hidden">
      <div
        className="grid gap-[30px]"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}
      >
        {navigations.map((navigation, i) => (
          <Flex key={i} vertical gap={24}>
            <h1 className="text-xl font-semibold">{navigation.title}</h1>
            {navigation.childs ? (
              <ul>
                {navigation.childs.map((navigationChild, i) => (
                  <li key={i} className="text-gray-60 mt-[14px]">
                    <Link
                      className="hover:text-primary-45"
                      to={navigationChild.value}
                    >
                      {navigationChild.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              navigation.socials && (
                <Flex gap={14}>
                  {navigation.socials?.map((navigationSocial, i) => (
                    <Link to={navigationSocial.value} key={i}>
                      <StyledDarkSurface
                        width={56}
                        height={56}
                        className="fill-white p-4"
                      >
                        <div className="w-8">{navigationSocial.icon}</div>
                      </StyledDarkSurface>
                    </Link>
                  ))}
                </Flex>
              )
            )}
          </Flex>
        ))}
      </div>
      <div className="text-center pt-6 border-t border-t-dark-15">
        <p className="text-gray-60">@2023 streamvib, All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
