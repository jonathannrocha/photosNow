import * as C from "./style";
import seta from "../../assets/images/seta.svg";
import { albums } from "../../@types/albums";
import { Order } from "../../@types/SectionOrder";
import arrowLeft from "../../assets/images/arrow-left.svg";
import arrowRigth from "../../assets/images/arrow-right.svg";
import { Navigate, useNavigate } from "react-router-dom";

interface albumProps {
  data: albums[];
  order: Order;
}

export function Album({ data, order }: albumProps) {
  const navigate = useNavigate();

  function selectionAlbum(album: number) {
    if (album) navigate("/Home/Album/" + album);
  }

  return (
    <>
      <div
        style={{
          flex: "1",
        }}
      >
        {data.slice(order.start, order.end).map((album, index) => {
          return (
            <C.Contanier onClick={() => selectionAlbum(album.id)} key={index}>
              <div>
                <img src={seta} width={40} />
                <span
                  style={{
                    display: "flex",
                  }}
                >
                  {album.title
                    .split("")
                    .map((item, index) => {
                      return index === 0 ? item.toUpperCase() : item;
                    })
                    .join("")}
                </span>
              </div>
            </C.Contanier>
          );
        })}
      </div>
      <C.Bottom>
        <div className="firt">
          <img src={arrowLeft} alt="" />
        </div>
        <div className="second">
          <img src={arrowRigth} alt="" />
          Próxima página
        </div>
      </C.Bottom>
    </>
  );
}
