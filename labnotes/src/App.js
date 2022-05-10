import { HashRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Login from './components/login/Login';
import LandingPage from "./components/landingPage/LandingPage";
import { LoginContextProvider } from "./context/LoginContext";

function App() {
  return (
    <LoginContextProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/landing" element={<LandingPage />} />
        </Routes>
      </HashRouter>
    </LoginContextProvider>
  );
}

export default App;
