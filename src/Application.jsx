import React, { Component } from 'react';
import TemperatureView from './TemperatureView';
import MapView from './MapView';
import SettingsView from './SettingsView';

import appViews from './constants/AppViews';

const CURRENT_VIEW = appViews.TemperatureView;

const viewData = {
  currentTemp: 83,
  targetTemp: 72,

  currentLocation: 'Dallas TX USA',
  targetLocation: 'San Diego CA USA',

  // maybe do current lat/lon & target lat/lon

  targetDistance: '453 miles',
  arrivalWait: '0 hours 13 minutes 42 seconds',

  travelSpeed: '371 mph'
};

export default class Application extends Component {
  render() {
    let ViewComponent = null;
    switch (CURRENT_VIEW) {

      case appViews.SettingsView:
        ViewComponent = SettingsView;
        break;

      case appViews.MapView:
        ViewComponent = MapView;
        break;

      case appViews.TemperatureView:
      default:
        ViewComponent = TemperatureView;
        break;
    }

    return (
      <ViewComponent {...viewData} />
    );
  }
}
