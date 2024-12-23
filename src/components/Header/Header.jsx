import React, { useEffect } from "react";
import siteLogo from "../../assets/images/site-logo.svg";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Badge, Button, Dropdown, Flex } from "antd";
import { Sling as Hamburger } from "hamburger-react";
import { SignedIn, SignedOut, useClerk, useUser } from "@clerk/clerk-react";
import BookmarkOutlineIcon from "../../assets/icons/BookmarkOutlineIcon";
import WishOutlineIcon from "../../assets/icons/WishOutlineIcon";
import LogoutIcon from "../../assets/icons/LogoutIcon";
import { useSelector } from "react-redux";

function Header() {
  const location = useLocation();
  const [activeNav, setActiveNav] = useState(location.pathname);
  const [showBurger, setShowBurger] = useState(false);
  const [showHeader, setShowHeader] = useState(window.scrollY > 100);
  const { user } = useUser();
  const { signOut } = useClerk();
  const collection = useSelector((state) => state.collection.value);
  const wishlist = useSelector((state) => state.wishlist.value);
  useEffect(() => {}, [collection, wishlist]);
  const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const storedCollection = JSON.parse(localStorage.getItem("collection")) || [];

  const items = [
    {
      label: (
        <Flex className="p-2" align="center" gap={10}>
          <img className="w-10 h-10 rounded-full" src={user?.imageUrl} alt="" />
          <Flex vertical gap={5}>
            <h1 className="font-semibold text-white">{user?.username}</h1>
            <p className="text-xs text-gray-60">
              {user?.primaryEmailAddress.emailAddress}
            </p>
          </Flex>
        </Flex>
      ),
      key: 0,
    },
    {
      type: "divider",
    },
    {
      label: (
        <Link to="/collections">
          <div className="flex gap-2 justify-between py-2 items-center">
            <Flex align="center" gap={10}>
              <BookmarkOutlineIcon color="#999999" />
              <p className="text-white">Collections</p>
            </Flex>
            <Badge
              count={storedCollection.length}
              overflowCount={10}
              showZero
              color="#262626"
            />
          </div>
        </Link>
      ),
      key: 1,
    },
    {
      label: (
        <Link to="/collections">
          <div className="flex gap-2 justify-between py-2 items-center">
            <Flex align="center" gap={10}>
              <WishOutlineIcon color="#999999" />
              <p className="text-white">Wishlist</p>
            </Flex>
            <Badge
              count={storedWishlist.length}
              overflowCount={10}
              showZero
              color="#262626"
            />
          </div>
        </Link>
      ),
      key: 2,
    },
    {
      type: "divider",
    },
    {
      label: (
        <div
          className="py-2 text-white font-bold flex gap-3"
          onClick={() => signOut()}
        >
          <LogoutIcon color="#999999" />
          Logout
        </div>
      ),
      key: 3,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setActiveNav(location.pathname);
  }, [location]);

  const navigations = [
    {
      label: "Home",
      value: "/",
    },
    {
      label: "Movies",
      value: "/movies",
    },
    {
      label: "Contact Us",
      value: "/contact",
    },
    {
      label: "Subscriptions",
      value: "/subscriptions",
    },
  ];

  return (
    <header
      className={`bg-dark-08 text-gray-99 w-full sticky top-0 z-50 duration-300 ${
        showHeader ? "bg-dark-08 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto px-10 flex justify-between items-center h-16">
        <div className="block desktop:hidden z-10">
          <Hamburger toggled={showBurger} toggle={setShowBurger} />
        </div>
        <div className="text-2xl font-bold">
          <Link to="/" className="text-primary-50">
            <Flex align="center" gap={5}>
              <img className="w-10" src={siteLogo} />
              <p className="hidden sm:block">
                FITB
                <span className="text-white">Movies</span>
              </p>
            </Flex>
          </Link>
        </div>
        <nav
          className={`flex flex-col justify-center items-center text-2xl desktop:text-base bg-dark-10 desktop:bg-transparent desktop:flex-row gap-6 fixed w-full desktop:w-fit h-full desktop:h-fit left-0 desktop:static duration-300 ${
            showBurger ? "top-0" : "-top-full"
          }`}
        >
          {navigations.map((nav) => (
            <Link
              onClick={() => {
                setActiveNav(nav.value);
                setShowBurger(false);
              }}
              key={nav.value}
              to={nav.value}
              className={`hover:text-primary-55 transition duration-300 ${
                activeNav === nav.value
                  ? "text-primary-50"
                  : "text-gray-99 hover:text-primary-55"
              }`}
            >
              {nav.label}
            </Link>
          ))}
        </nav>
        {user ? (
          <SignedIn>
            <Dropdown
              className="bg-dark-12 cursor-pointer p-2 rounded-xl"
              placement="bottomRight"
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <Flex align="center" gap={5} onClick={(e) => e.preventDefault()}>
                <img
                  className="w-5 h-5 rounded-full"
                  src={user?.imageUrl}
                  alt={user?.fullName}
                />
                <h1 className="text-white">{user?.username}</h1>
              </Flex>
            </Dropdown>
          </SignedIn>
        ) : (
          <SignedOut>
            <Flex className="hidden desktop:flex" align="center">
              <Link to="/register">
                <Button className="px-4 py-2 bg-transparent text-white border-0 rounded hover:!bg-transparent hover:!text-primary-50 transition duration-300">
                  Register
                </Button>
              </Link>
              <Link to="/login">
                <Button className="px-4 py-2 bg-primary-45 text-white font-semibold border border-primary-50 rounded hover:!bg-transparent hover:!border-primary-50 hover:!text-primary-50 transition duration-300">
                  Login
                </Button>
              </Link>
            </Flex>
          </SignedOut>
        )}
      </div>
    </header>
  );
}

export default Header;
