import moment from "moment";

export const GOOGLE_API_KEY = "AIzaSyAICm1eDIRRqbsDsw6lqd_3Gdq8Lg8DjmM"

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  GOOGLE_API_KEY;

  export const VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  GOOGLE_API_KEY +
  "&id=";

  
export const COMMENTS_API =
"https://www.googleapis.com/youtube/v3/commentThreads?textFormat=plainText&part=snippet&maxResults=50&key=" +
GOOGLE_API_KEY +
"&videoId=";

export const SEARCH_RESULT_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=" +
  GOOGLE_API_KEY +
  "&q=";

 export const YOUTUBE_LIVE_API = "" ;

 export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

  export const kFormatter = (num) => {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "K"
      : Math.sign(num) * Math.abs(num);
  };
  export const mFormatter = (num) => {
    return Math.abs(num) > 999999
      ? Math.sign(num) * (Math.abs(num) / 1000000).toFixed(1) + "M"
      : Math.sign(num) * Math.abs(num);
  };

  export const durationFormatter = (durationStr) => {

    if (!durationStr) {
      return '00:00'; // Or any default value you prefer
  }
    // Extracting hours, minutes, and seconds
    const hoursMatch = durationStr.match(/(\d+)H/);
    const hours = hoursMatch ? parseInt(hoursMatch[1]) : 0;
    const minutesMatch = durationStr.match(/(\d+)M/);
    const minutes = minutesMatch ? parseInt(minutesMatch[1]) : 0;
    const secondsMatch = durationStr.match(/(\d+)S/);
    const seconds = secondsMatch ? parseInt(secondsMatch[1]) : 0;

    // Formatting duration
    let formattedDuration = '';

    if (hours > 0) {
        formattedDuration += ('0' + hours).slice(-2) + ':';
    }

    formattedDuration += ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2);

    return formattedDuration;
};

  
export const getFormattedTimeDifference = (publishedAt) => {
  const publishedMoment = moment(publishedAt);
  const now = moment();
  const daysDifference = now.diff(publishedMoment, 'days');

  if (daysDifference === 1) {
    return "1 day ago";
  } else {
    return publishedMoment.fromNow();
  }
};