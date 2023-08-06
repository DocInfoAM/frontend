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
        <Route path="/doctors" Component={Doctors}/>
        <Route path="/login" Component={LogIn}/>
        <Route path="/terms" Component={Terms}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
