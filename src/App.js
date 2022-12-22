import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logo from "./components/Badge"
import PasswordChanged from './components/PasswordChanged';
import Login from "./components/Login"
import ForgotPassword from "./components/ForgotPassword"
import Request from './components/Request';

function App() {
  return (
    <div className="App">
     <Logo/>
     <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="forgotpassword" element={<ForgotPassword />} />
          <Route path="passwordchanged" element={<PasswordChanged />} />
          <Route path="request" element={<Request />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
