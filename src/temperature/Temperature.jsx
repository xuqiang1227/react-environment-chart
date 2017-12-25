import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './temperature.css';
import arrow from '../tvoc/arrow.png';

class Temperature extends PureComponent {
  getTemperature(value) {
    if(value < -20) {
      value = -20;
    }
    if(value > 40) {
      value = 40;
    }
    // if(value <= 20) {
    //   return value * 428 / 6 * 4 / 20;
    // } else {
    //   return ((value - 20 ) * 428 / 6 * 2 / 20 + 428 / 6 * 4); 
    // }
    return (value + 20) * 428 / 6 / 10;
  }

  render() {
    const {
      height = 556,
      tips = [],
      value = 0
    } = this.props;
    const a = height / 556;
    const width = 245 * a;
    const styles = {
      width: width + 85 * a,
      height,
      backgroundSize: width
    };
    const tipStyle = {
      height: height - 102 * a,
      fontSize: 14 * a
    };
    const arrowStyle = {
      left: 107 * a,
      width: 70 * a,
      bottom: (102 * a + this.getTemperature(value) * a)
    };
    return (
      <div className="temperature" style={styles}>
        <div className="tips" style={tipStyle}>
          <div>{tips[3] || 'Hot'}</div>
          <div>{tips[2] || 'Cosy'}</div>
          <div>{tips[1] || 'Cold'}</div>
          <div>{tips[0] || 'Freezing'}</div>
        </div>
        <img className="arrow" src={arrow} style={arrowStyle}/>
      </div>
    );
  }
}

Temperature.propTypes = {
  height: PropTypes.number,
  tips: PropTypes.array,
  value: PropTypes.number
}

export default Temperature;