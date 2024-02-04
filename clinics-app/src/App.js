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
