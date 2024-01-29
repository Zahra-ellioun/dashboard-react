import { useContext } from "react";
import { Header, MenuSidebar, MyProfile } from "./Index";
import { dashboardContext } from "../context/dashboardContext";
import "./dashboard.css";

const Dashboard = () => {
  const { sidebarMenuShow } = useContext(dashboardContext);
  console.log(sidebarMenuShow);
  return (
    <>
      <div className="relative flex flex-row p-4 xl:gap-x-4 gap-x-0  h-screen">
        <div className={sidebarMenuShow ? "show" : "hide"}>
          <MenuSidebar />
        </div>
        <div className="grow min-h-full">
          <Header />
          <MyProfile />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
