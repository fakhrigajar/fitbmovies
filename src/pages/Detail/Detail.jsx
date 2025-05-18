import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieThumbnail from "../../components/MovieThumbnail/MovieThumbnail";
import axios from "axios";
import MoviesListSection from "../../components/MoviesListSection/MoviesListSection";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import { StyledSection } from "../../assets/styles/styled.components";
import Error from "../Error/Error";
import toast from "react-hot-toast";

function Detail() {
  const { id } = useParams();
  const detailUrl = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const castsUrl = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
  const reviewsUrl = `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US`;
  const recommendationsUrl = `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`;
  const [detail, setDetail] = useState({});
  const [casts, setCasts] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [checkId, setCheckId] = useState(true);

  const getAllData = () => {
    axios
      .get(detailUrl, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTM5MmU4MDk3NzU4NGYzOWIzYWY5ZjZjNWEwZTRhNyIsIm5iZiI6MTcwMTUxNDg4MC42NzI5OTk5LCJzdWIiOiI2NTZiMGU4MDg4MDU1MTAwYzY4MDdjODUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.CnxGT8GHBEJXwg5zZVdMFJXiacJR2DzR8pkeBfLXg5E",
          Accept: "application/json",
        },
      })
      .then((res) => {
        setDetail(res.data);
        setCheckId(true);
      })
      .catch((err) => {
        toast.error(err.response.data.status_message);
        setCheckId(false);
      });
    if (checkId) {
      axios
        .get(castsUrl, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTM5MmU4MDk3NzU4NGYzOWIzYWY5ZjZjNWEwZTRhNyIsIm5iZiI6MTcwMTUxNDg4MC42NzI5OTk5LCJzdWIiOiI2NTZiMGU4MDg4MDU1MTAwYzY4MDdjODUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.CnxGT8GHBEJXwg5zZVdMFJXiacJR2DzR8pkeBfLXg5E",
            Accept: "application/json",
          },
        })
        .then((res) => setCasts(res.data.cast));
      axios
        .get(reviewsUrl, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTM5MmU4MDk3NzU4NGYzOWIzYWY5ZjZjNWEwZTRhNyIsIm5iZiI6MTcwMTUxNDg4MC42NzI5OTk5LCJzdWIiOiI2NTZiMGU4MDg4MDU1MTAwYzY4MDdjODUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.CnxGT8GHBEJXwg5zZVdMFJXiacJR2DzR8pkeBfLXg5E",
            Accept: "application/json",
          },
        })
        .then((res) => setReviews(res.data.results));
      axios
        .get(recommendationsUrl, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTM5MmU4MDk3NzU4NGYzOWIzYWY5ZjZjNWEwZTRhNyIsIm5iZiI6MTcwMTUxNDg4MC42NzI5OTk5LCJzdWIiOiI2NTZiMGU4MDg4MDU1MTAwYzY4MDdjODUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.CnxGT8GHBEJXwg5zZVdMFJXiacJR2DzR8pkeBfLXg5E",
            Accept: "application/json",
          },
        })
        .then((res) => setRecommendations(res.data.results));
    }
  };

  useEffect(() => {
    getAllData();
  }, [id, checkId]);

  if (!checkId) {
    return <Error />;
  }
  return (
    <StyledSection className="!py-5">
      <div className="rounded-xl overflow-hidden">
        <MovieThumbnail movie={detail} />
      </div>
      <MovieDetails
        getAllData={getAllData}
        casts={casts}
        reviews={reviews}
        detail={detail}
        checkId={checkId}
      />
      {recommendations.length > 0 && (
        <MoviesListSection
          title="Recommendations"
          link="recommendations"
          list={recommendations}
        />
      )}
    </StyledSection>
  );
}

export default Detail;
