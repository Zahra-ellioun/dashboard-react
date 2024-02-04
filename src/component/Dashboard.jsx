import { useContext, useEffect, useRef } from "react";
import { Header, MenuSidebar, MyProfile } from "./Index";
import { dashboardContext } from "../context/dashboardContext";
import "./dashboard.css";

const Dashboard = () => {
  const { sidebarMenuShow, setSidebarMenuShow } = useContext(dashboardContext);

  // click out of sidebar menu and close sidebar menu
  const newRef = useRef();
  useEffect(() => {
    const hamburgerMenu = document.getElementById("hamdergur-menu");
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);

    function handleClick(e) {
      console.log(e);
      if (newRef && newRef.current) {
        const ref = newRef.current;
        console.log(ref);
        console.log(e.target);
        if (!e.target.contains(hamburgerMenu)) {
          if (!ref.contains(e.target)) {
            console.log("I'm Outside");
            setSidebarMenuShow(false);
          }
        }
      }
    }
  }, []);

  return (
    <div className="relative flex flex-row p-4 xl:gap-x-4 gap-x-0  h-screen">
      <div ref={newRef} className={sidebarMenuShow ? "show" : "hide"}>
        <MenuSidebar />
      </div>
      <div className="grow min-h-full">
        <Header />
        <MyProfile />
      </div>
    </div>
  );
};

export default Dashboard;

// https://www.youtube.com/watch?v=4sc6BhgS_Co
