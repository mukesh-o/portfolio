import React from "react";

import name from "../../images/name.png";

const Header: React.FC = () => {
  const headerRef = React.useRef<HTMLDivElement | null>(null)
  const rootEl = document.getElementById("root")

  React.useEffect(() => {
    console.log(headerRef)
  }, [headerRef])

  return (
    <section className="py-4 px-10 flex justify-between fixed w-screen">
      <div>
        <img src={name} alt="name" />
      </div>
      <div className="flex space-x-10 text-gray-400 pr-20">
        <span className="self-center cursor-pointer hover:text-white">Home</span>
        <span className="self-center cursor-pointer hover:text-white">Services</span>
        <span className="self-center cursor-pointer hover:text-white">Work</span>
        <span className="self-center cursor-pointer hover:text-white">Skills</span>
        <span className="self-center cursor-pointer hover:text-white">Blogs</span>
        <span className="self-center cursor-pointer hover:text-white">Contact</span>
      </div>
    </section>
  );
};

export default Header;
