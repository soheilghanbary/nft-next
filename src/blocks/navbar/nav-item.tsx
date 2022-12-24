import { useRouter } from "next/router";
import { FC } from "react";

interface NavItemProps {
  title: string;
  href: string;
}

const NavItem: FC<NavItemProps> = ({ title, href }) => {
  const router = useRouter();
  return <li onClick={() => router.push(href)}>{title}</li>;
};

export default NavItem;
