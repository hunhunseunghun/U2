import "./App.css";
import React from "react";
import { Route, useHistory } from "react-router-dom";
import Main from "./Page/Main/Main.jsx";
import NavBar from "./NavBar/NavBar.jsx";
import Footer from "./Footer/Footer.jsx";
import ProjectRegi from "./Page/ProjectRegistration/ProjectRegi.jsx";

// import ScrollToTop from "./Scroll/ScrollToTop";

function App() {
  const history = useHistory();
  return (
    <div className="App">
      <NavBar history={history} />
      <Route exact path="/survmain" render={() => <Main />} />
      <Route
        exact
        path="/prjregi"
        render={() => <ProjectRegi history={history} />}
      />
      <Footer />
    </div>
  );
}

export default App;
