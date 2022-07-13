import "./App.css";
import { Fragment } from "react";
import Navbar from "./shared/Navbar/Navbar";
import TitleBar from "./component/Home/TitleBar/TitleBar";
import About from "./component/Home/About/About";
import SkillAndTestimonial from "./component/Home/SkillAndTestimonial/SkillAndTestimonial";

function App() {
  return (
    <Fragment className="App">
      <Navbar />
      <TitleBar />
      <About />
      <SkillAndTestimonial />
    </Fragment>
  );
}

export default App;
