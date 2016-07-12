import React, { Component } from 'react';
import TemperatureDial from './TemperatureDial';

const viewData = {
  currentTemp: 83,
  targetTemp: 72,
};

export default class TemperatureView extends Component {
  render() {
    return (
      <div>
        <h1>TemperatureView</h1>
        <TemperatureDial {...viewData} />
      </div>
    );
  }

}
