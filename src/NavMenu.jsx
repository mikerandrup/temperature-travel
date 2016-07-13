import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import appViews from './constants/AppViews';
import styles from './styles/navmenu.scss';
import appViewActions from './actions/AppViewActions';

export default class NavMenu extends Component {

  static get propTypes() {
    return {
      currentAppView: PropTypes.number.isRequired
    };
  }

  render() {
    const view = this.props.currentAppView;

    const isTemperature = view === appViews.TemperatureView;
    const isMap = view === appViews.MapView;
    const isSettings = view === appViews.SettingsView;

    return (
      <div className={styles.container}>

        <div onClick={appViewActions.temperatureViewActivated}
          className={classnames({
            [styles.navitem]: true,
            [styles.active]: isTemperature
        })}>
          Temperature
        </div>

        <div onClick={appViewActions.mapViewActivated}
          className={classnames({
            [styles.navitem]: true,
            [styles.active]: isMap
        })}>
          Map View
        </div>

        <div onClick={appViewActions.settingsViewActivated}
          className={classnames({
            [styles.navitem]: true,
            [styles.active]: isSettings
        })}>
          Settings
        </div>

      </div>

    );
  }

}
