import { Link, NavLink } from "react-router";
import logo from "../assets/firebase-logo.png";
import MyLink from "./MyLink";
// import MyContainer from "./MyContainer";
// import MyLink from "./MyLink";
// import MyLink from "./MyLink";

const Navbar = () => {
  return (
    <div className="bg-slate-100f py-2 border-b border-b-slate-300 bg-base-200 ">
      <div className="container mx-auto flex items-center justify-between">
        <figure>
          <img src={logo} className="w-[55px]" />
        </figure>
        <ul className="flex items-center gap-2">
          <li>
            <MyLink to={"/"}>Home</MyLink>
          </li>
          <li>
            <MyLink to={"/about-us"}>About Us</MyLink>
          </li>
          <li>
            <MyLink to={"/profile"}>Profile</MyLink>
          </li>
        </ul>

        <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
          <Link to={"/signin"}>Sign in</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
