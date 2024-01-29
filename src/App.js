import { Routes, Route } from "react-router-dom";
import { LogIn, Dashboard, ChangePass, SingUp, Sales } from "./component/Index";
import { useState } from "react";
import { dashboardContext } from "./context/dashboardContext";

// const dashboardContext = createContext();

const App = () => {
  const [sidebarMenuShow, setSidebarMenuShow] = useState(false);
  return (
    <dashboardContext.Provider value={{ sidebarMenuShow, setSidebarMenuShow }}>
      <>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/signup" element={<SingUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/changepass" element={<ChangePass />} />
        </Routes>
      </>
    </dashboardContext.Provider>
  );
};

export default App;
