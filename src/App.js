import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar/NavBar";
import Banner from "./components/banner/Banner";


function App() {
  return (
    <div className="app">
      <NavBar />
      <Banner />
    </div>
  );
}

export default App;
