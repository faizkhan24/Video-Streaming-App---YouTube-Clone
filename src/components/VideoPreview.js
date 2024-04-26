import React, { useEffect, useState } from 'react'
import { VIDEO_API } from '../utils/constants';
import VideoInfoComponent from './VideoInfoComponent';
import Comments from './Comments';
import VideoPreviewShimmer from './VideoPreviewShimmer';

const VideoPreview = ({videoId}) => {
    const [video,setVideo] = useState([]);

    useEffect(()=>{
        getVideo();
    },[videoId])

    const getVideo = async () =>{
        const data = await fetch(VIDEO_API+videoId);
        const json = await data.json();
        setVideo(json.items[0]);
        
    }
    
    if(video.length===0) return <VideoPreviewShimmer/>

  return (
    <div className='flex flex-col md:w-3/5  md:mr-3 mb-4'>
        <div>
           <iframe className="md:h-[30rem] h-60 w-full rounded-lg "
        width="1280"
        height="720"
        src={"https://www.youtube.com/embed/" +videoId} 
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe> 
        </div>
    <div>
        <VideoInfoComponent info={video} videoId={videoId}/>
    </div>
    <div>
        <Comments videoId={videoId}/>
    </div>

    </div>
  )
}

export default VideoPreview