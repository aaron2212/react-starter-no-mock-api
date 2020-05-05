import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { LandingPage, NotFoundPage } from 'components/pages';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="*" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
