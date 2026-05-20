import React from "react";
import { createRoot } from "react-dom/client";
import "./i18n/index";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";

// Error boundary to catch and display React errors
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    console.error("React Error:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 40, fontFamily: 'monospace', color: 'red' }}>
          <h1>Something went wrong!</h1>
          <pre style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <ErrorBoundary>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </ErrorBoundary>
);
