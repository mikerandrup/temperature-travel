import React, { Component } from 'react';
import styles from './styles/infopanel.scss';

export default class DestinationPanel extends Component {

  render() {

    const statusText = 'Traveling to';

    return (
      <div className={styles.container}>
        <div className={styles.tertiary}>
          {statusText}
        </div>
        <div className={styles.primary}>
          {this.props.targetLocation}
        </div>
      </div>
    );
  }

}
