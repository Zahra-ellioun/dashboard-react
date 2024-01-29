import { createContext } from "react";

export const dashboardContext = createContext({
  sidebarMenuShow: false,
  setSidebarMenuShow: () => {},
});
