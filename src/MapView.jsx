import React, { Component } from 'react';
import SimpleCarousel from './SimpleCarousel';
import DistanceSpeedPanel from './DistanceSpeedPanel';
import TargetTemperaturePanel from './TargetTemperaturePanel';
import GoogleStaticMap from './GoogleStaticMap';
import panelStyles from './styles/infopanel.scss';

export default class MapView extends Component {

  render() {
    return (
      <div>
        <div className={panelStyles.carouselContainer}>
          <SimpleCarousel>
            <TargetTemperaturePanel {...this.props} />
            <DistanceSpeedPanel {...this.props} />
          </SimpleCarousel>
        </div>

        <GoogleStaticMap
          latitude={30}
          longitude={-30}
        />

      </div>
    );
  }

}
