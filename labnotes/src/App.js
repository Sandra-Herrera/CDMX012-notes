import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Login from './components/login/Login';
import LandingPage from "./components/landingPage/LandingPage";
import { LoginContextProvider } from "./context/LoginContext";

function App() {
  return (
    <LoginContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/landing" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </LoginContextProvider>
  );
}

export default App;
