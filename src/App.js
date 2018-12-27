import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import routes from './routes';
import { Switch, Redirect, Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAuthAccount } from './actions/AuthActions';
import { getCookie } from './helper';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    getCookie("session_id"))
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
  } ></Route>
)

class App extends Component {
  componentDidMount() {
    this.props.getCurrentAccount();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="body">
          {this.showContentMenus(routes)}
        </div>
      </BrowserRouter>

    );
  }

  showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        if (['/login', '/register'].indexOf(route.path) < 0) {
          return (
            <PrivateRoute key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            ></PrivateRoute>
          );
        } else {
          return (
            <Route key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            ></Route>
          );
        }
      });
    }
    return <Switch>{result}</Switch>
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCurrentAccount: () => dispatch(getAuthAccount())
  }
}

export default connect(null, mapDispatchToProps)(App);