# React Environment charts
[![npm](https://img.shields.io/npm/v/react-environment-chart.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/react-environment-chart)
[![NPM downloads](http://img.shields.io/npm/dm/react-environment-chart.svg?style=flat-plastic)](https://npmjs.org/package/react-environment-chart)

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

![Intensity](https://static.oschina.net/uploads/img/201712/11114018_tLP3.png)

### PM2.5
* height: number, option. specify pm size; default: 373
* value: number. pm2.5 value
* using
  ```javascript
  import {PM} from 'react-environment-chart';
  <PM value={20} />
  ```
* eg:

![PM2.5](https://static.oschina.net/uploads/img/201712/11114042_Rfim.png)

### Humidity
* height: number, option. specify humidity size; default: 252
* value: number. humidity value
* using
  ```javascript
  import {Humidity} from 'react-environment-chart';
  <Humidity value={20} />
  ```
* eg:

![Humidity](https://static.oschina.net/uploads/img/201712/11114055_eaXk.png)

### Electricity
* height: number, option. specify electricity size; default: 373
* value: number. electricity value
* using
  ```javascript
  import {Electricity} from 'react-environment-chart';
  <Electricity value={20} />
  ```
* eg:

![Electricity](https://static.oschina.net/uploads/img/201712/11114115_WR0q.png)

### Tvoc
* height: number, option. specify tvoc size; default: 332
* value: number, option. value is between [0, 1]
* using
  ```javascript
  import {Tvoc} from 'react-environment-chart';
  <Tvoc />
  ```
* eg:

![Tvoc](https://static.oschina.net/uploads/img/201712/11114105_lkLW.png)

### Temperature
* height: number, option. specify temperature size; default: 556
* tips: array, option. specity left text; default: ['天冷', '加衣服', '温度舒适', '防暑']
* using
  ```javascript
  import {Temperature} from 'react-environment-chart';
  <Temperature />
  ```
* eg:

![Temperature](https://static.oschina.net/uploads/img/201712/11114124_PwLJ.png)