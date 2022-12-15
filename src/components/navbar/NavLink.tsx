type Props = {
  href: string;
  onClick?: () => void;
  children?: React.ReactNode;
};

export default function NavLink({ href, children, onClick }: Props) {
  return (
    <li>
      <a href={href} onClick={onClick}>
        {children}
      </a>
    </li>
  );
}
