import React, { PropTypes, Component } from 'react';
import TemperatureView from './TemperatureView';
import MapView from './MapView';
import SettingsView from './SettingsView';
import NavMenu from './NavMenu';
import AppViewStore from './stores/AppViewStore';

import appViews from './constants/AppViews';

const viewData = {

  currentTemp: 83,
  targetTemp: 72,

  currentLocation: 'Dallas',
  targetLocation: 'San Diego',

  // maybe do current lat/lon & target lat/lon

  targetDistance: '453 miles',
  arrivalWait: '0 hours 13 minutes 42 seconds',

  travelSpeed: '371 mph'
};

export default class Application extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = this.getState();
    console.log('AppViewStore', AppViewStore);
  }

  getState() {
    return {
      currentAppView: this.context.getStore(AppViewStore).getCurrentAppView()
    }
  }

  static get contextTypes() {
    return{
      getStore: PropTypes.func.isRequired,
      executeAction: PropTypes.func.isRequired
    }
  }

  handleChange() {
    this.setState(
      this.getState()
    );
  }

  componentDidMount() {
    this.context.getStore(AppViewStore).addListener(
      'change',
      this.handleChange.bind(this)
    );
  }

  componentWillUnmount() {
    this.context.getStore(AppViewStore).removeListener(
      'change',
      this.handleChange.bind(this)
    );
  }

  render() {
    let ViewComponent = null;
    switch (this.state.currentAppView) {

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
      <div>
        <ViewComponent {...viewData} />
        <NavMenu currentAppView={this.state.currentAppView} />
      </div>
    );
  }
}
