import './global.css'
import Header from './components/Header/Header'
import MyClinic from './components/MyClinic/MyClinic'
import Claims from './components/Claims/Claims'

function App() {
    return (
        <div className="app-wrapper">
            <Header />
            <div className="content">
                
                <Claims />
                <MyClinic />
            </div>
        </div>
    )
}

export default App
