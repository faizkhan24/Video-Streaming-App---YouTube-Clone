import React, { useEffect, useState } from "react";
import VideoCard, { BgBlackVideoCard } from "./VideoCard";
import { SEARCH_RESULT_API, YOUTUBE_VIDEOS_API } from "../utils/constants";
import { Link, useSearchParams } from "react-router-dom";
import LiveVideo from "./LiveVideo";
import ShimmerUI from "./ShimmerUI";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getVideos().catch((e)=>{
      setIsLoading(false);
      setVideos(null);
    });
  }, [searchParams, filter]);

  const getVideos = async () => {

      const data = await fetch(!filter ? YOUTUBE_VIDEOS_API : SEARCH_RESULT_API + filter);
      const json = await data.json();

      const onlyVideos = json.items.filter((video) => {
        if (!filter) {
          return video.kind === "youtube#video";
        } else {
          return video.id.kind === "youtube#video";
        }
      });
        setIsLoading(false);
      setVideos(onlyVideos); // Update state with onlyVideos instead of json.items
      console.log(onlyVideos);

    }


    if (!videos) {
      return (
        <div className="md:flex md:flex-wrap md:justify-center">
          <div className="mt-48 text-lg text-red-400 bg-gray-100 p-2 rounded-xl shadow-inner">
            Oops! looks like we have exceeded youtube API quota
          </div>
        </div>
      );
    }
    if(isLoading) {
      return <ShimmerUI/>
    }

  return (
    <div className="md:flex md:flex-wrap md:justify-center">
      {videos.map((video) => {
        const videoId = !filter ? video.id : video.id.videoId;
        return (
          <Link to={"/shorts?v=" + videoId} key={video.id}>
            <VideoCard key={video.id} info={video} filter={filter} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
