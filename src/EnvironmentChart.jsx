import Pm from './pm/Pm.jsx';
import _Intensity from './intensity/Intensity.jsx';
import _Humidity from './humidity/Humidity.jsx';
import _Ele from './electricity/Electricity.jsx';

let EnvironmentChart = {};
EnvironmentChart.PM = Pm;
EnvironmentChart.Electricity = _Ele;
EnvironmentChart.Humidity = _Humidity;
EnvironmentChart.Intensity = _Intensity;


export const PM = Pm;
export const Electricity = _Ele;
export const Intensity = _Intensity;
export const Humidity = _Humidity;
export default EnvironmentChart;