import React from "react";
import { Link, useHistory } from "react-router-dom";

const Topics = () => {
  const history = useHistory();

  return (
    <div id="topics-div">
      <h2>Topics</h2>
      <ul>
        <Link to="/topics/rendering">
          <li>
            <h2 id="rendering">Rendering</h2>
          </li>
        </Link>
        <Link to="/topics/components">
          <li>
            <h2 id="components">Components</h2>
          </li>
        </Link>
      </ul>
      <hr />
      <button id="topics-back-button" onClick={() => history.push("/")}>
        Back
      </button>
    </div>
  );
};

export default Topics;
