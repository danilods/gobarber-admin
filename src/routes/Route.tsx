import React from 'react';
import { Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect
} from 'react-router-dom';
import {useAuth} from '../hooks/AuthContext';
import DefaultLayout from '../pages/_layouts';
import AuthLayout from '../pages/_layouts/auth';


interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({ isPrivate = false, component: Component,...rest }) => {
  const {userFire, userJWT} = useAuth();

  const Layout = !!userFire || !!userJWT ? DefaultLayout : AuthLayout;

  return (
    <ReactDOMRoute {...rest} render={({location}) => {

      return isPrivate === !!userFire || !! userJWT ? (
        <Layout>
          <Component />
        </Layout>

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
