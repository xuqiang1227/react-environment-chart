import React from 'react';
import {render} from 'react-dom';
import Test, {PM, Humidity, Electricity, Tvoc, Temperature} from '../src/EnvironmentChart.jsx';

render(<Tvoc height={332} value={1}/>, document.getElementById('app'));
