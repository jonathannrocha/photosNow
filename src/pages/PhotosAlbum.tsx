import { useEffect, useState } from "react";
import { axios } from "../config/axios";
import { useParams } from "react-router-dom";

interface photosProps {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export function PhotosAlbums() {
  const [photos, setPhotos] = useState<photosProps[]>();
  const [photosFilter, setPhotosFilter] = useState<photosProps[]>();
  const params = useParams();
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

  return;
}
