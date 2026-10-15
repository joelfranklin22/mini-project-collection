import { useContext } from "react";
import "./Navbar.css";
import { PassContext } from "../context/PageContext";

function Navbar() {
  const { activePage, setActivePage, setEditEmployee } =
    useContext(PassContext);

  // go to a page and stop any edit that was going on
  const goTo = (page) => {
    setEditEmployee(null);
    setActivePage(page);
  };

  return (
    <>
      <nav className="navBar">
        <ul className="navBar-card">
          <li
            className={`navBar-items ${activePage === "home" ? "active" : ""}`}
            onClick={() => goTo("home")}
          >
            Home
          </li>
          <li
            className={`navBar-items ${activePage === "details" ? "active" : ""}`}
            onClick={() => goTo("details")}
          >
            Employee Details
          </li>
          <li
            className={`navBar-items ${activePage === "add" ? "active" : ""}`}
            onClick={() => goTo("add")}
          >
            Add Employee
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
