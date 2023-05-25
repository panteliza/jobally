import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginReg from "./components/pages/auth/LoginReg";
import ResetPassword from "./components/pages/auth/ResetPassword";
import SendPasswordResetEmail from "./components/pages/auth/SendPasswordResetEmail";
import Contact from "./components/pages/Contact";
import Dashboard from "./components/pages/Dashboard";
import Home from "./components/pages/Home";
import Internship from "./components/pages/Internship";
import Job from "./components/pages/Job";



import Layout from "./components/pages/Layout";
import Middle from "./middle/middle";
import Mid from "./mid/mid";
import Footer from "./footer/footer";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Job />} />
            <Route path="contact" element={<Contact />} />
            <Route path="internship" element={<Internship />} />
            <Route path="job" element={<Job />} />
            
            
            
            <Route path="login" element={<LoginReg />} />
            <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
            <Route path="reset" element={<ResetPassword />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        </Routes>
      </BrowserRouter>
    <Middle/>
      <Mid/>
      <Footer/>
    </>
  );
}

export default App;