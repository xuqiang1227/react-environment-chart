import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './intensity.css';
import arrow from './arrow.png';
import center from './center.png';

class Intensity extends PureComponent {

  render() {
    const rotate = this.props.rotate || 0;
    const height = this.props.height || 363;
    const width = 361 * height / 363;
    const intensityStyles = {
      height,
      width,
      backgroundSize: width, height
    }
    const arrowHeight = 95 * height / 363, arrowWidth = 22 * height / 363;
    const arrowStyle = {
      width: arrowWidth,
      height: arrowHeight,
      top: height / 2 - arrowHeight,
      left: (width - arrowWidth) / 2,
      transform: `rotate(${rotate-135}deg)`,
      transformOrigin: `center bottom`
    }
    const centerSize = 34 * height / 363;
    const centerStyle = {
      width: centerSize,
      height: centerSize,
      top: (height - centerSize) / 2,
      left: (width - centerSize) / 2
    }
    return(
      <div className={"intensity"} style={intensityStyles}>
        <img className="arrow" src={arrow} style={arrowStyle}/>
        <img className="center" src={center} style={centerStyle}/>
      </div>
    );
  }
}

Intensity.propTypes = {
  height: PropTypes.number,
  rotate: PropTypes.number
};

export default Intensity;