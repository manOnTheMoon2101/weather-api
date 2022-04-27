import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect,useState } from 'react'


import {FaTemperatureLow} from 'react-icons/fa';
import {BsWind} from 'react-icons/bs';



export default function Home() {

  

  const api = {
    key: "ce174fbf2e41b7c1844fe81b575f6f7e",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');

          
         
        });
    }
  }

    
  
  

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <>
      <main className={styles.back}>

        <div className={styles.box}>
          <input 
            type="text"
            className={styles.search}
            placeholder="Enter a City..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
          <p>Help:Cities with the same name?
            Just add , and country code.
            <br/>
            E.g. Wellington, ZA
          </p>
        </div>



{(typeof weather.main != "undefined") ? (


<div>
          
<div  className={styles.countryName}>

              
{weather.name}, {weather.sys.country}
            
</div>

<div className={styles.date}>
              
{dateBuilder(new Date())}
              
</div>









<div className={styles.content}>


<div className={styles.card}>


<p className={styles.degree}>{Math.round(weather.main.temp)}°c</p>


<div className={styles.desc}>


<p>{weather.weather[0].description}</p>
</div>


<div className={styles.boX}>


<div className={styles.windBox}>
  <p className={styles.windT}><FaTemperatureLow/></p>

  
<p className={styles.degreeMax}>H:{Math.round(weather.main.temp_max)}°c</p>
<br/>
<p className={styles.degreeMin}>L:{Math.round(weather.main.temp_min)}°c</p>

</div>



<div className={styles.degreeBox}>
<p className={styles.windT}><BsWind/></p>

<p className={styles.windSpeed}>{Math.round(weather.wind.speed)*3.6} km/h </p>
<br/>
<p className={styles.windAngle}>{Math.round(weather.wind.deg)}° deg</p>
</div>



</div>





</div>
</div>


</div>
) : ('')}


</main>




    </>
  );
  
}
