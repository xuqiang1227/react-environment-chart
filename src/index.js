import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Humidity from './humidity/Humidity';

ReactDOM.render(<Humidity />, document.getElementById('root'));
registerServiceWorker();
