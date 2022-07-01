import "./App.css";
import Games from "./pages/Games";
import PhotoGallery from "./pages/PhotoGallery";
import Poems from "./pages/Poems";
import VideoGallery from "./pages/VideoGallery";

function App() {
  return (
    <>
      <PhotoGallery />
      <VideoGallery />
      <Poems />
      <Games />
    </>
  );
}

export default App;
