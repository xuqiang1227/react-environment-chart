import React from 'react';
import {render} from 'react-dom';
import Test, {PM, Humidity, Electricity, Tvoc, Temperature} from '../src/EnvironmentChart.jsx';
// import Test, {PM, Humidity, Electricity, Tvoc, Temperature} from '../dist/EnvironmentChart.js';

render(<Electricity value={44.8} height={278}/>, document.getElementById('app'));
