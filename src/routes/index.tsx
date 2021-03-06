import React, {lazy} from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

const SignIn = lazy(() => import ('../pages/SignIn'))
const SignUp = lazy(() => import ('../pages/SignUp'))
const Forgot = lazy(() => import ('../pages/ForgotPassword'))

const Dashboard = lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 3 * 1000)).then(
    () =>
      import('../pages/Dashboard')
  );
});

const Staffs = lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 3 * 1000)).then(
    () =>
       import('../pages/Staffs')
  );
});

const Services = lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 3 * 1000)).then(
    () =>
      import('../pages/Services')
  );
});

const Appointment = lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 3 * 1000)).then(
    () =>
      import('../pages/Appointment')
  );
});



const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn}/>
    <Route path="/signup" exact component={SignUp}/>
    <Route path="/forgot" exact component={Forgot}/>
    <Route path="/dashboard" exact component={Dashboard} isPrivate/>
    <Route path="/staffs" exact component={Staffs} isPrivate/>
    <Route path="/services" exact component={Services} isPrivate/>
    <Route path="/appointments" exact component={Appointment} isPrivate/>


  </Switch>
);

export default Routes;
