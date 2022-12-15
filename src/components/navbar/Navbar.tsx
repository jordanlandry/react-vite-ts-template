import useWidth from "../../hooks/useWidth";
import NavMobile from "./NavMobile";
import NavWindow from "./NavWindow";
import "./navbar.css";
import { useRef } from "react";
import useScroll from "../../hooks/useScroll";

export default function Navbar() {
  const MAX_WIDTH = 738;
  const width = useWidth();
  useScroll(); // Re render the component on every scroll event.

  // Affixed navbar properties
  // Change this to false to see the navbar disappear.
  const isAffixedNav = true;
  const beforeNavRef = useRef<HTMLDivElement>(null);
  const height = beforeNavRef.current?.clientHeight;
  const currentScrollPos = beforeNavRef.current?.getBoundingClientRect().top;
  const isFixed = isAffixedNav ? currentScrollPos! <= -height! : true;

  return (
    <>
      {isAffixedNav ? (
        <div className="navbar-before" style={{ height: "100px" }} ref={beforeNavRef}>
          Content
        </div>
      ) : null}
      <nav className="navbar" data-fixed={isFixed}>
        {width > MAX_WIDTH ? <NavWindow /> : <NavMobile />}
      </nav>
    </>
  );
}
