import React, {PureComponent} from 'react';
import classNames from 'classnames';
import './intensity.css';
import arrow from './arrow.png';

export default class extends PureComponent {

  render() {
    const _class = this.props.className || '';
    return(
      <div className={classNames(_class, "intensity")}>
        <img className="arrow" src={arrow} />
      </div>
    );
  }
}