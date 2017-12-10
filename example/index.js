import React from 'react';
import {render} from 'react-dom';
import Test, {PM} from '../dist/EnvironmentChart';

render(<Test.Intensity rotate={25}/>, document.getElementById('app'));
