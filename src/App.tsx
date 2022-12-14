// Framework Imports
import React, { useState, useEffect} from 'react'

// Library Imports
import { GetPosition } from 'helpers/getPosition'
import { FetchWeather } from 'helpers/api'

// Component Imports
import Header from 'modules/Header/Header'
import CurrentWeather from 'modules/CurrentWeather/CurrentWeather'
import FutureWeather from 'modules/FutureWeather/FutureWeather'
import WeatherWrap from 'layouts/WeatherWrap/WeatherWrap'

// CSS Imports
import GlobalFonts from  'globalAssets/fonts/fonts'
import GlobalStyle from 'src/globalConfig/GlobalStyles'
import StyledApp from './StyledApp'

// Type Declarations
interface weather {
  current: {
    dt: number;
    feels_like: number;
    humidity: number;
    pressure: number;
    sunrise: number;
    sunset: number;
    temp: number;
    wind_deg: number;
    wind_speed: number;
    weather: Array<WeatherItem>
  },
  daily: Array<DailyItem>
}


interface WeatherItem {
  description: string;
}

interface DailyItem {
  dt: number;
  temp: {
    min: number;
    max: number;
  }
  weather: Array<weatherItem>;
}

interface weatherItem {
  description: string;
}

const App = () => {
  // State Declarations
  const [pos, setPos] = useState([])
  const [weather, setWeather] = useState<weather>({} as weather)

  // UseEffect to handle getting position and setting pos state.
  useEffect(() => {
    GetPosition(setPos)
  }, [])

  // UseEffect to watch state and refresh on change.
  useEffect(() => {
    pos.length && FetchWeather(pos[0], pos[1]).then(response => {
      setWeather(response.data)
    })
  }, [pos])

  return (
    <StyledApp>
      <GlobalFonts />
      <GlobalStyle />
      <Header />
      {
        Object.keys(weather).length > 0 ?
          <WeatherWrap>
            <CurrentWeather currentWeather={weather.current} dayWeather={weather.daily[0]}/>
            <FutureWeather dailyWeather={weather.daily} />
          </WeatherWrap>
          :
          <p>Loading</p>
      }
    </StyledApp>
  )
}

export default App
