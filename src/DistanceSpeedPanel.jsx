import React, { Component } from 'react';
import styles from './styles/infopanel.scss';

export default class DistanceSpeedPanel extends Component {

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.primary}>
          {this.props.targetDistance}
        </div>
        <div className={styles.tertßiary}>
          {this.props.arrivalWait}
        </div>
      </div>
    );
  }

}
