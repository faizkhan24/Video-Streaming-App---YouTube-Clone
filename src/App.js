import Body from "./components/Body";
import Head from "./components/Head";
import { Provider } from "react-redux";
import store from "./utils/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import VideoInfoComponent from "./components/VideoInfoComponent";
import LiveVideo from "./components/LiveVideo";
import './App.css'
import Results from "./components/Results";
import ButtonList from "./components/ButtonList";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Head />
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<MainContainer />} />
              <Route path="watch" element={<WatchPage />} />
              <Route path="results" element={<Results />} />
              
            </Route>
          
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;

