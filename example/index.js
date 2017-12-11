import React from 'react';
import {render} from 'react-dom';
import Test, {PM, Humidity, Electricity} from '../src/EnvironmentChart.jsx';

render(<Electricity value={8.5}/>, document.getElementById('app'));
