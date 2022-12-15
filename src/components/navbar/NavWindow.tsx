import useImageWidth from "../../hooks/useImageWidth";
import NavLink from "./NavLink";

export default function NavWindow() {
  const size = useImageWidth();
  return (
    <ul className="navbar-window">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/">Link 1</NavLink>
      <NavLink href="a">Link 2</NavLink>
      <NavLink href="a">Link 3</NavLink>
      <NavLink href="a">Link 4</NavLink>
    </ul>
  );
}
