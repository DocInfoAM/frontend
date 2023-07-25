import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyClinic from "./pages/MyClinic/MyClinic";
import Claims from "./pages/Claims/Claims";
import Schedule from "./pages/Schedule/Schedule";
import PersonalArea from "./pages/PersonalArea/PersonalArea";
import AllDoctors from "./pages/AllDoctors/AllDoctors";
import Contacts from "./pages/Contacts/Contacts";
import SignOut from "./pages/SignOut/SignOut";
import Index from "./pages";
import NotFoundPage from "./pages/404";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" Component={Index} />
            <Route path="/myclinic" Component={MyClinic} />
            <Route path="/claims" Component={Claims} />
            <Route path="/schedule" Component={Schedule} />
            <Route path="/personalarea" Component={PersonalArea} />
            <Route path="/alldoctors" Component={AllDoctors} />
            <Route path="/contacts" Component={Contacts} />
            <Route path="/signout" Component={SignOut} />
            <Route path="*" Component={NotFoundPage} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
