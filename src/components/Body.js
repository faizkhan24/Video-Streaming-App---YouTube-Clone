import { Outlet } from "react-router-dom";
import MainContainer from "./MainContainer";
import SideBar from "./SideBar";
import WatchPage from "./WatchPage";
import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";

const Body = () =>{ 

    return (
        <div className="flex">
            <SideBar/>
           <Outlet/>
            
        </div>
    )
}

export default Body;