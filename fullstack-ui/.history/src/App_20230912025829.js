import "./App.css";
// import { Route, Routes } from "react-router-dom";
// import LoginPage from './components/LoginPage';
// import RegisterPage from './components/RegisterPage';
// import HomePage from "./components/HomePage";
import AppRoutes from "./AppRoutes";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div>
      <AppRoutes/> 
      <HomePage />
    </div>
  );
}

export default App;
