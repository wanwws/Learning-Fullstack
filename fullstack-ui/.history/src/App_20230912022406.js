import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Management from './components/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/home" element={<Management />}></Route>
      </Routes>
    </div>
  );
}

export default App;
