import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import appViews from './constants/AppViews';
import styles from './styles/navmenu.scss';
import actions from './actions/AppViewActions';

export default class NavMenu extends Component {

  constructor(props, context) {
    super(props, context);
  }

  static get propTypes() {
    return {
      currentAppView: PropTypes.number.isRequired
    };
  }

  static get contextTypes() {
    return{
      getStore: PropTypes.func.isRequired,
      executeAction: PropTypes.func.isRequired
    }
  }

  render() {
    const view = this.props.currentAppView;

    const isTemperature = view === appViews.TemperatureView;
    const isMap = view === appViews.MapView;
    const isSettings = view === appViews.SettingsView;

    return (
      <div className={styles.container}>

        <div onClick={
            this.context.executeAction.bind(
              this, actions.temperatureViewActivated
            )
          }
          className={classnames({
            [styles.navitem]: true,
            [styles.active]: isTemperature
        })}>
          <div className={styles.icon}>🌡</div>
          <div className={styles.label}>Temperature</div>
        </div>

        <div onClick={
            this.context.executeAction.bind(
              this, actions.mapViewActivated
            )
          }
          className={classnames({
            [styles.navitem]: true,
            [styles.active]: isMap
        })}>
          <div className={styles.icon}>🌍</div>
          <div className={styles.label}>Map View</div>
        </div>

        <div onClick={
            this.context.executeAction.bind(
              this, actions.settingsViewActivated
            )
          }
          className={classnames({
            [styles.navitem]: true,
            [styles.active]: isSettings
        })}>
          <div className={styles.icon}>⚙</div>
          <div className={styles.label}>Settings</div>
        </div>

      </div>

    );
  }

}
