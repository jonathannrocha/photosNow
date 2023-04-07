import { Contaneir } from "./style";

import { Route, Routes } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HomeList } from "./pages/Home";
import { PhotosAlbums } from "./pages/PhotosAlbum";

function App() {
  return (
    <Contaneir>
      <Header />

      <Routes>
        <Route path="/" element={<HomeList />} />
        <Route path="/Home/Album/:albumId" element={<PhotosAlbums />} />
      </Routes>
      <Footer />
    </Contaneir>
  );
}

export default App;
