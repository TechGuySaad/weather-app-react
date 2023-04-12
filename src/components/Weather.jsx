import { useState, useEffect } from "react";
import "./weather.css"





export default function Weather(){
    const [data, setData] = useState([]);
    const [inputRegion,setRegion] = useState('Peshawar')

    function handleRegionChange(event){
        setRegion(event.target.value);
    }

    const apiKey = '333a47c28700024cb57760c88b0762f9';
    let region = inputRegion

    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+region+'&appid='+apiKey)
          .then(response => response.json())
          .then(data => setData(data))
          .catch(error => console.error(error));
      },[inputRegion]);


      var temperature = data?.main?.temp;
    //   var iconCode = data?.weather[0]?.icon;
    //   var iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

    return (<>
        <div className="card">
            <p>Enter City Name</p>
            <input className="region-input" type="text" value={inputRegion} onChange={handleRegionChange} />
            {/* {iconUrl && <img src={iconUrl} alt="icon"></img>} */}
            <h1>{region}</h1>
            <h2>{inputRegion && (temperature-273.15).toFixed(2)}°C </h2>
        </div>
    </>)

}

