import "./App.css";
import { Fragment } from "react";
import Typical from "react-typical";
import Navbar from "./shared/Navbar/Navbar";

function App() {
  return (
    <Fragment className="App">
      <Navbar />
      <Typical steps={["I am Md.Mohon", 2000]} loop={Infinity} wrapper="h1" />
    </Fragment>
  );
}

export default App;
