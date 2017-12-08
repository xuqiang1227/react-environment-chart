React Environment charts, such as PM2.5 Temperature

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