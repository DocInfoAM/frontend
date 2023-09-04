import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../components/Header/PrivetRoute/PrivetRoute";
import MyClinic from "../pages/MyClinic/MyClinic";
import Requests from "../pages/Requests/Requests";
import Schedule from "../pages/Schedule/Schedule";
import PersonalArea from "../pages/PersonalArea/PersonalArea";
import AllDoctors from "../pages/AllDoctors/AllDoctors";
import Contacts from "../pages/Contacts/Contacts";
import SignOut from "../pages/SignOut/SignOut";
import Index from "../pages/index";
import NotFoundPage from "../pages/404";
import TermsOfUse from "../pages/TermsOfUse/TermsOfUse";
import PasswordRecovery from "../pages/PasswordRecovery/PasswordRecovery";
import EditSchedule from "../pages/EditSchedule/EditSchedule";
import Statistics from "../pages/Statistics/Statistics";
import TopUpAccountBalance from "../pages/TopUpAccountBalance/TopUpAccountBalance";
import AccountBalance from "../pages/AccountBalance/AccountBalance";
import { clinics, doctors, clinicSchedule, doctorsSchedule, requests } from "../redux/State";

export const CustomRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Index />} />
      <Route element={<PrivateRoute />}>
        <Route path="/my-clinic" element={<MyClinic clinics={clinics} clinicSchedule={clinicSchedule} />} />
        <Route path="/requests" element={<Requests requests={requests} />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/personal-area" element={<PersonalArea />} />
        <Route
          path="/all-doctors"
          element={<AllDoctors doctors={doctors} doctorsSchedule={doctorsSchedule} />}
        />
        <Route path="/account-balance" element={<AccountBalance />} />
        <Route path="/edit-schedule" element={<EditSchedule />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/top-up-account-balance" element={<TopUpAccountBalance />} />
      </Route>
      <Route path="/terms-of-use" element={<TermsOfUse />} />
      <Route path="/sign-out" element={<SignOut />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/password-recovery" element={<PasswordRecovery />} />
    </Routes>
  );
};
