import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <div className="div-for-header-img">
          <img id="logo" alt="logo" title="logo" style={{ width: 60 }} src="https://webstockreview.net/images/patient-clipart-patient-identification-19.png" />
        </div>
        <nav className="nav">
          <div><a id="point1" className="point" href="##">Point 1</a></div>
          <div><a id="point2" className="point" href="##">Point 2</a></div>
          <div><a id="point3" className="point" href="##">Point 3</a></div>
        </nav>
        <div id="change-languages" className="change-languages">
          <p>Флажок языка</p>
        </div>
      </header>
    </div>
  );
}

export default App;
