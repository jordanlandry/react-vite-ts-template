type Props = { isOpen: boolean; toggleMenu: () => void; hasBeenOpened: boolean };

export default function NavMobileList({ isOpen, toggleMenu, hasBeenOpened }: Props) {
  return (
    <button
      className={`${hasBeenOpened ? "navbar-mobile-list-anim" : ""} navbar-mobile-list unstyled-button ${
        isOpen ? "navbar-mobile-x" : ""
      }`}
      onClick={toggleMenu}
    >
      <div></div>
      <div></div>
      <div></div>
    </button>
  );
}
