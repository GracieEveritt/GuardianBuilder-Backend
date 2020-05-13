import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import GuardianState from './context/guardian/guardianState';
import ChildState from './context/child/ChildState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import Alerts from './components/layout/Alerts';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import Support from './components/pages/Support';
import Library from './components/pages/Library';
import Account from './components/pages/Account';
import Forms from './components/pages/Forms';
import Schedule from './components/pages/Schedule';
import Settings from './components/pages/Settings';
import Estate from './components/pages/Estate';
import Guardianship from './components/forms/Guardianship';
import ParentForm from './components/parents/ParentForm';

if(localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <AuthState>
      <GuardianState>
      <ChildState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <Sidebar />
              <div className="container">
                <Alerts />
                <Switch>
                  <PrivateRoute exact path='/' component={Home} />
                  <PrivateRoute exact path='/account' component={Account} />
                  <PrivateRoute exact path='/forms' component={Forms} />
                  <PrivateRoute exact path='/estate' component={Estate} />
                  <PrivateRoute exact path='/schedule' component={Schedule} />
                  <PrivateRoute exact path='/parent' component={ParentForm} />
                  <PrivateRoute exact path='/guardianship' component={Guardianship}/>
                  <PrivateRoute restricted={true} exact path='/charge' component={Settings} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/support' component={Support} />
                  <Route exact path='/library' component={Library} />
                  
                </Switch>


              </div>
              <Footer />
            </Fragment>
          </Router>
        </AlertState>
      </ChildState>
      </GuardianState>
    </AuthState>
  );
}

export default App;
