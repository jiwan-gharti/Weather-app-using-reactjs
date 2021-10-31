import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import Weather from './app_component/weather1';


//api call = api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// const apiKey = "10ccd076ae03108008170f3613400108";

function App() {
  return (
    <div className="App">
        <Weather />
    </div>
  );
}

export default App;
