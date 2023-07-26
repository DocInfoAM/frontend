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
import Footer from "./components/Footer/Footer";
import TermsOfUse from "./pages/TermsOfUse/TermsOfUse";
import PasswordRecovery from "./pages/PasswordRecovery/PasswordRecovery";
import EditSchedule from "./pages/EditSchedule/EditSchedule";
import Statistics from './pages/Statistics/Statistics';
import TopUpAccountBalance from "./pages/TopUpAccountBalance/TopUpAccountBalance";
import AccountBalance from "./pages/AccountBalance/AccountBalance"

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
            <Route path="/termsofuse" Component={TermsOfUse} />
            <Route path="/passwordrecovery" Component={PasswordRecovery} />
            <Route path="/accountbalance" Component={AccountBalance} />
            <Route path="/editschedule" Component={EditSchedule} />
            <Route path="/statistics" Component={Statistics} />
            <Route path="/topupaccountbalance" Component={TopUpAccountBalance} />
            <Route path="*" Component={NotFoundPage} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
