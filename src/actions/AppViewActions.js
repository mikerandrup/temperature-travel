import appViews from '../constants/AppViews';
import {ChangeView} from '../constants/ActionNames';
import eventemitter from 'events';

const AppViewActions = {

  temperatureViewActivated: (context) => {
    console.log('action happened');
    context.dispatch(
      ChangeView,
      appViews.TemperatureView
    );
  },

  mapViewActivated: (context) => {
    console.log('action happened');
    context.dispatch(
      ChangeView,
      appViews.MapView
    );
  },

  settingsViewActivated: (context) => {
    console.log('action happened');
    context.dispatch(
      ChangeView,
      appViews.SettingsView
    );
  }

};

export default AppViewActions;
