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
      title: "FITBMovies",
      childs: [
        {
          label: "Movies",
          value: "/movies",
        },
        {
          label: "Explore",
          value: "/explore",
        },
        {
          label: "Contact",
          value: "/contact",
        },
      ],
    },
    {
      title: "Connect With us",
      socials: [
        { value: "https://www.facebook.com/", icon: <FacebookIcon /> },
        { value: "https://www.instagram.com/", icon: <InstagramIcon /> },
        { value: "https://web.telegram.org/", icon: <TelegramIcon /> },
      ],
    },
  ];

  return (
    <footer className="mb-[68px] sm:mb-0 px-5 sm:px-10 pb-[50px] pt-[100px] bg-dark-06 flex flex-col gap-[100px] overflow-hidden">
      <div
        className="grid sm:flex sm:justify-between gap-[30px]"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}
      >
        {navigations.map((navigation, i) => (
          <Flex key={i} vertical gap={24}>
            <h1 className="text-xl font-semibold">{navigation.title}</h1>
            {navigation.childs ? (
              <ul className="sm:flex gap-3">
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
                    <Link target="_blank" to={navigationSocial.value} key={i}>
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
        <p className="text-gray-60">@2023 FITBMovies, All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
