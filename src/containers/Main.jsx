import React, { lazy, Suspense } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { settings } from "../portfolio.js";

// Lazy-loaded page components for code splitting
const Home = lazy(() => import("../pages/home/HomeComponent"));
const Splash = lazy(() => import("../pages/splash/Splash"));
const Education = lazy(() => import("../pages/education/EducationComponent"));
const Experience = lazy(() => import("../pages/experience/Experience"));
const Contact = lazy(() => import("../pages/contact/ContactComponent"));
const Projects = lazy(() => import("../pages/projects/Projects"));
const ProjectDetail = lazy(() => import("../pages/projects/ProjectDetail"));
const CyberLayout = lazy(() => import("../pages/cyber/CyberLayout"));
const CyberHome = lazy(() => import("../pages/cyber/CyberHome"));
const CyberAbout = lazy(() => import("../pages/cyber/CyberAbout"));
const CyberSkills = lazy(() => import("../pages/cyber/CyberSkills"));
const CyberProjects = lazy(() => import("../pages/cyber/CyberProjects"));
const CyberLab = lazy(() => import("../pages/cyber/CyberLab"));
const CyberTerminal = lazy(() => import("../pages/cyber/CyberTerminal"));
const Resume = lazy(() => import("../pages/resume/Resume"));
const Error404 = lazy(() => import("../pages/errors/error404/Error"));

// Legacy theme compatibility — uses CSS variables so it adapts to dark/cyber mode.
// Components still using theme prop will now pick up the active theme's colors.
const defaultTheme = {
  body: "var(--bg)",
  text: "var(--text)",
  expTxtColor: "var(--text)",
  highlight: "var(--accent)",
  dark: "var(--primary)",
  secondaryText: "var(--text-sub)",
  imageHighlight: "var(--accent)",
  compImgHighlight: "var(--border)",
  jacketColor: "var(--primary)",
  headerColor: "var(--accent)",
  splashBg: "#0D2137",
};

export default function Main({ theme: propTheme }) {
  const theme = propTheme || defaultTheme;
  return (
    <BrowserRouter>
      <div id="main-content">
      <Suspense fallback={<div className="page-loading">Loading...</div>}>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) =>
              settings.isSplash ? (
                <Splash {...props} theme={theme} />
              ) : (
                <Home {...props} theme={theme} />
              )
            }
          />

          <Route
            path="/home"
            render={(props) => <Home {...props} theme={theme} />}
          />

          <Route
            path="/experience"
            exact
            render={(props) => (
              <Experience {...props} theme={theme} />
            )}
          />

          <Route
            path="/education"
            render={(props) => (
              <Education {...props} theme={theme} />
            )}
          />

          <Route
            path="/contact"
            render={(props) => <Contact {...props} theme={theme} />}
          />

          {settings.isSplash && (
            <Route
              path="/splash"
              render={(props) => <Splash {...props} theme={theme} />}
            />
          )}

          <Route
            path="/resume"
            render={(props) => <Resume {...props} theme={theme} />}
          />

          <Route
            path="/projects/:id"
            render={(props) => <ProjectDetail {...props} theme={theme} />}
          />

          <Route
            path="/projects"
            render={(props) => <Projects {...props} theme={theme} />}
          />

          {/* Cyber Mode Routes */}
          <Route
            path="/cyber/about"
            render={(props) => <CyberLayout><CyberAbout {...props} /></CyberLayout>}
          />
          <Route
            path="/cyber/skills"
            render={(props) => <CyberLayout><CyberSkills {...props} /></CyberLayout>}
          />
          <Route
            path="/cyber/projects"
            render={(props) => <CyberLayout><CyberProjects {...props} /></CyberLayout>}
          />
          <Route
            path="/cyber/lab"
            render={(props) => <CyberLayout><CyberLab {...props} /></CyberLayout>}
          />
          <Route
            path="/cyber/terminal"
            render={(props) => <CyberLayout><CyberTerminal {...props} /></CyberLayout>}
          />
          <Route
            path="/cyber"
            render={(props) => <CyberLayout><CyberHome {...props} /></CyberLayout>}
          />

          {/* Catch-all route */}
          <Route
            path="*"
            render={(props) => <Error404 {...props} theme={theme} />}
          />
        </Switch>
      </Suspense>
      </div>
    </BrowserRouter>
  );
}
