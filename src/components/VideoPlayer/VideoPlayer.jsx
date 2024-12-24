import React, { useEffect, useState } from "react";
import { baseUrl } from "../../constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setItemToVideo } from "../../features/video/videoSlice";

function VideoPlayer() {
  const [trailer, setTrailer] = useState({});
  const video = useSelector((state) => state.video.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (video.isActive) {
      axios
        .get(`${baseUrl}/movie/${video.id}/videos?language=en-US`, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTM5MmU4MDk3NzU4NGYzOWIzYWY5ZjZjNWEwZTRhNyIsIm5iZiI6MTcwMTUxNDg4MC42NzI5OTk5LCJzdWIiOiI2NTZiMGU4MDg4MDU1MTAwYzY4MDdjODUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.CnxGT8GHBEJXwg5zZVdMFJXiacJR2DzR8pkeBfLXg5E",
            Accept: "application/json",
          },
        })
        .then((res) => {
          setTrailer(res.data.results[0]);
        });
    }
  }, [video.isActive]);

  return (
    <div
      onClick={() => dispatch(setItemToVideo({ id: null, isActive: false }))}
      className={`fixed !w-full h-full bg-black top-0 bg-opacity-80 z-[110] flex items-center justify-center duration-300 ${
        video.isActive ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-[80%] desktop:h-[90%] sm:h-[75%] h-[50%] bg-black rounded-xl overflow-hidden flex items-center"
      >
        {video.isActive && (
          <iframe
            className="w-full h-full"
            width="640"
            height="360"
            src={`https://www.youtube.com/embed/${trailer?.key}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
}

export default VideoPlayer;
