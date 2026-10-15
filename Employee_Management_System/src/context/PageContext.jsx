import { createContext, useEffect, useState } from "react";

export const PassContext = createContext();

export function PageContext({ children }) {
  const [activePage, setActivePage] = useState("home");

  // employee that is being edited (null means we are adding a new one)
  const [editEmployee, setEditEmployee] = useState(null);

  const [stats, setStats] = useState({
    total: 0,
    active: 0,
    notActive: 0,
    department: 0,
  });

  const updatestats = () => {
    const employees = JSON.parse(localStorage.getItem("employee")) || [];

    const active = employees.filter((emp) => emp.active === "Active").length;
    const notActive = employees.filter(
      (emp) => emp.active === "Not Active",
    ).length;

    // count only the departments that are filled
    const department = [
      ...new Set(employees.map((emp) => emp.department).filter((d) => d)),
    ].length;

    setStats({
      total: employees.length,
      active,
      notActive,
      department,
    });
  };

  useEffect(() => {
    updatestats();
    window.addEventListener("employeesUpdated", updatestats);
    return () => {
      window.removeEventListener("employeesUpdated", updatestats);
    };
  }, []);

  return (
    <PassContext.Provider
      value={{
        activePage,
        setActivePage,
        stats,
        updatestats,
        editEmployee,
        setEditEmployee,
      }}
    >
      {children}
    </PassContext.Provider>
  );
}
