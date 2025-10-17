import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ to, children }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "btn border-x-0 border-t-0  rounded-[0px] text-primary font-bold border-b-4 border-primary"
            : "btn border-0"
        }
      >
        {children}
      </NavLink>
    </div>
  );
};

export default MyLink;
