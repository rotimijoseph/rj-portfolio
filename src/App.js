import "./App.css";
import AboutMe from "./Components/AboutMe";
import AllProjects from "./Components/AllProjects";
import Header from "./Components/Header";
import NavAcross from "./Components/NavAcross";
import SideNav from "./Components/SideNav";

function App() {
  return (
    <div class="grid-container">
      <Header />
      <NavAcross />
      <SideNav />
      <AllProjects />
      <AboutMe />
    </div>
  );
}

export default App;
