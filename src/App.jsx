import React from "react";
import "./App.css";
import Main from "./containers/Main";
import CustomCursor from "./components/cursor/CustomCursor";
import Chatbot from "./components/chatbot/Chatbot";
import KonamiEaster from "./components/konamiEaster/KonamiEaster";

function App() {
  return (
    <div>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <CustomCursor />
      <KonamiEaster />
      <Main />
      <Chatbot />
    </div>
  );
}

export default App;
