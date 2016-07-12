import React, { Component } from 'react';
import TemperatureDial from './TemperatureDial';
import SimpleCarousel from './SimpleCarousel';
import DestinationPanel from './DestinationPanel';
import DistanceSpeedPanel from './DistanceSpeedPanel';
import panelStyles from './styles/infopanel.scss';

export default class TemperatureView extends Component {
  render() {
    return (
      <div>
        <div className={panelStyles.container}>
          <SimpleCarousel>
            <DestinationPanel {...this.props} />
            <DistanceSpeedPanel {...this.props} />
          </SimpleCarousel>
        </div>
        <TemperatureDial {...this.props} />
      </div>
    );
  }

}
