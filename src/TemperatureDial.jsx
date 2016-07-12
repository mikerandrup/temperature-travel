import React, { PropTypes, Component } from 'react';
import styles from './styles/temperature.scss';
import classnames from 'classnames';

const markingCount = 120;
const startDegrees = -160;
const stopDegrees = 160;
const absTempBound = Math.abs(markingCount / 2);

export default class TemperatureDial extends Component {

  static get propTypes() {
    return {
      currentTemp: PropTypes.number.isRequired,
      targetTemp: PropTypes.number.isRequired
    };
  }

  renderMarks() {

    const currentTempIndex = Math.round(this.props.currentTemp);
    const targetTempIndex = Math.round(this.props.targetTemp);

    const stepAmount = (
      Math.abs(startDegrees) + Math.abs(stopDegrees)
    ) / markingCount;
    const markings = [];

    for (let i = 0; i < markingCount; i++) {
      markings.push(
        <div
          className={classnames({
            [styles.marking]: true,
            [styles.current]: i === currentTempIndex,
            [styles.target]: i === targetTempIndex,
            [styles.between]: (
              (targetTempIndex < i && i < currentTempIndex) ||
              (targetTempIndex > i && i > currentTempIndex)
            )
          })}
          style={{transform: `rotateZ(${i * stepAmount + startDegrees}deg)`}}
          key={i}
        />
      );
    }
    return markings;
  }

  render() {
    const statusText = 'Seeking Target';

    return (
      <div className={styles.container}>
        {this.renderMarks()}
        <div className={styles.targetTemp}>
          {this.props.targetTemp}
        </div>
        <div className={styles.targetStatus}>
          {statusText}
        </div>
      </div>
    );
  }



}
