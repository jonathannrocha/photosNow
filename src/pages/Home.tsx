import { useEffect, useState } from "react";
import { axios } from "../config/axios";
import { albums } from "../@types/albums";
import { Order } from "../@types/SectionOrder";
import { Loading } from "../components/Loading";
import { Album } from "../components/Album";

export function HomeList() {
  const [order, setOrder] = useState<Order>({ start: 0, end: 10 });
  const [albums, setAlbums] = useState<albums[]>();

  useEffect(() => {
    requestAlbums();
  }, []);

  async function requestAlbums(): Promise<void> {
    try {
      const response = await axios.get("/albums");
      setAlbums(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  function SectionOrders() {
    const limit = 10;
    if (order.end >= 90) {
      setOrder({ start: order.start + limit, end: order.end + limit });
    }
  }

  return albums ? <Album data={albums} order={order} /> : <Loading />;
}
