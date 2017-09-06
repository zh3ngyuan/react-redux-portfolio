import React from "react";
import { HashRouter, Route, Switch } from 'react-router-dom';

import AboutPage from "./containers/AboutPage";
import HomePage from "./containers/HomePage";
import App from './containers/App';

import Resume from "./components/Resume";
import ServicesPage from "./components/Services";
import error404 from './components/404';

export default (
  <HashRouter>
      <App>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/resume" component={Resume} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="*" component={error404}/>
        </Switch>
      </App>
  </HashRouter>
)