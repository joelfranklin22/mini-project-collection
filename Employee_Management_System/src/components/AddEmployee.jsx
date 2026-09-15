import { useState } from "react";
import "./AddEmployee.css";

function AddEmployee() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    salary: "",
    department: "",
    active: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    // localStorage.clear();
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.role ||
      !formData.salary
    ) {
      console.log("Please fill field");
      return;
    }

    const existing = JSON.parse(localStorage.getItem("employee")) || [];
    const updated = { ...formData, id: Date.now() };
    localStorage.setItem("employee", JSON.stringify([...existing, updated]));
    window.dispatchEvent(new Event("employeeAdded"));

    setFormData({ name: "", email: "", role: "", salary: "" });
  };

  return (
    <>
      <section className="formInput">
        <form action="" className="formItems" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            id=""
            value={formData.name}
            onChange={handleChange}
            placeholder="Employee name"
          />
          <input
            type="email"
            name="email"
            id=""
            value={formData.email}
            onChange={handleChange}
            placeholder="Employee email"
          />
          <input
            type="text"
            name="role"
            id=""
            value={formData.role}
            onChange={handleChange}
            placeholder="Employee role"
          />
          <select name="department" id="" onChange={handleChange}>
            <option value="">Select Department</option>
            <option value="IT">IT</option>
            <option value="Sales">Sales</option>
            <option value="HR">HR</option>
          </select>
          <select name="active" id="" onChange={handleChange}>
            <option value="">Status</option>
            <option value="Active">Active</option>
            <option value="Not Active">Not Active</option>
          </select>
          <input
            type="number"
            name="salary"
            id=""
            value={formData.salary}
            onChange={handleChange}
            placeholder="Employee salary"
          />
          <button onClick={handleSubmit}>Add Employee</button>
        </form>
      </section>
    </>
  );
}
export default AddEmployee;
