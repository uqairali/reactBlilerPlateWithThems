
import {auth} from '../../utils/fikifooApiMethods';
import React from 'react';
import {Route,Redirect} from 'react-router-dom';

const SecretRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      auth.loggedIn() === true
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  );

  export default SecretRoute;