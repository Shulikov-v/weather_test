import React from 'react';
import { AreaChart, Area, XAxis, Tooltip } from 'recharts';
import format from 'date-fns/format'
import { useTranslation } from 'react-i18next';

import './style.css'

export const WeatherCard: React.FunctionComponent<{weather: {[key: string]: any}}> = ({weather}: {weather: {[key: string]: any}}) => {
    const { t } = useTranslation();
  const {name, sys: {country}, weather: _weather, main: {temp, feels_like, pressure, humidity}, wind: {speed: wind_speed}, dt} = weather;
  const {main, icon} = _weather[0] || {};
  const data = [
    {
        "dt": 1623801600,
        "temp": 9.71,
        "feels_like": 4.22,
        "pressure": 1011,
        "humidity": 80,
        "dew_point": 6.43,
        "clouds": 0,
        "wind_speed": 6.66,
        "wind_deg": 258,
        "wind_gust": 9.24,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }
        ]
    },
    {
        "dt": 1623805200,
        "temp": 9.49,
        "feels_like": 3.96,
        "pressure": 1011,
        "humidity": 80,
        "dew_point": 6.22,
        "clouds": 0,
        "wind_speed": 6.65,
        "wind_deg": 259,
        "wind_gust": 9.13,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ]
    },
    {
        "dt": 1623808800,
        "temp": 9.31,
        "feels_like": 3.62,
        "pressure": 1012,
        "humidity": 80,
        "dew_point": 6.04,
        "clouds": 0,
        "wind_speed": 6.83,
        "wind_deg": 257,
        "wind_gust": 10.09,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ]
    },
    {
        "dt": 1623812400,
        "temp": 9.16,
        "feels_like": 3.32,
        "pressure": 1012,
        "humidity": 81,
        "dew_point": 6.07,
        "clouds": 0,
        "wind_speed": 7.05,
        "wind_deg": 255,
        "wind_gust": 10.1,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ]
    },
    {
        "dt": 1623816000,
        "temp": 9.48,
        "feels_like": 4,
        "pressure": 1012,
        "humidity": 81,
        "dew_point": 6.39,
        "clouds": 0,
        "wind_speed": 6.63,
        "wind_deg": 261,
        "wind_gust": 9.91,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ]
    },
    {
        "dt": 1623819600,
        "temp": 9.99,
        "feels_like": 4.59,
        "pressure": 1013,
        "humidity": 78,
        "dew_point": 6.34,
        "clouds": 1,
        "wind_speed": 6.51,
        "wind_deg": 266,
        "wind_gust": 9.6,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ]
    },
    {
        "dt": 1623823200,
        "temp": 10.56,
        "feels_like": 5.45,
        "pressure": 1013,
        "humidity": 74,
        "dew_point": 6.13,
        "clouds": 58,
        "wind_speed": 6.02,
        "wind_deg": 269,
        "wind_gust": 8.67,
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
            }
        ]
    },
    {
        "dt": 1623826800,
        "temp": 18.33,
        "feels_like": 14.99,
        "pressure": 1007,
        "humidity": 69,
        "dew_point": 12.55,
        "clouds": 68,
        "wind_speed": 5.89,
        "wind_deg": 284,
        "wind_gust": 8.05,
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
            }
        ]
    },
    {
        "dt": 1623830400,
        "temp": 11.15,
        "feels_like": 5.51,
        "pressure": 1014,
        "humidity": 66,
        "dew_point": 5.04,
        "clouds": 61,
        "wind_speed": 6.46,
        "wind_deg": 293,
        "wind_gust": 9.64,
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
            }
        ]
    },
    {
        "dt": 1623834000,
        "temp": 17.22,
        "feels_like": 12.85,
        "pressure": 1008,
        "humidity": 64,
        "dew_point": 10.36,
        "clouds": 68,
        "wind_speed": 6.45,
        "wind_deg": 295,
        "wind_gust": 9.77,
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
            }
        ]
    },
    {
        "dt": 1623837600,
        "temp": 17.78,
        "feels_like": 12.94,
        "pressure": 1008,
        "humidity": 59,
        "dew_point": 9.67,
        "clouds": 55,
        "wind_speed": 6.85,
        "wind_deg": 298,
        "wind_gust": 10.31,
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
            }
        ]
    },
    {
        "dt": 1623841200,
        "temp": 18.33,
        "feels_like": 13.71,
        "pressure": 1008,
        "humidity": 57,
        "dew_point": 9.67,
        "clouds": 51,
        "wind_speed": 6.54,
        "wind_deg": 295,
        "wind_gust": 9.46,
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
            }
        ]
    },
    {
        "dt": 1623844800,
        "temp": 18.33,
        "feels_like": 14.23,
        "pressure": 1009,
        "humidity": 57,
        "dew_point": 9.67,
        "clouds": 100,
        "wind_speed": 5.79,
        "wind_deg": 295,
        "wind_gust": 7.46,
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }
        ]
    },
    {
        "dt": 1623848400,
        "temp": 18.89,
        "feels_like": 15.57,
        "pressure": 1009,
        "humidity": 59,
        "dew_point": 10.71,
        "clouds": 100,
        "wind_speed": 5.09,
        "wind_deg": 291,
        "wind_gust": 5.18,
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }
        ]
    },
    {
        "dt": 1623852000,
        "temp": 18.89,
        "feels_like": 15.18,
        "pressure": 1009,
        "humidity": 58,
        "dew_point": 10.46,
        "clouds": 59,
        "wind_speed": 5.54,
        "wind_deg": 286,
        "wind_gust": 6.74,
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
            }
        ]
    },
    {
        "dt": 1623855600,
        "temp": 19.44,
        "feels_like": 16.31,
        "pressure": 1010,
        "humidity": 59,
        "dew_point": 11.23,
        "clouds": 72,
        "wind_speed": 5.03,
        "wind_deg": 281,
        "wind_gust": 5.08,
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
            }
        ]
    },
    {
        "dt": 1623859200,
        "temp": 18.33,
        "feels_like": 14.41,
        "pressure": 1010,
        "humidity": 58,
        "dew_point": 9.93,
        "clouds": 78,
        "wind_speed": 5.63,
        "wind_deg": 278,
        "wind_gust": 6.3,
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
            }
        ]
    },
    {
        "dt": 1623862800,
        "temp": 17.78,
        "feels_like": 13.9,
        "pressure": 1010,
        "humidity": 58,
        "dew_point": 9.42,
        "clouds": 82,
        "wind_speed": 5.38,
        "wind_deg": 281,
        "wind_gust": 5.38,
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
            }
        ]
    },
    {
        "dt": 1623866400,
        "temp": 17.22,
        "feels_like": 13.76,
        "pressure": 1010,
        "humidity": 60,
        "dew_point": 9.4,
        "clouds": 5,
        "wind_speed": 4.78,
        "wind_deg": 275,
        "wind_gust": 4.84,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ]
    },
    {
        "dt": 1623870000,
        "temp": 15.56,
        "feels_like": 12.48,
        "pressure": 1010,
        "humidity": 60,
        "dew_point": 7.83,
        "clouds": 13,
        "wind_speed": 3.68,
        "wind_deg": 271,
        "wind_gust": 3.79,
        "weather": [
            {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02d"
            }
        ]
    },
    {
        "dt": 1623873600,
        "temp": 14.44,
        "feels_like": 11.4,
        "pressure": 1010,
        "humidity": 60,
        "dew_point": 6.78,
        "clouds": 56,
        "wind_speed": 3.27,
        "wind_deg": 240,
        "wind_gust": 3.43,
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04n"
            }
        ]
    },
    {
        "dt": 1623877200,
        "temp": 14.44,
        "feels_like": 11.17,
        "pressure": 1011,
        "humidity": 69,
        "dew_point": 8.83,
        "clouds": 71,
        "wind_speed": 4.29,
        "wind_deg": 199,
        "wind_gust": 4.32,
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04n"
            }
        ]
    },
    {
        "dt": 1623880800,
        "temp": 10.39,
        "feels_like": 6.49,
        "pressure": 1018,
        "humidity": 77,
        "dew_point": 6.54,
        "clouds": 75,
        "wind_speed": 4.43,
        "wind_deg": 198,
        "wind_gust": 4.41,
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04n"
            }
        ]
    },
    {
        "dt": 1623884400,
        "temp": 9.98,
        "feels_like": 6,
        "pressure": 1018,
        "humidity": 81,
        "dew_point": 6.87,
        "clouds": 80,
        "wind_speed": 4.65,
        "wind_deg": 226,
        "wind_gust": 4.99,
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04n"
            }
        ]
    }
]

  const handleTickFormat = (val: number): string => format(val*1000, 'HH:mm')
  return (
  <div className="weather-card">
    <div className="weather-card--header">
      <div className="weather-card--header-title">{name}, {country}</div>
      <div className="weather-card--header-date">{format(dt*1000, 'dd MMMM, HH:mm')}</div>
      <div className="weather-card--header-weather">
        <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt="" />
        <span>{main}</span>
      </div>
    </div>
    <div className="weather-card--chart">
    <AreaChart
      width={320}
      height={66}
      data={data}
      margin={{
        top: 0,
        right: 0,
        left: 0,
        bottom: 0
      }}
    >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#FF715B" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#FFF4F4" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#5B8CFF" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#FFF4F4" stopOpacity={0}/>
          </linearGradient>
        </defs>
      <XAxis dataKey="dt" height={14} axisLine={false} tickLine={false} tickFormatter={handleTickFormat} />
      <Tooltip labelFormatter={handleTickFormat}/>
      <Area type="monotone" dataKey="temp" stroke="none" fill="url(#colorUv)" />
    </AreaChart>
    </div>
    <div className="weather-card--info">
      <div className="weather-card--info-left">
        <div className="weather-card--info-temperature">
          <div className="weather-card--info-temperature-value">{temp}</div>
          <div className="weather-card--info-temperature-switcher"><span className="active">°C</span>|<span>°F</span></div>
        </div>
        <div className="weather-card--info-temperature-feels">{t('Feels like')}: {feels_like} °C</div>
      </div>
      <div className="weather-card--info-right">
        <div className="weather-card--info-wind">{t('Wind')}: <span>{wind_speed} m/s</span></div>
        <div className="weather-card--info-humidity">{t('Humidity')}: <span>{humidity}%</span></div>
        <div className="weather-card--info-pressure">{t('Pressure')}: <span>{pressure}Pa</span></div>
      </div>
    </div>
  </div>
)}