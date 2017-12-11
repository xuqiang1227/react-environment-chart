import Pm from './pm/Pm.jsx';
import _Intensity from './intensity/Intensity.jsx';
import _Humidity from './humidity/Humidity.jsx';

let EnvironmentChart = {};
EnvironmentChart.PM = Pm;
EnvironmentChart.Humidity = _Humidity;
EnvironmentChart.Intensity = _Intensity;


export const PM = Pm;
export const Intensity = _Intensity;
export const Humidity = _Humidity;
export default EnvironmentChart;