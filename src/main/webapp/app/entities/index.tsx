import React from 'react';
import { Switch } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Project from './project';
import Expert from './expert';
import Sponsor from './sponsor';
/* jhipster-needle-add-route-import - JHipster will add routes here */

const Routes = ({ match }) => (
  <div>
    <Switch>
      {/* prettier-ignore */}
      <ErrorBoundaryRoute path={`${match.url}/project`} component={Project} />
      <ErrorBoundaryRoute path={`${match.url}/expert`} component={Expert} />
      <ErrorBoundaryRoute path={`${match.url}/sponsor`} component={Sponsor} />
      {/* jhipster-needle-add-route-path - JHipster will add routes here */}
    </Switch>
  </div>
);

export default Routes;
