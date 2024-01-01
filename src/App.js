import { Routes, Route } from "react-router-dom";
import { LogIn, MenuSidebar } from "./component/Index";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LogIn />} />

        <Route path="/dashboard" element={<MenuSidebar />} />
      </Routes>
    </>
  );
};

export default App;
