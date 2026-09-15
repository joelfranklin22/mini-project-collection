import { useContext } from "react";
import { PassContext, PageContext } from "./context/PageContext"; // ← both import
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AddEmployee from "./components/AddEmployee";
import "./App.css";
import EmployeeDetails from "./components/EmployeeDetails";
import Intro from "./Intro";

function HomeContent() {
  const { activePage } = useContext(PassContext); // ← PassContext

  return (
    <>
      <Header />
      <div className="main-content">
        <Navbar />
        <div className="pageContent">
          {activePage === "home" && <Intro />}
          {(activePage === "details" || activePage === "viewEmployee") && (
            <EmployeeDetails />
          )}
          {(activePage === "add" || activePage === "addEmployee") && (
            <AddEmployee />
          )}
        </div>
      </div>
    </>
  );
}

function Home() {
  return (
    <PageContext>
      {" "}
      {/* ← Provider wrap */}
      <HomeContent /> {/* ← உள்ளே இருக்கு, so useContext works */}
    </PageContext>
  );
}
export default Home;
