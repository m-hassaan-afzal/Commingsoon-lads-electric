import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



import Page404 from "./pages/others/Page404";
import commingsoon from "./pages/others/ComingSoon";

import ScrollToTop from "./helpers/ScrollToTop";

function App() {
  return (
    <Router basename={"/"}>
      <ScrollToTop>
        <Switch>
       

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/`}
            component={commingsoon}
          />

          <Route component={Page404} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
