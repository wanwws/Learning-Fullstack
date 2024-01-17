import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import HomePage from "./components/HomePage";
import ProfilePage from './components/ProfilePage'
import FlowersList from "./components/FlowerList";
import Management from "./components/Management";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/flower-list" element={<FlowersList />}></Route>
        <Route path="/flower-list" element={<FlowersList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
