import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Humidity from './humidity/Humidity';
import Intensity from './intensity/Intensity';

// ReactDOM.render(<Intensity height={100} rotate={100}/>, document.getElementById('root'));
// registerServiceWorker();

const ReactEnvironmentChart;
ReactEnvironmentChart.Intensity = Intensity;
ReactEnvironmentChart.Humidity = Humidity;

exports.ReactEnvironmentChart = ReactEnvironmentChart;
