import React, {Component} from "react";
import Header from "./Header";
import Home from "./Home";
import Error404 from './Error404';
import NewPostForm from './NewPostForm';
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/newpost' component={NewPostForm} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {

}

export default withRouter(connect()(App));
