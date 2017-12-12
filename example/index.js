import React from 'react';
import {render} from 'react-dom';
import Test, {PM, Humidity, Electricity, Tvoc, Temperature} from '../src/EnvironmentChart.jsx';
// import Test, {PM, Humidity, Electricity, Tvoc, Temperature} from '../dist/EnvironmentChart.js';

render(<Temperature height={278} value={20}/>, document.getElementById('app'));
