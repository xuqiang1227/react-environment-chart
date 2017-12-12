import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './tvoc.css';
import arrow from './arrow.png';
class Tvoc extends PureComponent {
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
        <div className="tip" style={{height: height - 30 * a, fontSize: 14 * a}}>
          <div>high</div>
          <div>mid</div>
          <div>low</div>
          <img src={arrow} style={{width: 70 * a, bottom: (12 * a + value * (height - 36 * a))}} className="tvoc-arrow"/>
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