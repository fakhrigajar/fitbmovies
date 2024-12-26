import { Avatar, Flex, Skeleton } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import { DarkCard, StyledTag } from "../../assets/styles/styled.components";
import ReviewCard from "../ReviewCard/ReviewCard";
import StarIcon from "../../assets/icons/StarIcon";
import EyeIcon from "../../assets/icons/EyeIcon";
import { Link } from "react-router-dom";
import LinkIcon from "../../assets/icons/LinkIcon";

function MovieDetails({ casts, reviews, detail }) {
  const dateObj = new Date(detail?.release_date);
  const options = { day: "2-digit", month: "long", year: "numeric" };
  const formattedDate = dateObj.toLocaleDateString("en-GB", options);

  const formattedPopularity =
    detail?.popularity >= 1000
      ? (Number(detail?.popularity) / 1000).toFixed(1).replace(/\.0$/, "") + "k"
      : Number(detail?.popularity).toFixed(0);

  const formattedVoteAverage = Number(detail?.vote_average).toFixed(1);

  const hours = detail?.runtime && Math.floor(detail?.runtime / 60);
  const remainingMinutes = detail?.runtime && detail?.runtime % 60;

  const [maxCount, setMaxCount] = useState(10);

  useEffect(() => {
    const updateMaxCount = () => {
      if (window.matchMedia("(max-width: 400px)").matches) {
        setMaxCount(3);
      } else if (window.matchMedia("(max-width: 768px)").matches) {
        setMaxCount(5);
      } else if (window.matchMedia("(max-width: 1024px)").matches) {
        setMaxCount(8);
      } else {
        setMaxCount(10);
      }
    };
    updateMaxCount();
    window.addEventListener("resize", updateMaxCount);
    return () => {
      window.removeEventListener("resize", updateMaxCount);
    };
  }, []);

  return (
    <section className="grid desktop:grid-cols-[1fr_400px] gap-5 px-5">
      <Flex vertical gap={20}>
        <DarkCard>
          {Object.keys(detail).length !== 0 ? (
            <Fragment>
              <h1 className="text-sm sm:text-base">Description</h1>
              <p className="text-xs sm:text-base">
                {detail?.overview ? detail.overview : "-"}
              </p>
            </Fragment>
          ) : (
            <Skeleton active />
          )}
        </DarkCard>
        <DarkCard>
          {Object.keys(detail).length !== 0 ? (
            <Fragment>
              <h1 className="text-sm sm:text-base">Cast</h1>
              {casts.length ? (
                <Avatar.Group
                  size="large"
                  max={{
                    count: maxCount,
                    style: {
                      color: "#999999",
                      backgroundColor: "#141414",
                      borderColor: "#262626",
                    },
                  }}
                >
                  {casts.map((cast, i) => (
                    <Avatar
                      key={i}
                      src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                      alt={cast.original_name + " Logo"}
                    />
                  ))}
                </Avatar.Group>
              ) : (
                "-"
              )}
            </Fragment>
          ) : (
            <Skeleton active />
          )}
        </DarkCard>
        {reviews.length !== 0 ? (
          <DarkCard>
            {Object.keys(detail).length !== 0 ? (
              <Fragment>
                <h1>Reviews</h1>
                {reviews?.map((review, i) => (
                  <ReviewCard key={i} review={review} />
                ))}
              </Fragment>
            ) : (
              <Skeleton active />
            )}
          </DarkCard>
        ) : (
          ""
        )}
      </Flex>
      <DarkCard className="!gap-6">
        {Object.keys(detail).length !== 0 ? (
          <Fragment>
            <Flex vertical gap={10}>
              <h1 className="text-sm sm:text-base">Released Date</h1>
              <p className="text-xs sm:text-base">{formattedDate}</p>
            </Flex>
            <Flex vertical gap={10}>
              <h1 className="text-sm sm:text-base">Runtime</h1>
              <div className="text-xs sm:text-base">
                {hours ? (
                  <div className="flex gap-1">
                    <span>{hours}</span>
                    <span className="text-primary-60">hours</span>
                    <span>{remainingMinutes}</span>
                    <span className="text-primary-60">minutes</span>
                  </div>
                ) : (
                  <div className="flex gap-1">
                    <span>{remainingMinutes}</span>
                    <span className="text-primary-60">minutes</span>
                  </div>
                )}
              </div>
            </Flex>
            <Flex vertical gap={10}>
              <h1 className="text-sm sm:text-base">Available Languages</h1>
              <div className="flex gap-[10px] flex-wrap text-xs sm:text-base">
                {detail?.spoken_languages?.map((language, i) => (
                  <StyledTag key={i}>{language.name}</StyledTag>
                ))}
              </div>
            </Flex>
            <Flex vertical gap={10}>
              <h1 className="text-sm sm:text-base">Gernes</h1>
              <div className="flex gap-[10px] flex-wrap text-xs sm:text-base">
                {detail?.genres?.map((gerne, i) => (
                  <StyledTag key={i}>{gerne.name}</StyledTag>
                ))}
              </div>
            </Flex>
            <Flex vertical gap={10}>
              <h1 className="text-sm sm:text-base">Rating & Popularity</h1>
              <div className="flex gap-[10px] flex-wrap text-xs sm:text-base">
                <Flex align="center" gap={5}>
                  <StarIcon color={"#E50000"} />
                  <p>{formattedVoteAverage}</p>
                </Flex>
                <Flex align="center" gap={5}>
                  <EyeIcon />
                  <p>{formattedPopularity}</p>
                </Flex>
              </div>
            </Flex>

            {detail?.homepage && (
              <Flex vertical gap={10}>
                <h1 className="text-sm sm:text-base">Homepage</h1>
                <Link target="_blank" className="w-fit" to={detail.homepage}>
                  <p className="hidden sm:block">{detail.homepage}</p>
                  <p className="sm:hidden flex items-center gap-1">
                    <LinkIcon color={"#e30000"} />
                    Link
                  </p>
                </Link>
              </Flex>
            )}
          </Fragment>
        ) : (
          <Fragment>
            <Skeleton active />
            <Skeleton active />
            <Skeleton active />
          </Fragment>
        )}
      </DarkCard>
    </section>
  );
}

export default MovieDetails;
