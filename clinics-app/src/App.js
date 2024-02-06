import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { CustomRoutes } from "./routes/routes";
import Loading from "./components/Loading/Loading";
import { useUser } from "./context/UserProvider";

function App() {
  const { isLoading } = useUser()

  return (
    <>
      <input class="checkbox" type="checkbox" name="" id="checkbox" />
      <div class="hamburger_lines">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </div>
      <div className="app-wrapper">
        <Header />
        <div className="content">
          {isLoading ? <Loading /> : <CustomRoutes />}
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
