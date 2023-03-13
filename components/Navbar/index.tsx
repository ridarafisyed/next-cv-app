import { Fragment } from "react";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];
const Navbar = () => {
  return (
    <Fragment>
      <nav className="nav">Navbar</nav>
    </Fragment>
  );
};

export default Navbar;
