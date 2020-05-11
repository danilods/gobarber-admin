import React from 'react';
import { Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect
} from 'react-router-dom';
import {useAuth} from '../hooks/AuthContext';
import DefaultLayout from '../pages/_layouts';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({ isPrivate = false, component: Component,...rest }) => {
  const {user} = useAuth();



  return (
    <ReactDOMRoute {...rest} render={({location}) => {

      return isPrivate === !!user ? (
        <DefaultLayout>
          <Component />
        </DefaultLayout>

      ) : (
          <Redirect to={{
            pathname: isPrivate ? '/' : '/dashboard',
            state: { from: location}
          }}
          />
        )
    }} />
  );
}

export default Route;
