import appViews from '../constants/AppViews';
import actionNames from '../constants/ActionNames';
import eventemitter from 'events';

const AppViewActions = {

  temperatureViewActivated: () => {
    Dispatcher.dispatch(
      actionNames.ChangeView,
      appViews.TemperatureView
    );
  },

  temperatureViewActivated: () => {
    Dispatcher.dispatch(
      actionNames.ChangeView,
      appViews.TemperatureView
    );
  },

  settingsViewActivated: () => {
    Dispatcher.dispatch(
      actionNames.ChangeView,
      appViews.SettingsView
    );
  }

};

export default AppViewActions;
