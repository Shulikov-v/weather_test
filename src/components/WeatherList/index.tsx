import React from 'react';

import { WeatherCard } from '../WeatherCard'

interface IWeatherList {
  weathers: any[];
}

export const WeatherList: React.FunctionComponent<IWeatherList> = ({weathers} : IWeatherList) => (
  <>
  <div style={{padding: '0 20px', display: 'flex', flexWrap: 'wrap'}}>
    { weathers && weathers.map(weather => (
      <WeatherCard key={weather.id} weather={weather} />
    ))}
    {/* <WeatherCard />
    <WeatherCard />
    <WeatherCard /> */}
  </div>
  </>
)