type Props = {
  href: string;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
};

export default function NavLink({ href, children, onClick, className }: Props) {
  return (
    <li className={className ? className : ""}>
      <a href={href} onClick={onClick}>
        {children}
      </a>
    </li>
  );
}
