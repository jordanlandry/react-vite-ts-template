import useWidth from "../../hooks/useWidth";
import NavMobile from "./NavMobile";
import NavWindow from "./NavWindow";
import "./navbar.css";

type Props = {
  sticky?: boolean;
};

export default function Navbar({ sticky = false }: Props) {
  console.log(sticky);
  const MAX_WIDTH = 738;
  const width = useWidth();
  return <nav className="navbar">{width > MAX_WIDTH ? <NavWindow /> : <NavMobile />}</nav>;
}
