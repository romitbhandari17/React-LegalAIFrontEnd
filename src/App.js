import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { useState } from 'react';
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Projects from "./components/Projects";
import EditProject from "./components/EditProject";

function App() {
  const [alert, SetAlert] = useState(null);

  const showAlert = (message, type) => {
    SetAlert({
      msg:message,
      type: type
    })

    setTimeout(() =>{
      SetAlert(null);
    },2000)
  }

  return (
    <>
    <Router>
          <Navbar />
          <Alert alert={alert} />
          {/* <div className="container"> */}
            <Routes>
              <Route path="/" element={<Home showAlert={showAlert} />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/login" element={<Login showAlert={showAlert} />}></Route>
              <Route path="/signup" element={<Signup showAlert={showAlert} />}></Route>
              <Route path="/projects" element={<Projects showAlert={showAlert} />}></Route>
              <Route path="/editProject" element={<EditProject showAlert={showAlert} />}></Route>
            </Routes>
          {/* </div> */}
        </Router>
    </>
  );
}

export default App;
