import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { CustomRoutes } from "./routes/routes";
import Loading from "./components/Loading/Loading";
import { useState, useEffect } from "react";
import { getDoctors } from "./redux/State"

function App(props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getDoctors();
        setData(data);
      } catch (error) {
        console.error('Error in useEffect:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? <Loading /> :
        <BrowserRouter>
          <div className="app-wrapper">
            <Header />
            <div className="content">
              <CustomRoutes
                clinicID={props.clinicID}
                clinics={props.clinics}
                doctors={props.doctors}
                // clinicSchedule={props.clinicSchedule}
                // requests={props.requests}
                // doctorsSchedule={props.doctorsSchedule}
                newUser={props.newUser}
              />
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      }
    </>
  );
}

export default App;
