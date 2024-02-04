import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { CustomRoutes } from "./routes/routes";
import Loading from "./components/Loading/Loading";
import { useState, useEffect } from "react";
import { useUser } from "./context/UserProvider";

function App(props) {
  const { isLoading } = useUser()
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     const data = await fetch("https://docinfoam-mvp-dev-server.vercel.app/api")
  //       .then(function (response) {
  //         return response.json()
  //       })
  //       .then(function (data) {
  //         console.log(data.message)
  //       })
  //       .catch(function (error) {
  //         console.error("Ошибка:", error);
  //       });
  //     setData(data);
  //     setLoading(false);
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      {
        isLoading ?
          (<Loading />)
          :
          (
            <div className="app-wrapper">
              <Header />
              <div className="content">
                <CustomRoutes />
              </div>
              <Footer />
            </div>
          )
      }
    </>
  );
}

export default App;
