import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar/NavBar";
import Banner from "./components/banner/Banner";
import Skills from "./components/skills/Skills";


function App() {
  return (
    <div className="app">
      <NavBar />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
