import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../components/Header/PrivetRoute/PrivetRoute";
import MyClinic from "../components/Pages/MyClinic/MyClinic";
import Requests from "../components/Pages/Requests/Requests";
import Schedule from "../components/Pages/Schedule/Schedule";
import PersonalArea from "../components/Pages/PersonalArea/PersonalArea";
import AllDoctors from "../components/Pages/AllDoctors/AllDoctors";
import Contacts from "../components/Pages/Contacts/Contacts";
import SignOut from "../components/Pages/SignOut/SignOut";
import Index from "../components/Pages";
import NotFoundPage from "../components/Pages/404";
import TermsOfUse from "../components/Pages/TermsOfUse/TermsOfUse";
import PasswordRecovery from "../components/Pages/PasswordRecovery/PasswordRecovery";
import EditSchedule from "../components/Pages/EditSchedule/EditSchedule";
import Statistics from "../components/Pages/Statistics/Statistics";
import TopUpAccountBalance from "../components/Pages/TopUpAccountBalance/TopUpAccountBalance";
import AccountBalance from "../components/Pages/AccountBalance/AccountBalance";
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
