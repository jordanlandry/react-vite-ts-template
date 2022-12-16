import { useState } from "react";
import NavLink from "./NavLink";
import NavMobileList from "./NavMobileList";

export default function NavMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenOpened, setHasBeenOpened] = useState(false); // This is to prevent the navbar animation on page load

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    setHasBeenOpened(true); // Always should be true after the first click
  };

  return (
    <div className="navbar-mobile">
      <NavMobileList isOpen={isOpen} toggleMenu={toggleMenu} hasBeenOpened={hasBeenOpened} />
      <a href="/" className="navbar-mobile-logo">
        Logo
      </a>
      <ul
        className={`${
          isOpen ? "navbar-mobile-open" : hasBeenOpened ? "navbar-mobile-close-anim" : "navbar-mobile-close"
        } `}
      >
        <NavLink href="/">Link 1</NavLink>
        <NavLink href="a">Link 2</NavLink>
        <NavLink href="a">Link 3</NavLink>
        <NavLink href="a">Link 4</NavLink>
      </ul>
    </div>
  );
}
