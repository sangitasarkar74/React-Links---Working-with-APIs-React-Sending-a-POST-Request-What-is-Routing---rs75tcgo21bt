import React from "react";
import { useHistory } from "react-router-dom";

const ComponentsTopic = () => {
  const history = useHistory();
  return (
    <div id="components-div">
      <h3>Components in React</h3>
      <button
        id="components-back-button"
        onClick={() => history.push("/topics")}
      >
        Back
      </button>
    </div>
  );
};

export default ComponentsTopic;
