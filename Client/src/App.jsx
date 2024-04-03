import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
      </Routes>
    </>
  );
}

export default App;
