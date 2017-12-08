import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './pm.css';
import arrow from '../intensity/arrow.png';
import center from '../intensity/center.png';

class Pm extends PureComponent {

  getRotate(value) {
    if(value >= 0 && value < 35) {
      return value * 60 / 35;
    }
    if(value >= 35 && value < 115) {
      return 60 + (value - 35) * 60 / 40;
    }
    if(value >=115 && value < 150) {
      return 180 + (value - 115) * 60 / 35;
    }
    if(value >= 150 && value < 250) {
      return 240 + (value - 150) * 60 / 100;
    }
    if(value >= 250 && value < 500) {
      return 300 + (value - 250) * 60 / 250;
    }
    if(value >= 500) {
      return -1;
    }
  }

  render() {
    const value = this.props.value || 0;
    const height = this.props.height || 373;
    const width = 374 * height / 373;
    const pmStyle = {
      height,
      width,
      backgroundSize: width, height
    }
    const arrowHeight = 95 * height / 373, arrowWidth = 22 * height / 373;
    const arrowStyle = {
      width: arrowWidth,
      height: arrowHeight,
      top: height / 2 - arrowHeight,
      left: (width - arrowWidth) / 2,
      transform: `rotate(${this.getRotate(value)+180}deg)`,
      transformOrigin: `center bottom`
    }
    const centerSize = 34 * height / 373;
    const centerStyle = {
      width: centerSize,
      height: centerSize,
      top: (height - centerSize) / 2,
      left: (width - centerSize) / 2
    }
    return(
      <div className={"pm"} style={pmStyle}>
        <img className="arrow" src={arrow} style={arrowStyle}/>
        <img className="center" src={center} style={centerStyle}/>
      </div>
    );
  }
}

Pm.propTypes = {
  height: PropTypes.number,
  value: PropTypes.number
};


export default Pm;