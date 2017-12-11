import React from 'react';
import {render} from 'react-dom';
import Test, {PM, Humidity} from '../src/EnvironmentChart.jsx';

render(<Humidity value={120}/>, document.getElementById('app'));
