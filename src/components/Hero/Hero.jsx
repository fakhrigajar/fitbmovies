import React from "react";
import { Button, Flex } from "antd";
import PlayOutlinedIcon from "../../assets/icons/PlayOutlinedIcon";
import AnimatedGridImage from "../AnimatedGridImage/AnimatedGridImage";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative">
      <AnimatedGridImage />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-dark-08"></div>
      <div className="absolute w-full inset-0 bg-gradient-to-b from-black/20 to-black/90 py-10 flex justify-center items-center desktop:items-start"></div>
      <Flex
        className="w-full absolute left-1/2 -translate-x-1/2 bottom-10"
        justify="center"
        align="center"
      >
        <div className="mx-10 sm:w-3/4 text-center flex flex-col items-center">
          <h1 className="desktop:font-bold desktop:text-[58px] font-semibold sm:text-[40px] text-3xl sm:leading-10 desktop:leading-none">
            Your World of Movies, Just a Click Away
          </h1>
          <p className="text-gray-60 text-sm mt-3 hidden sm:block">
            FITBMovies is your ultimate destination for an unparalleled
            streaming experience. Offering a vast library of the best movies and
            shows, FITBMovies ensures seamless access to high-quality
            entertainment, anytime and anywhere. Whether you're looking for the
            latest blockbusters, timeless classics, or exclusive content, we’ve
            got it all in one place. Our user-friendly interface and
            personalized recommendations make it easier than ever to discover
            and enjoy your favorite films and series. Get ready to experience
            streaming at its best—where comfort meets quality with every click.
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
