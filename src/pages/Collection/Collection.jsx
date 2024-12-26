import React, { Fragment } from "react";
import { StyledSection } from "../../assets/styles/styled.components";
import { useSelector } from "react-redux";
import MovieCard from "../../components/MovieCard/MovieCard";
import FAQ from "../../components/FAQ/FAQ";
import Loader from "../../components/Loader/Loader";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function Collection() {
  const collection = useSelector((state) => state.collection.value);
  const navigate = useNavigate();

  return (
    <StyledSection className="!gap-10 !py-10">
      {collection.length ? (
        <Fragment>
          <h1 className="text-center text-4xl font-bold">List of collection</h1>
          <div
            className="grid gap-5"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            }}
          >
            {collection.map((collectionItem, i) => (
              <MovieCard listItem={collectionItem} key={i} />
            ))}
          </div>
        </Fragment>
      ) : (
        <div className="flex flex-col items-center justify-center gap-2">
          <Loader />
          <p>Explore movies for your collection</p>
          <Button
            onClick={() => navigate("/")}
            className="bg-primary-45 mt-2 !p-2 !px-4 h-fit text-xl font-bold text-white border-transparent hover:!bg-primary-55 hover:!text-white hover:!border-primary-55"
          >
            Back to Home
          </Button>
        </div>
      )}
    </StyledSection>
  );
}

export default Collection;
