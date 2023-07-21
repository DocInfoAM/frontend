import Navigation from "./Navigation"
import ChangeLanguages from "./ChangeLanguages"

const Header = () => {
    return (
      <header className="header">
        <div className="div-for-header-img">
          <img id="logo" alt="logo" title="logo" style={{ width: 60 }} src="./img/patient-clipart-patient-identification-19.png" />
        </div>
        <Navigation />
        <ChangeLanguages />
      </header>
    )
}

export default Header 