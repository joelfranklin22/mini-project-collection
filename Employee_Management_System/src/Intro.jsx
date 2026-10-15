import { useContext } from "react";
import "./Intro.css";
import { PassContext } from "./context/PageContext";

function Intro() {
  const { stats, setActivePage } = useContext(PassContext);

  return (
    <>
      <div className="hero-section">
        <h1 className="hero-title">Welcome to Employee Management System</h1>

        <p className="hero-description">Manage employee records with ease.</p>

        <div className="hero-actions">
          <button onClick={() => setActivePage("add")}>Add Employee</button>
          <button onClick={() => setActivePage("details")}>
            View Employees
          </button>
        </div>

        <div className="features">
          <h2>Features of Employee Management</h2>
          <ul>
            <li className="feature-item">Add Employee</li>
            <li className="feature-item">View Employee</li>
            <li className="feature-item">Update Employee</li>
            <li className="feature-item">Delete Employee</li>
          </ul>
        </div>

        <div className="statistics">
          <h2>Overall Statistics</h2>
          <ul>
            <li className="data-items">Total Employees: {stats.total}</li>
            <li className="data-items">
              Total Departments: {stats.department}
            </li>
            <li className="data-items">Active: {stats.active}</li>
            <li className="data-items">Not Active: {stats.notActive}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Intro;
