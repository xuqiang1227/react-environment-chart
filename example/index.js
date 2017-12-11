import React from 'react';
import {render} from 'react-dom';
import Test, {PM, Humidity, Electricity, Tvoc, Temperature} from '../src/EnvironmentChart.jsx';

render(<Temperature height={250}/>, document.getElementById('app'));
