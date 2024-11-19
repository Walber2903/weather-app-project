import Image from "next/image";
import WeatherNavWidget from "./Components/WeatherNavWidget";
import Sunny from './Assets/sunny.png';
import Navigation from './Assets/navigation-north.png';
import CardInfo from "./Components/CardInfo";

export default function Home() {
  return (
    <div>
    <CardInfo />

    <div className="flex flew-row gap-2">


    
    <WeatherNavWidget 
      time="12:00"
      weatherIcon={Sunny}
      navigationIcon={Navigation}
      temperature="26"
      speed="3"
    />
    <WeatherNavWidget 
      time="12:00"
      weatherIcon={Sunny}
      navigationIcon={Navigation}
      temperature="26"
      speed="3"
    />
    <WeatherNavWidget 
      time="12:00"
      weatherIcon={Sunny}
      navigationIcon={Navigation}
      temperature="26"
      speed="3"
    />
    <WeatherNavWidget 
      time="12:00"
      weatherIcon={Sunny}
      navigationIcon={Navigation}
      temperature="26"
      speed="3"
    />
        <WeatherNavWidget 
      time="12:00"
      weatherIcon={Sunny}
      navigationIcon={Navigation}
      temperature="26"
      speed="3"
    />
    </div>
    </div>
  );
}
