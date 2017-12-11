import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './temperature.css';

class Temperature extends PureComponent {
  render() {
    const {
      height = 556,
      tips = []
    } = this.props;
    const width = 225 * height / 556;
    const styles = {
      width: width + 65,
      height,
      backgroundSize: width,
      height
    };
    const paddingTop = 40 * height / 556, paddingBottom = 100 * height / 556;
    const tipStyle = {
      paddingTop,
      paddingBottom,
      height: height - paddingBottom - paddingTop,
      fontSize: 14 * height / 556
    };
    return (
      <div className="temperature" style={styles}>
        <div className="tip" style={tipStyle}>
          <div>{tips[3] || '防暑'}</div>
          <div>{tips[2] || '温度舒适'}</div>
          <div>{tips[1] || '加衣服'}</div>
          <div>{tips[0] || '天冷'}</div>
        </div>
      </div>
    );
  }
}

Temperature.propTypes = {
  height: PropTypes.number,
  tips: PropTypes.array
}

export default Temperature;