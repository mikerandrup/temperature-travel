import React, { Component } from 'react';
import SimpleCarousel from './SimpleCarousel';

export default class MapView extends Component {

  render() {
    return (
      <div>
        <h1>MapView</h1>
        <SimpleCarousel>
          <span>ETA Panel</span>
          <span>Target Temp Panel</span>
        </SimpleCarousel>
      </div>
    );
  }

}
