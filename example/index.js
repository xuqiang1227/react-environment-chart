import React from 'react';
import {render} from 'react-dom';
import Test, {PM, Humidity, Electricity, Tvoc, Temperature} from '../src/EnvironmentChart.jsx';
// import Test, {PM, Humidity, Electricity, Tvoc, Temperature} from '../dist/EnvironmentChart.js';

render(<Tvoc height={176} value={0.6}/>, document.getElementById('app'));
