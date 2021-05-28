import './App.scss';
import Navbar from "./components/App-Header/Navbar";
import AppBody from "./components/App-Body/AppBody";

function App() {
  return (
    <div className="App">
      <div className="App-Header">
        <Navbar />
      </div>
      <div className="App-Body">
        <AppBody />
      </div>
      <div className="App-Footer">
      </div>
    </div>
  );
}

export default App;
