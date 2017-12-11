import React from 'react';
import {render} from 'react-dom';
import Test, {PM, Humidity, Electricity, Tvoc} from '../src/EnvironmentChart.jsx';

render(<Tvoc value={8.5}/>, document.getElementById('app'));
