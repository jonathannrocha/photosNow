import logo from "../../assets/images/logo.png";
import * as C from "./style";

export function Header() {
  return (
    <C.Contaneier>
      <div>
        <img src={logo} height={100} alt="" />
      </div>
      <div>
        <span>Photos Now</span>
      </div>
    </C.Contaneier>
  );
}
