import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import styles from './styles/carousel.scss';

export default class SimpleCarousel extends Component {
  static get propTypes() {
    return {
      children: PropTypes.arrayOf(React.PropTypes.node).isRequired
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      slidePosition: 0,
      isDragging: false,
      startDragPixel: undefined,
      startDragPosition: undefined
    };
  }

  handleTouchStart(event) {
    const touchPixelsX = event.touches[0].clientX;
    const startPosition = this.state.slidePosition;

    this.setState({
      isDragging: true,
      startDragPixel: touchPixelsX,
      startDragPosition: startPosition
    });

    event.preventDefault();
  }

  handleTouchMove(event) {
    if (!this.state.isDragging) return;

    const touchPixelsX = event.touches[0].clientX;
    const widthPixels = event.currentTarget.clientWidth;
    const positionDelta = (this.state.startDragPixel - touchPixelsX) / widthPixels;

    const maxPosition = this.props.children.length - 1;
    let newPosition = this.state.startDragPosition + positionDelta;
    if (newPosition < 0) {
      newPosition = 0;
    } else if (newPosition > maxPosition) {
      newPosition = maxPosition;
    }
    this.setState({
      slidePosition: newPosition
    });

    event.preventDefault();
  }

  handleTouchEnd(event) {
    this.setState({
      slidePosition: Math.round(this.state.slidePosition),
      isDragging: false,
      startDragPixel: undefined,
      startDragPosition: undefined
    });

    event.preventDefault();
  }

  renderDots() {
    const dots = [];
    const itemCount = this.props.children.length;
    const roundedPosition = Math.round(this.state.slidePosition);
    for (let i = 0; i < itemCount; i++) {
      const active = roundedPosition == i;
      dots.push(
        <div key={i}
          className={classNames(styles.dot, active && styles.active)}
        />
      );
    }
    return dots;
  }

  render() {
    const itemCount = this.props.children.length;
    const itemStyles = {
      width: (1 / itemCount * 100) + '%'
    };
    const wrappedChildren = this.props.children.map(
      (child, i) => {
        return (
          <div className={styles.carouselItem}
            key={i}
            style={itemStyles}
          >
            {child}
          </div>
        );
      }
    );
    const moverStyles = {
      width: (itemCount * 100) + '%',
      left: (this.state.slidePosition * -100) + '%'
    };

    return (
      <div className={styles.carouselContainer}
        onTouchStart={this.handleTouchStart.bind(this)}
        onTouchMove={this.handleTouchMove.bind(this)}
        onTouchEnd={this.handleTouchEnd.bind(this)}
      >
        <div className={styles.carouselMover} style={moverStyles}>
          {wrappedChildren}
        </div>
        <div className={styles.dotHolder}>
          {itemCount > 1 && this.renderDots()}
        </div>
      </div>
    );
  }

}
