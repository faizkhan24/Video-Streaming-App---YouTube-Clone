import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { Link, useParams, useSearchParams } from "react-router-dom";
import VideoPreview from "./VideoPreview";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";

const WatchPage = () => {

  const [videos, setVideos] = useState([]);
  

 
  const [searchParams] = useSearchParams();
   const videoId =  searchParams.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  
  return (
    <div  className="md:flex md:flex-wrap md:justify-center gap-36 md:w-full md:mt-4 mx-3 ">
     <VideoPreview videoId={videoId}/>
     <div>
        
        <div>
        <div className="flex flex-col">
      {videos.map((video) => (
        <Link to={"/watch?v=" +video.id}>
         <VideoCard key={video.id} info={video} videoId={videoId} />
        </Link>
       
      ))}
    </div>

        </div>
     </div>
    </div>
  );
};

export default WatchPage;
