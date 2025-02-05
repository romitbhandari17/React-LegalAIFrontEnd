import React from "react";
import { Link } from "react-router-dom";

const ProjectItem = () => {
  return (
    <div className="col-md-3 my-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to="/editProject" className="btn btn-primary">
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
