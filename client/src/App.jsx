import "./App.css";
import { useState, useRef } from "react";
import AudioRecorder from "./components/AudioRecorder";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import Slid from "./components/Slid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AudioUpload from "./components/AudioUpload";
const App = () => {
      const [page, setPage] = useState("Home");
      return (
        <div>
       {page=="Home"?<div className=" flex flex-col  h-screen">
        <Navigation page={page} setPage={setPage}/><HomePage changePage={setPage} /></div>:null} 
       {page=="Audio"?<div className=" flex flex-col  h-screen">
        <Navigation page={page} setPage={setPage}/><h2 className="text-center text-white font-Roboto font-bold mt-6">Please upload your answers as an audio file </h2>
       <Slid />
       <AudioRecorder/>
       </div>:null}
       </div>
    );
};
export default App;