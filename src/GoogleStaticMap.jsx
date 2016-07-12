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
      height: PropTypes.number.isRequired,
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired
    };
  }

  buildImageUrl(width) {
    return `https://placekitten.com/${width}/${this.props.height}`;
  }

  render() {

    const inlineStyles = {
      height: `${this.props.height}px`
    }

    if (this.state.componentMounted) {
      console.log(
        'canvas node',
        this.refs.canvas.style
      );
      const renderedWidth=500;
      inlineStyles.backgroundImage = `url('${this.buildImageUrl(renderedWidth)}')`;
    }

    return (
      <div ref="canvas" className={styles.canvas} style={inlineStyles}/>
    );
  }

}
