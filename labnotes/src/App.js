import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Login from './components/login/Login';
import LandingPage from "./components/landingPage/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Login/>} />
       <Route path="/landing" element={<LandingPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
