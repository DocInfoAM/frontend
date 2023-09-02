import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { UseRoutes } from "./routes/routes";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <div className="content">
          <UseRoutes
            clinics={props.clinics}
            clinicSchedule={props.clinicSchedule}
            requests={props.requests}
            doctors={props.doctors}
            doctorsSchedule={props.doctorsSchedule}
          />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
