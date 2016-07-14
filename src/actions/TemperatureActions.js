import {TargetTempIncreased, TargetTempDecreased} from '../constants/ActionNames';
import eventemitter from 'events';

const TemperatureActions = {

  targetTempIncreased: (context) => {
    context.dispatch(
      TargetTempIncreased
    );
  },

  targetTempDecreased: (context) => {
    context.dispatch(
      TargetTempDecreased
    );
  }

};

export default TemperatureActions;
