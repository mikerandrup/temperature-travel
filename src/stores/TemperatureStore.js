import {TargetTempIncreased, TargetTempDecreased} from '../constants/ActionNames';
import {EventEmitter} from 'events';

const defaultActualTemperature = 93;
const defaultTargetTemperature = 72;

const MINIMUM_ALLOWED_TEMPERATURE = 0;
const MAXIMUM_ALLOWED_TEMPERATURE = 119;

export default class TemperatureStore extends EventEmitter {

  constructor(dispatch) {
    super(dispatch);
    this._targetTemperature = defaultTargetTemperature;
    this._actualTemperature = defaultActualTemperature;
  }

  getActualTemperature() {
    return this._actualTemperature;
  }

  getTargetTemperature() {
    return this._targetTemperature;
  }

  decreaseTargetTemperature() {
    this._targetTemperature = Math.max(
      MINIMUM_ALLOWED_TEMPERATURE,
      this._targetTemperature - 1
    );
    this.emit('change');
  }

  increaseTargetTemperature() {
    this._targetTemperature = Math.min(
      MAXIMUM_ALLOWED_TEMPERATURE,
      this._targetTemperature + 1
    );
    this.emit('change');
  }

}

TemperatureStore.storeName = 'TemperatureStore';
TemperatureStore.handlers = {
  [TargetTempIncreased]: 'increaseTargetTemperature',
  [TargetTempDecreased]: 'decreaseTargetTemperature'
};
