import Header from "./components/Header/Header"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Index from "./pages";
import Clinics from "./pages/Clinics/Clinics";
import Contacts from "./pages/Contacts/Contacts";
import Dashboard from "./pages/Dashboard/Dashboard";
import Doctors from "./pages/Doctors/Doctors";
import LogIn from "./pages/LogIn/LogIn";
import Terms from "./pages/TermsOfUse/TermsOfUse";
import DoctorCard from "./pages/DoctorCard/DoctorCard";
import Registration from "./pages/Registration/Registration";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div className="content">
      <Routes>
        <Route path="/" Component={Index} />
        <Route path="/clinics" Component={Clinics}/>
        <Route path="/contacts" Component={Contacts}/>
        <Route path="/dashboard" Component={Dashboard}/>
        <Route path="/doctorcard" Component={DoctorCard}/>
        <Route path="/doctors" Component={Doctors}/>
        <Route path="/login" Component={LogIn}/>
        <Route path="/registration" Component={Registration}/>
        <Route path="/terms" Component={Terms}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
