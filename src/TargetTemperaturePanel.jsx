import React, { Component } from 'react';
import styles from './styles/infopanel.scss';

export default class TargetTemperaturePanel extends Component {

  render() {

    const targetMessage = `Seeking ${this.props.targetTemp}°`;
    const currentMessage = `Currently ${this.props.currentTemp}°`;

    return (
      <div className={styles.container}>
        <div className={styles.tertiary}>
          {currentMessage}
        </div>
        <div className={styles.primary}>
          {targetMessage}
        </div>
      </div>
    );
  }

}
