import React, { useState, useEffect } from "react";
import "./Splash.css";
import { useHistory } from "react-router-dom";

const loadingMessages = [
  "Initializing portfolio...",
  "Loading projects...",
  "Securing connections...",
  "Building interfaces...",
  "Compiling achievements...",
  "Almost ready...",
];

export default function Splash() {
  const [progress, setProgress] = useState(0);
  const [msgIndex, setMsgIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [showPM, setShowPM] = useState(false);
  const history = useHistory();

  useEffect(() => {
    // Show PM letters after hexagon draws
    const pmTimer = setTimeout(() => setShowPM(true), 1200);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) { clearInterval(progressInterval); return 100; }
        return prev + 1.5;
      });
    }, 30);

    const msgInterval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 500);

    const redirectTimer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => history.push("/home"), 600);
    }, 3000);

    return () => {
      clearTimeout(pmTimer);
      clearInterval(progressInterval);
      clearInterval(msgInterval);
      clearTimeout(redirectTimer);
    };
  }, [history]);

  return (
    <div className={`splash-screen ${fadeOut ? "splash-fade-out" : ""}`}>
      {/* Hexagon with PM */}
      <div className="splash-hex-wrap">
        <svg className="splash-hex-svg" viewBox="0 0 200 200" fill="none">
          {/* Outer hexagon — draws itself */}
          <polygon
            className="hex-draw hex-outer"
            points="100,8 182,50 182,150 100,192 18,150 18,50"
            fill="none"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1.5"
          />
          {/* Inner hexagon — draws itself with delay */}
          <polygon
            className="hex-draw hex-inner"
            points="100,22 168,58 168,142 100,178 32,142 32,58"
            fill="none"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="1.5"
          />
        </svg>
        <div className={`splash-pm-text ${showPM ? "visible" : ""}`}>
          <span className="splash-p">P</span>
          <span className="splash-m">M</span>
        </div>
        {/* Subtle glow behind hexagon */}
        <div className="splash-hex-glow" />
      </div>

      {/* Loading section */}
      <div className="splash-loading">
        <div className="splash-progress-bar">
          <div
            className="splash-progress-fill"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        <div className="splash-status">
          <span className="splash-status-text">
            {loadingMessages[msgIndex]}
          </span>
        </div>
      </div>
    </div>
  );
}
