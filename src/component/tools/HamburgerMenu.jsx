import { useContext } from "react";
import { dashboardContext } from "../../context/dashboardContext";

const HamburgerMenu = () => {
  const { setSidebarMenuShow } = useContext(dashboardContext);
  return (
    <div
      className="space-y-2 group hover:rotate-90 duration-500"
      onClick={() => setSidebarMenuShow((prev) => !prev)}
    >
      <span className="block h-0.5 w-8  bg-gray-400 duration-300 group-hover:bg-gray-800"></span>
      <span className="block h-0.5 w-8  bg-gray-400 duration-300 group-hover:bg-gray-800"></span>
      <span className="block h-0.5 w-8  bg-gray-400 duration-300 group-hover:bg-gray-800"></span>
    </div>
  );
};
export default HamburgerMenu;
