import React, { Component, PropTypes } from 'react';
import styles from './styles/googlemap.scss';

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

  buildImageUrl(width, height) {
    return `https://placekitten.com/g/${width}/${height}`;
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
