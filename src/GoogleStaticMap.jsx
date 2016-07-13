import React, { Component, PropTypes } from 'react';
import styles from './styles/googlemap.scss';
import googleApiKey from './constants/GoogleMap.secret';

const schemeAndHost = 'https://maps.googleapis.com/maps/api/staticmap';
const zoomLevel = 2;


export default class GoogleStaticMap extends Component {

  constructor() {
    super();
    this.state = {
      componentMounted: false
    };
  }

  componentDidMount() {
    this.setState({
      componentMounted: true
    });
  }

  static get propTypes() {
    return {
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired
    };
  }

  static get getDefaultProps() {
    return {
      latitude: 20,
      longitude: -20
    };
  }

  buildImageUrl(width, height) {
    const dimensions = `${width}x${height}`;
    const center = `${this.props.latitude},${this.props.longitude}`;

    return [
      schemeAndHost,
      '?', 'center=', center,
      '&', 'zoom=', zoomLevel,
      '&', 'size=', dimensions,
      '&', 'key=', googleApiKey
    ].join('');
  }

  render() {
    const inlineStyles = {};
    if (this.state.componentMounted) {
      const renderedWidth=this.mapCanvasElement.clientWidth;
      const renderedHeight=this.mapCanvasElement.clientHeight;
      inlineStyles.backgroundImage = `url('${this.buildImageUrl(renderedWidth, renderedHeight)}')`;
    }

    return (
      <div ref={c => this.mapCanvasElement= c} className={styles.canvas} style={inlineStyles}/>
    );
  }

}
