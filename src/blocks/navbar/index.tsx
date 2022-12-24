import { Logo } from "./logo";
import NavItem from "./nav-item";
import ToggleButton from "./toggle-btn";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <ul>
        <NavItem title="Home" href="/" />
        <NavItem title="Users" href="/users" />
        <NavItem title="Blog" href="/blog" />
        <NavItem title="Register" href="/register" />
        <NavItem title="About" href="/about" />
      </ul>
      <ToggleButton />
    </nav>
  );
};

export default Navbar;
