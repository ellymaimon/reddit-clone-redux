import React, {Component} from "react";
import Header from "./Header";
import Home from "./Home";
import Error404 from './Error404';
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
          <Route path='/'
                 render={()=><Home />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {

}

export default App;
