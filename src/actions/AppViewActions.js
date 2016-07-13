import appViews from '../constants/AppViews';
import actionNames from '../constants/ActionNames';

const AppViewActions = {

  temperatureViewActivated: (actionContext) => {
    actionContext.dispatch(
      actionNames.ChangeView,
      appViews.TemperatureView
    );
  },

  temperatureViewActivated: (actionContext) => {
    actionContext.dispatch(
      actionNames.ChangeView,
      appViews.TemperatureView
    );
  },

  settingsViewActivated: (actionContext) => {
    actionContext.dispatch(
      actionNames.ChangeView,
      appViews.SettingsView
    );
  }

};

export default AppViewActions;
