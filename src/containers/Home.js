import React from 'react';

import API from '../utils/Api';

import Navbar from '../components/Navbar';
import ForecastLocation from '../components/ForecastLocation';

class Home extends React.Component {

  state = {forescastLocation: {}};

  componentDidMount = () => 
    this.setState(this.state.forescastLocation = API.getForecast('Mexico'));
    
  
  render = () => 
    <React.Fragment>
      <Navbar />
      <ForecastLocation />
    </React.Fragment>;
}

export default Home;