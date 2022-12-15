import useWidth from "../../hooks/useWidth";
import NavMobile from "./NavMobile";
import NavWindow from "./NavWindow";
import "./navbar.css";
import { useRef } from "react";
import useScroll from "../../hooks/useScroll";

export default function AffixedNavbar() {
  const MAX_WIDTH = 738;
  const width = useWidth();
  useScroll(); // Re render the component on every scroll event to update the positions.

  const beforeNavRef = useRef<HTMLDivElement>(null);
  const height = beforeNavRef.current?.clientHeight;
  const currentScrollPos = beforeNavRef.current?.getBoundingClientRect().top;
  const isFixed = currentScrollPos! <= -height!;

  return (
    <>
      <div className="navbar-before" style={{ height: "300px" }} ref={beforeNavRef}>
        Content
      </div>

      <nav className="navbar" data-fixed={isFixed}>
        {width > MAX_WIDTH ? <NavWindow /> : <NavMobile />}
      </nav>
    </>
  );
}
