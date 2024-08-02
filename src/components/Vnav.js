import React from "react";
import { Link } from "react-router-dom";

const Vnav = () => {
  return (
    <div className="col-md-3" style={{display:"inline-block", width:"25%"}}>
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">
          Settings
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/projects">
          Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/chat">
          Chat
        </Link>
      </li>
    </ul>
    </div>
  );
};

export default Vnav;
