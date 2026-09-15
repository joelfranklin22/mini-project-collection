import { useState, useEffect } from "react";
import "./EmployeeDetails.css";

function EmployeeDetails() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const handleUpdate = () => {
      setEmployees(JSON.parse(localStorage.getItem("employee")) || []);
    };
    handleUpdate();
    window.addEventListener("employeeAdded", handleUpdate);
    return () => window.removeEventListener("employeeAdded", handleUpdate);
  }, []);

  return (
    <>
      <div className="container">
        {employees.length === 0 ? (
          <h1 className="no-employees">No Employees Found</h1>
        ) : (
          <div className="cards-wrapper">
            {employees.map((emp) => (
              <div className="card" key={emp.id}>
                <div className="card-items">
                  <div className="name">Name:{emp.name}</div>
                  <div className="email">Email:{emp.email}</div>
                  <div className="role">Role:{emp.role}</div>
                  <div className="salary">Salary:₹ {emp.salary}</div>
                </div>
                <div className="card-buttons">
                  <button className="btn-delete">Delete</button>
                  <button className="btn-edit">Edit</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default EmployeeDetails;
