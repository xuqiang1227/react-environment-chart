import React, {PureComponent} from 'react';
import './humidity.css';

export default class extends PureComponent {
  constructor() {
    super(...arguments);
  }

  render() {
    return (
      <div className="normal">
        <div className="dry">dry</div>
        <div className="comfort">comfort</div>
        <div className="wet">wet</div>
        <div className="humidity"></div>
      </div>
    );
  }
}