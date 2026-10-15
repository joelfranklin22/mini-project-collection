import { useState, useEffect, useContext } from "react";
import "./AddEmployee.css";
import { PassContext } from "../context/PageContext";

const emptyForm = {
  name: "",
  email: "",
  role: "",
  salary: "",
  department: "",
  active: "",
};

// roles for each department
const roles = {
  IT: [
    "Software Developer",
    "Frontend Developer",
    "Backend Developer",
    "QA Tester",
    "System Administrator",
  ],
  Sales: [
    "Sales Executive",
    "Sales Manager",
    "Business Development Executive",
    "Account Manager",
    "Customer Support Executive",
  ],
  HR: [
    "HR Manager",
    "HR Executive",
    "Recruiter",
    "Payroll Executive",
    "Training Coordinator",
  ],
};

function AddEmployee() {
  const { editEmployee, setEditEmployee, setActivePage } =
    useContext(PassContext);

  const [formData, setFormData] = useState(emptyForm);
  const [message, setMessage] = useState("");

  // if we came from the Edit button, fill the form with that employee
  useEffect(() => {
    if (editEmployee) {
      setFormData(editEmployee);
    }
  }, [editEmployee]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setMessage("");
  };

  // new department means the old role is not valid, so clear it
  const handleDepartmentChange = (e) => {
    setFormData({ ...formData, department: e.target.value, role: "" });
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.role ||
      !formData.salary ||
      !formData.department ||
      !formData.active
    ) {
      setMessage("Please fill all the fields");
      return;
    }

    const existing = JSON.parse(localStorage.getItem("employee")) || [];

    if (editEmployee) {
      // update the employee which has the same id
      const updated = existing.map((emp) =>
        emp.id === editEmployee.id ? formData : emp,
      );
      localStorage.setItem("employee", JSON.stringify(updated));
      setEditEmployee(null);
      window.dispatchEvent(new Event("employeesUpdated"));
      setActivePage("details");
    } else {
      // add a new employee
      const newEmployee = { ...formData, id: Date.now() };
      localStorage.setItem(
        "employee",
        JSON.stringify([...existing, newEmployee]),
      );
      window.dispatchEvent(new Event("employeesUpdated"));
      setFormData(emptyForm);
      setMessage("Employee added successfully");
    }
  };

  const handleCancel = () => {
    setEditEmployee(null);
    setActivePage("details");
  };

  return (
    <>
      <section className="formInput">
        <form className="formItems" onSubmit={handleSubmit}>
          <h2>{editEmployee ? "Update Employee" : "Add Employee"}</h2>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Employee name"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Employee email"
          />
          <select
            name="department"
            value={formData.department}
            onChange={handleDepartmentChange}
          >
            <option value="">Select Department</option>
            <option value="IT">IT</option>
            <option value="Sales">Sales</option>
            <option value="HR">HR</option>
          </select>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            disabled={!formData.department}
          >
            <option value="">
              {formData.department ? "Select Role" : "Select department first"}
            </option>
            {formData.department &&
              roles[formData.department].map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
          </select>
          <select name="active" value={formData.active} onChange={handleChange}>
            <option value="">Status</option>
            <option value="Active">Active</option>
            <option value="Not Active">Not Active</option>
          </select>
          <input
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            placeholder="Employee salary"
          />

          <p className="form-message">{message}</p>

          <button type="submit">
            {editEmployee ? "Update Employee" : "Add Employee"}
          </button>

          {editEmployee && (
            <button type="button" className="cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
          )}
        </form>
      </section>
    </>
  );
}

export default AddEmployee;
