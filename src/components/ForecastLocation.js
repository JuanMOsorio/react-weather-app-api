import React from 'react';

const ForecastLocation = ({ name, temp, humidity, speed }) => 
  <div className="forecats-container row text-white align-items-center rounded-top">
    <div className="col d-flex justify-content-center">
      <div className="row align-items-center">
        <h1 className="pr-3">{ name }</h1>
        <div className="h1"> { temp }°</div>
      </div>
    </div>
    <div className="col">
      <div className="justify-content-center display-4">
        <i className="fas fa-cloud" />
      </div>
      <div className="row">
        <p className="pr-3">Humedad: { humidity } %</p>
        <p>Viento: { speed } m/s</p>
      </div>
    </div>
  </div>;
  
export default ForecastLocation;