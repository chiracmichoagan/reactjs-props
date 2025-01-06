import React from "react";

function Enfant({ props1, props2, props3 }) {
  return (
    <div>
      <h2>{props1}</h2>
      <p>{props2}</p>
      <p>Valeur : {props3}</p>
    </div>
  );
}

export default Enfant;
