import React from "react";
import "./App.css";
import StyleContext from "./StyleContext";
import UserInterface from "./UserInterface";

function App() {
  const styling = {
    background: "#ff3300",
    display: "inline-block",
    width: 120,
    height: 55,
    fontSize: 18,
    letterSpacing: 1,
    border: "2px solid #ff0000",
    borderRadius: 15,
    color: 'white',
    frontWeight:600
  };

  return (
    <main>
      <StyleContext.Provider value={ styling }>
        <h1
          style={{
            color: "#FF",
            fontFamily: "Luminari, fantasy",
            fontSize: 50,
          }}
        >
          Welcome to Comics Galore!
        </h1>
        <UserInterface />
      </StyleContext.Provider>
      <h1
        style={{
          color: "#FEE001",
          fontFamily: "Luminari, fantasy",
          fontSize: 50,
        }}
      >
        Welcome to Comics Galore!
      </h1>
      <UserInterface />
    </main>
  );
}

export default App;
