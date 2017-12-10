# React Environment charts
[![npm](https://img.shields.io/npm/v/react-environment-chart.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/react-environment-chartl)
[![NPM downloads](http://img.shields.io/npm/dm/react-environment-chart.svg?style=flat-square)](https://npmjs.org/package/react-environment-chart)

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
* eg:
[Intensity](https://static.oschina.net/uploads/img/201712/10171113_DnD4.png)

### PM2.5
* height: number, option. specify pm size; default: 373
* value: number. pm2.5 value
* using
  ```javascript
  import {PM} from 'react-environment-chart';
  <PM value={20} />
  ```
* eg:
[PM2.5](https://static.oschina.net/uploads/img/201712/10171034_N6W0.png)