import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Humidity from './humidity/Humidity';
import Intensity from './intensity/Intensity';
// import './test.css';

ReactDOM.render(<Intensity className='test'/>, document.getElementById('root'));
registerServiceWorker();
