import { useState, useEffect, useContext } from "react";
import "./EmployeeDetails.css";
import { PassContext } from "../context/PageContext";

function EmployeeDetails() {
  const [employees, setEmployees] = useState([]);
  const { setActivePage, setEditEmployee } = useContext(PassContext);

  useEffect(() => {
    const handleUpdate = () => {
      setEmployees(JSON.parse(localStorage.getItem("employee")) || []);
    };
    handleUpdate();
    window.addEventListener("employeesUpdated", handleUpdate);
    return () => window.removeEventListener("employeesUpdated", handleUpdate);
  }, []);

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this employee?")) {
      return;
    }
    const updated = employees.filter((emp) => emp.id !== id);
    localStorage.setItem("employee", JSON.stringify(updated));
    window.dispatchEvent(new Event("employeesUpdated"));
  };

  const handleEdit = (emp) => {
    setEditEmployee(emp);
    setActivePage("add");
  };

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
                  <div className="name">Name: {emp.name}</div>
                  <div className="email">Email: {emp.email}</div>
                  <div className="role">Role: {emp.role}</div>
                  <div className="department">Department: {emp.department}</div>
                  <div className="status">Status: {emp.active}</div>
                  <div className="salary">Salary: ₹ {emp.salary}</div>
                </div>
                <div className="card-buttons">
                  <button
                    className="btn-delete"
                    onClick={() => handleDelete(emp.id)}
                  >
                    Delete
                  </button>
                  <button className="btn-edit" onClick={() => handleEdit(emp)}>
                    Edit
                  </button>
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
