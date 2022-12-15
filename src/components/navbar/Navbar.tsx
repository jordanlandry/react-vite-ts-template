import useWidth from "../../hooks/useWidth";
import "./navbar.css";
import NavMobile from "./NavMobile";
import NavWindow from "./NavWindow";

export default function Navbar() {
  const MAX_WIDTH = 738;
  const width = useWidth();

  return (
    <header>
      <nav className="navbar" data-fixed="true">
        {width > MAX_WIDTH ? <NavWindow /> : <NavMobile />}
      </nav>
    </header>
  );
}
