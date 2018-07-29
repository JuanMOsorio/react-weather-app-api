import React from 'react';
import '../css/Forecast.css'

const ForecastLocation = () => 
  <div className="container py-4">
    <div className="forecats-container row text-white align-items-center">
      <div className="col">
        <div className="row">
          <h3>Tehuacán Puebla </h3>
          <div className="h1">19°</div>
        </div>
      </div>
      <div className="col">
        <div className="display-4">
          <i class="fas fa-cloud" />
        </div>
        <h4>Cloudy</h4>
      </div>
    </div>
  </div>;

export default ForecastLocation;