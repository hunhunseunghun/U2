import "./App.css";
import React from "react";
import { Route, useHistory } from "react-router-dom";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Main from "./Page/Main/Main.jsx";
import NavBar from "./NavBar/NavBar.jsx";
import Footer from "./Footer/Footer.jsx";
import ProjectRegi from "./Page/ProjectRegistration/ProjectRegi.jsx";
import MyWork from "./Page/MyWork/MyWork.jsx";
import SetTaskCondition from "./Page/ProjectRegistration/SetTaskCondition/SetTaskCondition.jsx";
import WorkDetail from "./Page/WorkDetail/WorkDetail";

// import { requirePropFactory } from '@material-ui/core';
// import ScrollToTop from "./Scroll/ScrollToTop";

function App() {
  const history = useHistory();

  return (
    <div className="App">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <NavBar history={history} />
        <Route exact path="/survmain" render={() => <Main />} />
        <Route
          exact
          path="/prjregi"
          render={() => <ProjectRegi history={history} />}
        />
        <Route
          exact
          path="/setTc"
          render={() => <SetTaskCondition history={history} />}
        />
        <Route
          exact
          path="/mywork"
          render={(props) => <MyWork history={history} {...props} />}
        />
        <Route
          exact
          path="/workdetail"
          render={(props) => (
            <WorkDetail history={history} {...props}></WorkDetail>
          )}
        ></Route>
        <Footer />
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default App;
