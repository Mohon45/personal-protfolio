import "./App.css";
import { Fragment } from "react";
import AOS from "aos";
import Navbar from "./shared/Navbar/Navbar";
import TitleBar from "./component/Home/TitleBar/TitleBar";
import About from "./component/Home/About/About";
import SkillAndTestimonial from "./component/Home/SkillAndTestimonial/SkillAndTestimonial";
import MyProjects from "./component/Home/MyProjects/MyProjects";
import Contact from "./component/Home/Contact/Contact";
import Footer from "./component/Home/Footer/Footer";
import Notify from "./Const/Notify/Notify";

function App() {
  AOS.init();
  return (
    <Fragment className="App">
      <Navbar />
      <TitleBar />
      <About />
      <SkillAndTestimonial />
      <MyProjects />
      <Contact />
      <Footer />
      <Notify />
    </Fragment>
  );
}

export default App;
