import React from "react";
import NavLink from "./Navlink";

interface Link {
  path: string;
  title: string;
}

interface OverlayMenuProps {
  links: Link[];
}

const OverlayMenu: React.FC<OverlayMenuProps> = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default OverlayMenu;
