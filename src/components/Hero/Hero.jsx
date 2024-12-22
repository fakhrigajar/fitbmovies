import React from "react";
import heroImage from "../../assets/images/hero-image.png";
import { Button, Flex } from "antd";
import PlayOutlinedIcon from "../../assets/icons/PlayOutlinedIcon";
import AnimatedGridImage from "../AnimatedGridImage/AnimatedGridImage";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative">
      <AnimatedGridImage />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-dark-08"></div>
      <div className="absolute w-full inset-0 bg-gradient-to-b from-black/20 to-black/90 py-10 flex justify-center items-center desktop:items-start">
        <div className="hero-logo hidden sm:block desktop:!w-[300px] desktop:h-[300px] sm:w-[200px] sm:h-[200px] w-[100px] h-[100px]"></div>
      </div>
      <Flex
        className="w-full absolute left-1/2 -translate-x-1/2 bottom-10"
        justify="center"
        align="center"
      >
        <div className="mx-10 sm:w-3/4 text-center flex flex-col items-center">
          <h1 className="desktop:font-bold desktop:text-[58px] sm:font-semibold sm:text-[40px] text-3xl sm:leading-10 desktop:leading-none">
            The Best Streaming Experience
          </h1>
          <p className="text-gray-60 text-sm mt-3 hidden sm:block">
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With
            StreamVibe, you can enjoy a wide variety of content, including the
            latest blockbusters, classic movies, popular TV shows, and more. You
            can also create your own watchlists, so you can easily find the
            content you want to watch.
          </p>
          <Link to="/movies">
            <Button className="mt-[30px] rounded-lg px-6 py-6 sm:font-semibold sm:text-lg bg-primary-45 hover:!bg-primary-55 text-white border-transparent hover:!border-transparent hover:!text-white">
              <PlayOutlinedIcon color={"#fff"} /> Explore movies
            </Button>
          </Link>
        </div>
      </Flex>
    </section>
  );
}

export default Hero;
