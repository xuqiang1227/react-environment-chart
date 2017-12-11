import Pm from './pm/Pm.jsx';
import _Intensity from './intensity/Intensity.jsx';
import _Humidity from './humidity/Humidity.jsx';
import _Ele from './electricity/Electricity.jsx';
import tvoc from './tvoc/Tvoc.jsx';
import _Temperature from './temperature/Temperature.jsx';

let EnvironmentChart = {};
EnvironmentChart.PM = Pm;
EnvironmentChart.Electricity = _Ele;
EnvironmentChart.Humidity = _Humidity;
EnvironmentChart.Intensity = _Intensity;
EnvironmentChart.Temperature = _Temperature;
EnvironmentChart.Tvoc = tvoc;


export const PM = Pm;
export const Electricity = _Ele;
export const Intensity = _Intensity;
export const Humidity = _Humidity;
export const Tvoc = tvoc;
export const Temperature = _Temperature;
export default EnvironmentChart;