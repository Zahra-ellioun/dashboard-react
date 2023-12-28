import { Routes, Route } from "react-router-dom";
import { LogIn } from "./component";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LogIn />} />
      </Routes>
    </>
  );
}

export default App;
