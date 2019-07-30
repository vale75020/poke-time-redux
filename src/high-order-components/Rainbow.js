import React from "react";

const Rainbow = WrappedComponent => {
  const colours = ["red", "pink", "orange", "blu", "green", "yellow"];
  const randomColour = colours[Math.floor(Math.random() * 5)]; // pour selectionner une couleur random dans l'array
  const className = randomColour + "-text";
  return props => {
    return (
      <div className={className}>
        <WrappedComponent {...props}/>
      </div>
    );
  };
};

export default Rainbow;
