import { useContext } from "react";
import "./Navbar.css";
import { PassContext } from "../context/PageContext";

function Navbar() {
  const { activePage, setActivePage } = useContext(PassContext);

  return (
    <>
      <nav className="navBar">
        <ul className="navBar-card">
          <li
            className={`navBar-items ${activePage == "home" ? "active" : ""}`}
            onClick={() => setActivePage("home")}
          >
            Home
          </li>
          <li
            className={`navBar-items ${activePage == "details" ? "active" : ""}`}
            onClick={() => setActivePage("details")}
          >
            Employee Details
          </li>
          <li
            className={`navBar-items ${activePage == "add" ? "active" : ""}`}
            onClick={() => setActivePage("add")}
          >
            Add Employee
          </li>
        </ul>
        <div className="log-out">Log out</div>
      </nav>
    </>
  );
}
export default Navbar;





