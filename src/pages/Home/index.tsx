import { useEffect, useState } from "react";
import { albums } from "./@types/albums";
import { Loading } from "../../components/Loading";
import { axios } from "../../service/axios";
import { Album, Order } from "./components/Album";

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

  function orderList(action: "add" | "remove") {
    SectionOrders(action);
  }

  function SectionOrders(action: string) {
    const limit = 10;
    if (action === "add") {
      if (albums!.length > order.end + limit) {
        setOrder({ start: order.start + limit, end: order.end + limit });
      }
    }

    if (action === "remove") {
      if (order.start - limit > 0) {
        setOrder({ start: order.start - limit, end: order.end - limit });
      }
    }
  }

  return albums ? (
    <Album data={albums} order={order} click={orderList} />
  ) : (
    <Loading />
  );
}
