import { Routes, Route } from "react-router-dom";
import { LogIn } from "./component/Index";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LogIn />} />
      </Routes>
    </>
  );
};

export default App;
