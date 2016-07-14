import React, { PropTypes, Component } from 'react';

import actions from './actions/TemperatureActions';
import styles from './styles/temperature.scss';
import classnames from 'classnames';

const markingCount = 120;
const startDegrees = -160;
const stopDegrees = 160;

export default class TemperatureDial extends Component {

  constructor(props, context) {
    super(props, context);
  }

  static get propTypes() {
    return {
      currentTemp: PropTypes.number.isRequired,
      targetTemp: PropTypes.number.isRequired
    };
  }

  static get contextTypes() {
    return{
      getStore: PropTypes.func.isRequired,
      executeAction: PropTypes.func.isRequired
    }
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
      <div className={classnames({
          [styles.container]: true,
          [styles.heating]: this.props.currentTemp < this.props.targetTemp,
          [styles.cooling]: this.props.currentTemp > this.props.targetTemp,
          [styles.idle]: this.props.currentTemp == this.props.targetTemp
        })}>
        {this.renderMarks()}
        <div className={styles.targetTemp}>
          {this.props.targetTemp}
        </div>
        <div className={styles.targetStatus}>
          {statusText}
        </div>
        <div className={styles.buttonHolder}>
          <span onClick={
              this.context.executeAction.bind(
                this, actions.targetTempDecreased
              )
            }
            className={this.decrease}
          >
            ▼
          </span>
          <span onClick={
              this.context.executeAction.bind(
                this, actions.targetTempIncreased
              )
            }
            className={this.increase}
          >
            ▲
          </span>
        </div>
      </div>
    );
  }



}
