import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Management from './components/Management';
import FlowerList from './components/FlowerList';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/management" element={<Management />}></Route>
        <Route path="/flower-list" element={<FlowerList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
