import { useContext } from "react";
import { dashboardContext } from "../../context/dashboardContext";

const HamburgerMenu = () => {
  const { setSidebarMenuShow, sidebarMenuShow } = useContext(dashboardContext);
  // console.log(sidebarMenuShow);
  return (
    <div
      id="hamdergur-menu"
      className="space-y-2 group hover:rotate-90 duration-500 p-4"
      onClick={() => setSidebarMenuShow((prev) => !prev)}
    >
      <span className="block h-0.5 w-8  bg-gray-400 duration-300 group-hover:bg-gray-800"></span>
      <span className="block h-0.5 w-8  bg-gray-400 duration-300 group-hover:bg-gray-800"></span>
      <span className="block h-0.5 w-8  bg-gray-400 duration-300 group-hover:bg-gray-800"></span>
    </div>
  );
};
export default HamburgerMenu;
