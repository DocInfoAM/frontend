import './global.css'
import Header from './components/Header/Header'
import MyClinic from './components/MyClinic/MyClinic'
import Claims from './components/Claims/Claims'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <div className="content">
                    <Routes>
                        <Route path="/myclinic" Component={MyClinic} />
                        <Route path="/claims" Component={Claims} />
                        <Route path="/claims" Component={Claims} />
                        <Route path="/claims" Component={Claims} />
                        <Route path="/claims" Component={Claims} />
                        <Route path="/claims" Component={Claims} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
