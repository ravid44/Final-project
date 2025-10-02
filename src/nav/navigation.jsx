import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link, NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
export function NavbarComponent() {
  const menu = [
    { path: "/", title: "Home" },
    { path: "/aboutus", title: "Aboutus" },
    { path: "/login", title: "Login" },
    { path: "/profile", title: "Profile" }

  ];

  return (
    <div className="fixed top-0 w-full">
    
      <Navbar fluid rounded className="text-black w-[100vw] flex ">
        <NavbarBrand as = {Link} to="/">
          <span className="self-center text-[2rem] whitespace-nowrap text-xl font-semibold dark:text-white text-blue-400">
            Cambo Education
          </span>
        </NavbarBrand>
        

        <NavbarCollapse className="rounded-4xl mr-[12rem] ml-[40rem]">
          {menu.map((route, index) => (
            <NavLink className="hover:text-red-800 m-5" key={index} to={route.path}>

              {/* Add icon only for Profile */}
              {route.path === "/profile" && (
                <FontAwesomeIcon icon={faUser} className="text-blue-400 mr-[1rem]" />
              )}
              {route.title}
            </NavLink>
          ))}
        </NavbarCollapse>
      </Navbar>
    </div>
  );
}
