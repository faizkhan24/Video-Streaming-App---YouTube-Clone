import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SEARCH_RESULT_API, YOUTUBE_SEARCH_API } from "../utils/constants";
import ResultVideoCard from "./ResultVideoCard";
import ResultShimmer from "./ResultShimmer";


const Results = () => {
  const [videos, setVideos] = useState([]);
  const [searchParams] = useSearchParams();
  const search_query = searchParams?.get("search_query");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getVideos();
  }, [search_query]);

  const getVideos = async () => {
    const data = await fetch(SEARCH_RESULT_API + search_query);
    const json = await data.json();
    
    // Ensure json.items is defined before accessing it
    const onlyVideos = json?.items?.filter((video) => {
      return video.id.kind === "youtube#video";
    });
    console.log('Videos',onlyVideos);
  
    setIsLoading(false);
    
    // Ensure onlyVideos is not undefined before setting state
    if (onlyVideos) {
      setVideos(onlyVideos);
    } else {
      setVideos([]);
    }
  };
  
  useEffect(() => {
    setIsLoading(true);
    getVideos().catch((e) => {
      setIsLoading(false);
      setVideos(null);
    });
  }, [search_query]);

  if (isLoading) {
    return <ResultShimmer />;
  }

  if (!videos) {
    return (
      <div className="md:flex flex-col md:flex-wrap md:justify-center mx-auto w-fit">
        <div className="mt-48 text-lg text-red-400 bg-gray-100 p-2 rounded-xl shadow-inner">
          Oops! looks like we have exceeded youtube API quota
        </div>
      </div>
    );
  }

  return (
    <div className="md:flex flex-col md:flex-wrap md:justify-center mx-auto w-fit">
      {videos.map((video) => {
        return (
          <Link key={video.id.videoId} to={"/watch?v=" + video.id.videoId}>
            <ResultVideoCard key={video.id.videoId} info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default Results;