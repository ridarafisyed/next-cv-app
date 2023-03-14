import Sections from "../Sections/index"

type HeroProps = {
  imageSrc: string;
  title: string;
  description: string;
};

function Header() {
  return <div className="relative h-screen">
    <Sections/>
  </div>;
}

export default Header;
