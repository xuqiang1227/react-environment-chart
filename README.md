# React Environment charts
[![npm](https://img.shields.io/npm/v/react-environment-chart.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/react-environment-chartl)
![react-version](https://img.shields.io/badge/react%20version-15.0.0%20or%20later-61dafb.svg)
![license-mit](https://img.shields.io/badge/license-MIT-42cd00.svg)


### Using

`npm i react-environment-chart --save`

```javascript
import ReactEnvironmentChart from 'react-environment-chart';
```

### Intensity
* height: number, option. specify intensity size; default: 363
* rotate: number, option. arrow value.
* using
  ```javascript
  import {Intensity} from 'react-environment-chart';

  <Intensity />
  ```

### PM2.5
* height: number, option. specify pm size; default: 373
* value: number. pm2.5 value
* using
  ```javascript
  import {PM} from 'react-environment-chart';
  <PM value={20} />
  ```