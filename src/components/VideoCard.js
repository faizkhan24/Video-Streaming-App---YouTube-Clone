import React from "react";
import { durationFormatter, kFormatter, mFormatter, getFormattedTimeDifference } from "../utils/constants";
import VideoPreviewShimmer from "./VideoPreviewShimmer";
import { CiLogin } from "react-icons/ci";

const VideoCard = ({ info, filter }) => {
  // if (!info || !info.statistics || !info.statistics.viewCount) return null;

  console.log('info',info.contentDetails);
  
  const { snippet, statistics, contentDetails } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  const {viewCount} = statistics || {};
   const duration = contentDetails ? contentDetails.duration : null;


  //  if(info.length===0) return <VideoPreviewShimmer/>
  return (
    <div className=" space-y-2 mb-2 md:w-[19.5rem] md:m-2 md:my-3 cursor-pointer p-1 rounded-lg">
      <div className="relative md:w-auto w-[25rem]">
        <img className="rounded-lg md:auto w-[27rem]" alt="thumbnails" src={thumbnails.medium.url} />
        <p className="absolute bottom-0 right-0 bg-black font-semibold text-white rounded-md h-auto px-1 w-auto opacity-80 mx-1 my-1 text-sm">{durationFormatter(duration)}</p>
      </div>

      <ul>
        <li className="font-semibold">{title}</li>
        <li>{channelTitle}</li>
        <div className="md:flex flex gap-3 md:gap-2">
          {filter === null && (
            <p>{viewCount > 999999 ? <li>{mFormatter(viewCount)}</li> : <li>{kFormatter(viewCount)} views</li>}</p> 
          )}
          <p>{getFormattedTimeDifference(publishedAt)}</p>
        </div>
      </ul>
    </div>
  );
};

export const BgBlackVideoCard = ({ info }) => {
  return (
    <div className="bg-black text-white h-full">
      <VideoCard info={info}/>
    </div>
  );
};

export default VideoCard;
