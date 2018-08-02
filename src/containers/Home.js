import React from 'react';

import API from '../utils/Api';
import '../components/index.css'

import Navbar from '../components/Navbar';
import ForecastLocation from '../components/ForecastLocation';
import ForecastCountry from '../components/ForecastCountry';

class Home extends React.Component {

  state = {data: ''};

  componentDidMount = () => {
    API.getForecast('Mexico, mex').then(data => 
      this.setState({data})
    );
  }
  
  render = () => {
    console.log('this', this.state.data.main)
    return <React.Fragment>
      <Navbar />
      {this.state.data?<div className="container my-4 shadow mb-5 rounded">
        <ForecastLocation 
          {...this.state.data.main} 
          {...this.state.data} 
          {...this.state.data.wind}
        />
        <ForecastCountry />
      </div>: 
      <div className="container" >
        <h1 className="loading">Cargando...</h1>
      </div>}
    </React.Fragment>;}
}

export default Home;