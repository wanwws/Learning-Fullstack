import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import ManagementPage from "./components/managementPage";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/ma" element={<RegisterPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
