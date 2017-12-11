import React, {PureComponent} from 'react';
import './humidity.css';
import arrow from './arrow.png';
import center from './center.png';
import PropTypes from 'prop-types';

class Humidity extends PureComponent {
  constructor() {
    super(...arguments);
  }

  render() {
    let rotate = this.props.value || 0;
    if(rotate < 0) {
      rotate = 0;
    }
    if(rotate > 100) {
      rotate = 100;
    }
    const height = this.props.height || 252;
    const width = 428 * height / 252;
    const humidityStyles = {
      height: height + 25,
      width: width + 53
    }
    const arrowHeight = 114 * height / 252, arrowWidth = 24 * height / 252;
    const arrowStyle = {
      width: arrowWidth,
      height: arrowHeight,
      top: height - arrowHeight + 12.5 - 20.5,
      left: (width - arrowWidth) / 2 + 25.5,
      transform: `rotate(${(rotate * 180 / 100) - 90}deg)`,
      transformOrigin: `center bottom`
    }
    const centerSize = 41 * height / 252;
    const centerStyle = {
      width: centerSize,
      height: centerSize,
      top: (height - centerSize) + 12.5,
      left: (width - centerSize) / 2 + 25.5
    }
    return (
      <div className="normal" style={humidityStyles}>
        <div className="dry">dry</div>
        <div className="comfort">comfort</div>
        <div className="wet">wet</div>
        <div className="humidity" style={{height, width}}></div>
        <img className="arrow" src={arrow} style={arrowStyle}/>
        <img className="center" src={center} style={centerStyle}/>
      </div>
    );
  }
}

Humidity.PropTypes = {
  height: PropTypes.number,
  value: PropTypes.number
}

export default Humidity;