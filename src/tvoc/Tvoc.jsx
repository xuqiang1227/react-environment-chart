import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './tvoc.css';

class Tvoc extends PureComponent {
  render() {
    const {
      height = 332
    } = this.props;
    const width = 58 * height / 332;
    const styles = {
      width: width + 50,
      height,
      backgroundSize: width,
      height
    };
    return (
      <div className="tvoc" style={styles}>
        <div className="tip" style={{height: height - 20}}>
          <div>high</div>
          <div>mid</div>
          <div>low</div>
        </div>
      </div>
    );
  }
}

Tvoc.propTypes = {
  height: PropTypes.number
}

export default Tvoc;