import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './tvoc.css';
import arrow from './arrow.png';
class Tvoc extends PureComponent {

  getValue(value, height) {
    const a = height / 332;
    const bt = 12 * a;
    const temp  = 92 * a;
    if(value <= 0.5) {
      return bt + value * temp / 0.5;
    }
    if(value <= 0.6) {
      return 2 * bt + temp + (value - 0.5) * temp / 0.1;
    }
    return 3 * bt + 2 * temp + (value - 0.6) * temp / 0.4;
  }
  
  render() {
    const {
      height = 332,
      value = 0
    } = this.props;
    const a = height / 332;
    const width = 58 * a;
    const styles = {
      width: width + 80 * a,
      height,
      backgroundSize: width,
      backgroundPositionX: 6 * a
    };
    return (
      <div className="tvoc" style={styles}>
        <div className="tip" style={{fontSize: 14 * a}}>
          <div>high</div>
          <div>mid</div>
          <div>low</div>
          <img src={arrow} style={{width: 70 * a, bottom: this.getValue(value, height)}} className="tvoc-arrow"/>
        </div>
      </div>
    );
  }
}

Tvoc.propTypes = {
  height: PropTypes.number,
  value: ({value}) => {
    if(typeof value !== 'number') {
      return new Error('value is must be number')
    }
    if(value > 1 || value < 0) {
      return new Error('value is between 0 and 1');
    }
  }
}

export default Tvoc;