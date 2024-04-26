import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const MainContainer = () => {
  const showFilterList = useSelector((store)=> store.app.showFilterList);

  return (
    <div className="">
      
      
      <div className="w-full">
          {showFilterList && <ButtonList />}
          <Outlet />
        </div>
      
      <VideoContainer />
    </div>
  );
};

export default MainContainer;