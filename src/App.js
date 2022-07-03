import "./App.css";
import Navbar from "./component/Navbar";
import Games from "./pages/Games";
import History from "./pages/History";
import PhotoGallery from "./pages/PhotoGallery";
import Poems from "./pages/Poems";
import VideoGallery from "./pages/VideoGallery";
import { HashRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter></HashRouter>
      <BrowserRouter>
        <Navbar />
        <PhotoGallery />
        <VideoGallery />
        <History />
        <Poems />
        <Games />
      </BrowserRouter>
      ,
    </>
  );
}

export default App;
