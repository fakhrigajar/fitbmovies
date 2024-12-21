import React from "react";
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
import { Flex } from "antd";
import { Link } from "react-router-dom";

const Error = () => {
  defineElement(lottie.loadAnimation);

  return (
    <div className="flex items-center justify-center min-h-screen  text-white">
      <div className="text-center">
        <Flex className="gap-4 items-center justify-center text-9xl font-bold">
          <p>4</p>
          <lord-icon
            src="https://cdn.lordicon.com/bomiazxt.json"
            trigger="loop"
            delay="2000"
            colors="primary:#1F1F1F,secondary:#e50000"
            style={{ width: 250, height: 250 }}
          ></lord-icon>
          <p>4</p>
        </Flex>
        <h1 className="text-6xl font-semibold text-primary-50 mb-4">
          Page not found !
        </h1>
        <p className="text-gray-90">
          Oops...The link you clicked may be broken or the page may have been
          removed .We're sorry .
        </p>
        <Link to="/">
          <button className="mt-6 px-6 py-3 bg-primary-50 text-white font-semibold rounded-md hover:bg-primary-45 transition-all">
            Go to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
