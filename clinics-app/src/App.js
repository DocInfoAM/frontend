import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyClinic from "./components/Pages/MyClinic/MyClinic";
import Claims from "./components/Pages/Claims/Claims";
import Schedule from "./components/Pages/Schedule/Schedule";
import PersonalArea from "./components/Pages/PersonalArea/PersonalArea";
import AllDoctors from "./components/Pages/AllDoctors/AllDoctors";
import Contacts from "./components/Pages/Contacts/Contacts";
import SignOut from "./components/Pages/SignOut/SignOut";
import Index from "./components/Pages";
import NotFoundPage from "./components/Pages/404";
import Footer from "./components/Footer/Footer";
import TermsOfUse from "./components/Pages/TermsOfUse/TermsOfUse";
import PasswordRecovery from "./components/Pages/PasswordRecovery/PasswordRecovery";
import EditSchedule from "./components/Pages/EditSchedule/EditSchedule";
import Statistics from "./components/Pages/Statistics/Statistics";
import TopUpAccountBalance from "./components/Pages/TopUpAccountBalance/TopUpAccountBalance";
import AccountBalance from "./components/Pages/AccountBalance/AccountBalance";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Index />} />
            <Route
              path="/my-clinic"
              element={
                <MyClinic
                  clinics={props.clinics}
                />
              }
            />
            <Route path="/claims" element={<Claims />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/personal-area" element={<PersonalArea />} />
            <Route path="/all-doctors" element={<AllDoctors doctors={props.doctors}/>} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/sign-out" element={<SignOut />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/password-recovery" element={<PasswordRecovery />} />
            <Route path="/account-balance" element={<AccountBalance />} />
            <Route path="/edit-schedule" element={<EditSchedule />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/top-up-account-balance" element={<TopUpAccountBalance />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
