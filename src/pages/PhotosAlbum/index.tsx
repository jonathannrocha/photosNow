import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axios } from "../../service/axios";
import * as C from "./style";
import { Loading } from "../../components/Loading";
import setaparaCima from "../../assets/images/arrow-bend-double-up-left.svg";

import { useNavigate } from "react-router-dom";

interface photosProps {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export function PhotosAlbums() {
  const [photos, setPhotos] = useState<photosProps[]>();
  const params = useParams();
  const navigate = useNavigate();
  const albumId = typeof params.id === "string" ? +params.id : undefined;
  useEffect(() => {
    requestPhotos();
  }, []);

  async function requestPhotos(): Promise<void> {
    try {
      const response = await axios.get("/photos");

      setPhotos(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const filterPhotos = photos?.filter((item) => item.albumId === albumId);

  return (
    <>
      {!filterPhotos && <Loading />}
      <C.Contanier>
        {filterPhotos &&
          filterPhotos.map((photo, index) => {
            return (
              <div key={index}>
                <span>{photos && photo.title}</span>
                <img src={photos && photo.url} alt="" />
              </div>
            );
          })}
        <div
          onClick={() => navigate("/")}
          style={{
            position: "absolute",
            top: "37px",
            display: "block",
            right: "120px",
            width: "100px",
            fill: "red",
          }}
        >
          <img src={setaparaCima} alt="" />
        </div>
      </C.Contanier>
    </>
  );
}
