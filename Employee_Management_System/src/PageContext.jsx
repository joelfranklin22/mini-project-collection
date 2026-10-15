import { createContext, useEffect, useState } from "react";

export const PassContext = createContext(); // ← export பண்ணு

export function PageContext({ children }) {
  const [activePage, setActivePage] = useState("home");
  const [stats, setStats] = useState({
    total: 0,
    active: 0,
    notActive: 0,
    department: 0,
  });
  const updatestats = () => {
    const employees = JSON.parse(localStorage.getItem("employee")) || [];
    const active = employees.filter((emp) => emp.active == "Active").length;
    const notActive = employees.filter(
      (emp) => emp.active == "Not Active",
    ).length;
    const department = [...new Set(employees.map((emp) => emp.department))]
      .length;

    setStats({
      total: employees.length,
      active,
      notActive,
      department,
    });
  };
  useEffect(() => {
    updatestats();
    window.addEventListener("employeeAdded", updatestats);
    return () => {
      window.removeEventListener("employeeAdded", updatestats);
    };
  }, []);

  return (
    <PassContext.Provider
      value={{ activePage, setActivePage, stats, updatestats }}
    >
      {children}
    </PassContext.Provider>
  );
}
