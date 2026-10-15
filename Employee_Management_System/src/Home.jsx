import { useContext } from "react";
import { PassContext, PageContext } from "./context/PageContext";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AddEmployee from "./components/AddEmployee";
import EmployeeDetails from "./components/EmployeeDetails";
import Intro from "./Intro";
import "./App.css";

function HomeContent() {
  const { activePage } = useContext(PassContext);

  return (
    <>
      <Header />
      <div className="main-content">
        <Navbar />
        <div className="pageContent">
          {activePage === "home" && <Intro />}
          {activePage === "details" && <EmployeeDetails />}
          {activePage === "add" && <AddEmployee />}
        </div>
      </div>
    </>
  );
}

function Home() {
  return (
    <PageContext>
      <HomeContent />
    </PageContext>
  );
}

export default Home;
