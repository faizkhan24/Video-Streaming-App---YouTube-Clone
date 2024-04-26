import React, { useEffect, useState } from "react";
import { SUBSCRIBER_API, getFormattedTimeDifference, kFormatter, mFormatter } from "../utils/constants";
import moment from "moment";
import { GOOGLE_API_KEY } from "../utils/constants";
import { RiThumbUpFill } from "react-icons/ri";
import { IoMdThumbsDown } from "react-icons/io";
import { MdOutlineThumbUp } from "react-icons/md";
import { MdOutlineThumbDownAlt } from "react-icons/md"
const VideoInfoComponent = ({ info,videoId }) => {
  const [showSubscriber,setShowSubscriber] = useState(null);
  const [likeThumb, setLikeThumb] = useState(false);
  const [disLikeThumb, setDislikeThumb] = useState(false);



  useEffect(()=>{
    getSubs();
  },[]);
  // const {channelId} = info;
  const getSubs = async () =>{
    const data = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${info.snippet.channelId}&key=${GOOGLE_API_KEY}`);
    const json = await data.json();
    console.log('subs',json);
    setShowSubscriber(json.items[0].statistics.subscriberCount);
  }

  const [showDescription, setShowDescription] = useState(false);
  const {
    snippet: { channelTitle, title, description, publishedAt,channelId},
    statistics: { viewCount,likeCount },
  } = info;

  const formattedViewCount = viewCount > 999999 ? mFormatter(viewCount) : kFormatter(viewCount) 
  const formattedSubscriber = showSubscriber > 999999 ? mFormatter(showSubscriber) : kFormatter(showSubscriber) ;
  const formattedLike = likeCount > 999999 ? mFormatter(likeCount) : kFormatter(likeCount)
  // const formattedPublishedAt = moment(publishedAt).fromNow();
  const truncatedDescription = showDescription ? description : `${description.substring(0,200)}...`;
  const toggleDescription = () => setShowDescription(!showDescription);
  const buttonText = showDescription ? "less" : "more";

 
  const toggleLike = () =>{
    setLikeThumb(!likeThumb);
   
  }
  const toggleDislike = () =>{
    setDislikeThumb(!disLikeThumb);
   
  }

  return <div className="mt-2 m-2">
    <h2 className="md:text-lg font-sans text-sm font-semibold">{title}</h2>
    <div className="flex items-center">
      <div className="bg-gray-200 rounded-full w-2 p-7 mt-3 ml-3 h-2"></div>
      <div className=" flex w-full ml-5 items-center justify-between">
        <div className="flex flex-col  ">
          <h2 className="font-semibold text-sm md:text-base">{channelTitle}</h2>
          <p className="text-gray-500 text-sm">{formattedSubscriber} Subscribers</p>
        </div>

        <div className=" flex justify-between items-center bg-gray-200 w-36 md:w-44 rounded-3xl h-12 relative right-0  my-3 ">
            
            
            {
              likeThumb ? <RiThumbUpFill  onClick={toggleLike} className="md:text-3xl text-5xl mx-5" /> :<MdOutlineThumbUp className="md:text-3xl text-5xl  mx-5"  onClick={toggleLike} />
            }
            <p className="font-bold md:text-lg text-sm ">{formattedLike}</p>
             {
              disLikeThumb ?  <IoMdThumbsDown className="md:text-3xl text-5xl mx-5 " onClick={toggleDislike} /> : <MdOutlineThumbDownAlt className="md:text-3xl text-5xl mx-5 "   onClick={toggleDislike}/>
             }
           
            
          </div>
        
    
      </div>

    </div>
    <div className="bg-gray-200 rounded-lg p-2 mt-2">
      <div className="flex flex-col">
          <p className="font-semibold text-sm md:text-base">
            {formattedViewCount} views &nbsp; {getFormattedTimeDifference(publishedAt)};
          </p>
          <p className="text-sm md:text-base">
            {truncatedDescription}
            {showDescription && <br/>}
            <button className="font-semibold " onClick={toggleDescription}>
              Show {buttonText}
            </button>
          </p>
      </div>
    </div>
  </div>;
};

export default VideoInfoComponent;
