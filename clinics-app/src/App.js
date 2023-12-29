import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { CustomRoutes } from "./routes/routes";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <div className="content">
          <CustomRoutes
            clinicID={props.clinicID}
            clinics={props.clinics}
            clinicSchedule={props.clinicSchedule}
            requests={props.requests}
            doctors={props.doctors}
            doctorsSchedule={props.doctorsSchedule}
            newUser={props.newUser}
          />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
