import Header from "./components/Header/Header"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import index from "./pages";
import Terms from "./pages/TermsOfUse/TermsOfUse";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div>
      <Routes>
        <Route path="/" Component={index} />
        <Route path="/TermsOfUse" Component={Terms}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
