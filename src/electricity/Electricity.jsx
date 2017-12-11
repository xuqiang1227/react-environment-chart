import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './electricity.css';
import arrow from '../intensity/arrow.png';
import center from '../intensity/center.png';

class Electricity extends PureComponent {

  render() {
    let value = this.props.value || 0;
    if(value > 10) {
      value = 10;
    }
    if(value < 0) {
      value = 0;
    }
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
      transform: `rotate(${30 + 30 * value + 180}deg)`,
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

Electricity.propTypes = {
  height: PropTypes.number,
  value: PropTypes.number
};


export default Electricity;