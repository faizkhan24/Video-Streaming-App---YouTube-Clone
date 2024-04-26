import React, { useEffect } from 'react'
import { GOOGLE_API_KEY, YOUTUBE_LIVE_API } from '../utils/constants';

const LiveVideo = ({info}) => {
  console.log(info);
    useEffect(()=>{
        getLiveVideo();
    },[])

    const getLiveVideo = async () =>{
        const data = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails&id={}&key=${GOOGLE_API_KEY}`);
        const json = await data.json();
        console.log(json);
    }
  return (
    <div>LiveVideo</div>
  )
}

export default LiveVideo;