import React from "react";
import Vnav from "./Vnav";

const EditProject = () => {
  return (
    <div>
      <Vnav></Vnav>
      <div className="col-md-8 text-center" style={{display:"inline-block", width:"72%"}}>
        <div className="input-group mb-3" style={{    position: "fixed", bottom: "21px", width: "800px"}}>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
    </div>
  );
};

export default EditProject;
