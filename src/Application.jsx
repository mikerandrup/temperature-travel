import React, { Component } from 'react';
import TemperatureView from './TemperatureView';
import MapView from './MapView';
import SettingsView from './SettingsView';

import appViews from './constants/AppViews';

const CURRENT_VIEW = appViews.TemperatureView;

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
      <ViewComponent />
    );
  }
}
