import React, { useEffect, useState } from "react";
import { StyledSection } from "../../assets/styles/styled.components";
import { Image, Input } from "antd";
import { useClerk, useUser } from "@clerk/clerk-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FAQ from "../../components/FAQ/FAQ";
import LogoutIcon from "../../assets/icons/LogoutIcon";

function Profile() {
  const { user } = useUser();
  const { signOut } = useClerk();
  const createdDateObj = new Date(user?.createdAt);
  const lastSignObj = new Date(user?.createdAt);
  const options = { day: "2-digit", month: "long", year: "numeric" };
  const formattedCreatedDate = createdDateObj.toLocaleDateString(
    "en-GB",
    options
  );
  const formattedLastSign = lastSignObj.toLocaleDateString("en-GB", options);
  const wishlist = useSelector((state) => state.wishlist.value);
  const collection = useSelector((state) => state.collection.value);
  const [screenSize, setScreenSize] = useState("desktop");
  useEffect(() => {
    const updateScreenSize = () => {
      if (window.innerWidth >= 1024) {
        setScreenSize("desktop");
      } else if (window.innerWidth >= 640) {
        setScreenSize("sm");
      } else {
        setScreenSize("");
      }
    };
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  const collectionItems =
    screenSize === "desktop"
      ? collection.slice(0, 5)
      : screenSize === "sm"
      ? collection.slice(0, 3)
      : collection.slice(0, 1);

  const wishlistItems =
    screenSize === "desktop"
      ? wishlist.slice(0, 5)
      : screenSize === "sm"
      ? wishlist.slice(0, 3)
      : wishlist.slice(0, 1);

  return (
    <section>
      <StyledSection className="!py-10 !pb-0">
        <div className="flex flex-col gap-5">
          <div
            className="flex justify-center items-center bg-dark-12 rounded-lg p-10 relative sm:min-h-60 mb-10"
            data-aos="fade-up"
          >
            <div className="flex items-center gap-5 absolute left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-5 -bottom-10">
              <Image
                className="rounded-full border-4 border-dark-12 desktop:!w-36 !w-24"
                src={user?.imageUrl}
              />
            </div>
          </div>
          <div className="flex flex-col gap-5" data-aos="fade-up">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label>Username:</label>
                <Input
                  value={user?.username}
                  className="!bg-dark-10 !border-dark-15 !text-gray-60 py-2"
                  disabled
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Email:</label>
                <Input
                  value={user?.primaryEmailAddress.emailAddress}
                  className="!bg-dark-10 !border-dark-15 !text-gray-60 py-2"
                  disabled
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label>Created at:</label>
                <Input
                  value={formattedCreatedDate}
                  className="!bg-dark-10 !border-dark-15 !text-gray-60 py-2"
                  disabled
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Last sign at:</label>
                <Input
                  value={formattedLastSign}
                  className="!bg-dark-10 !border-dark-15 !text-gray-60 py-2"
                  disabled
                />
              </div>
            </div>
          </div>
          {wishlist.length ? (
            <div className="flex flex-col gap-2" data-aos="fade-up">
              <h1>Wishlist</h1>
              <div className="flex gap-2 items-center">
                {wishlistItems.map((wishlistItem, i) => (
                  <Link key={i} to={`/explore/${wishlistItem.id}`}>
                    <div className="rounded-lg p-2 bg-dark-15 flex gap-2 items-center">
                      <img
                        className="w-32 h-32 object-cover rounded-lg"
                        src={`https://image.tmdb.org/t/p/original${wishlistItem.backdrop_path}`}
                        alt={wishlistItem.title + " image"}
                      />
                    </div>
                  </Link>
                ))}
                {wishlist.length > 3 && (
                  <Link
                    to="/wishlist"
                    className="flex items-center cursor-pointer p-2 hover:text-primary-45 w-fit h-fit"
                  >
                    See all
                  </Link>
                )}
              </div>
            </div>
          ) : (
            ""
          )}
          {collection.length ? (
            <div className="flex flex-col gap-2" data-aos="fade-up">
              <h1>Collection</h1>
              <div className="flex gap-2 items-center">
                {collectionItems.map((collectionItem, i) => (
                  <Link key={i} to={`/explore/${collectionItem.id}`}>
                    <div className="rounded-lg p-2 bg-dark-15 flex gap-2 items-center">
                      <img
                        className="w-32 h-32 object-cover rounded-lg"
                        src={`https://image.tmdb.org/t/p/original${collectionItem.backdrop_path}`}
                        alt={collectionItem.title + " image"}
                      />
                    </div>
                  </Link>
                ))}
                {collection.length > 3 && (
                  <Link
                    to="/collection"
                    className="flex items-center cursor-pointer p-2 hover:text-primary-45 w-fit h-fit"
                  >
                    See all
                  </Link>
                )}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div
          onClick={() => signOut()}
          className="flex gap-2 items-center hover:opacity-70 cursor-pointer"
        >
          <LogoutIcon color={"white"} />
          Logout
        </div>
      </StyledSection>
      <FAQ />
    </section>
  );
}

export default Profile;
