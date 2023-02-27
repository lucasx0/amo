import { Switch } from 'react-router-dom';
import Route from './Route';

//pages
import SignIn from '../pages/SignIn/signIn';
import SignUp from '../pages/SignUp/signUp';
import Dashboard from '../pages/Dashboard/dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/register" component={SignUp} />

      <Route exact path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
}
