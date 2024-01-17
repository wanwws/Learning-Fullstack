import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import HomePage from "./components/HomePage";
// import ProfilePage from './components/ProfilePage'
// import FlowersList from "./components/FlowerList";
// import Management from "./components/Management";
// import Statistics from "./components/Statistics";

function App() {
  // return (
  //   <div>
  //     <Routes>
  //       <Route path="/" element={<LoginPage />}></Route>
  //       <Route path="/login" element={<LoginPage />}></Route>
  //       <Route path="/register" element={<RegisterPage />}></Route>
  //       <Route path="/home" element={<HomePage />}></Route>
  //       {/* <Route path="/profile" element={<ProfilePage />}></Route>
  //       <Route path="/flower-list" element={<FlowersList />}></Route>
  //       <Route path="/management" element={<Management />}></Route>
  //       <Route path="/statistics" element={<Statistics />}></Route> */}
  //     </Routes>
  //   </div>
  // );
  const navigate = useNavigate();
    return(
        <div style={{display: 'flex', flexDirection:'row'}}>
            <Menu
                onClick={({key}) => {
                    if(key === "signout"){

                    }else{
                        navigate(key)
                    }
                }}
                items={[
                    { label: "Home", key:"/home"},
                    { label: "Management Flower", key:"/management"},
                    { label: "Flower List", key:"/flower"},
                    { label: "Report", key:"/report"},
                    { label: "Profile", key:"/profile"},
                    { label: "Signout", danger: true, key:"signout"},
                ]} 
            />
            <Content />
        </div>
    );
}

function Content() {
    return <div>
        <Routes>
            <Route path='/home' element={<div>Home</div>}></Route>
            <Route path='/management' element={<div>Management Flower</div>}></Route>
            <Route path='/flower' element={<div>Flower List</div>}></Route>
            <Route path='/report' element={<div>Report</div>}></Route>
            <Route path='/profile' element={<div>Profile</div>}></Route>
        </Routes>
    </div>
}

export default App;
