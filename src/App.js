import { Routes, Route } from "react-router-dom";
import { LogIn, Dashboard, ChangePass, SingUp } from "./component/Index";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<SingUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/changepass" element={<ChangePass />} />
      </Routes>
    </>
  );
};

export default App;
