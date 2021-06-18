import React, { useState, useEffect, useCallback } from "react";
import axios from 'axios';
import { useTranslation } from 'react-i18next';

import { useAsync } from "../../app/hooks"
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectCities, selectLang, setLanguage, WeatherLanguages, addCity, ICity } from './weatherSlice'
import { Toolbar } from '../../components/Toolbar'
import { WeatherList} from '../../components/WeatherList'


export const Weather: React.FC = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const cities = useAppSelector(selectCities);
  const lang = useAppSelector(selectLang);
  const [weathers, setWeathers] = useState<any[]>([])

  const { loading, result, error, execute } = useAsync( async () => {
    let tasks: any[] = []
    if (Array.isArray(cities) && cities.length > 0) {
      tasks = cities.map(c => axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${c.name}&appid=4fc4656ab17c53f995a23345a6c10d3c&units=metric`))
    }
    const resp = await Promise.all(tasks)
    return resp
  });
  
  useEffect(() => {
    if (Array.isArray(result)) {
      setWeathers([]);
      (result || []).forEach((item: { [key: string]: string } | {}) => {
        if ('data' in item) {
          setWeathers(state => [...state, JSON.parse(JSON.stringify(item.data))])
        }
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result])

  useEffect(() => {
    i18n.changeLanguage(lang);
    // execute()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    execute()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cities])

  const handleAddCityToForecast = useCallback((cityName: string) => {
    dispatch(addCity({ name: cityName} as ICity))
  }, [dispatch])

  const handleSwitchLang = useCallback((lang: string) => {
    dispatch(setLanguage(lang as WeatherLanguages))
  }, [dispatch])

  console.log('===', JSON.stringify(weathers));
  
  return (
    <>
      <Toolbar onAdd={handleAddCityToForecast} lang={lang} onSwitchLang={handleSwitchLang}></Toolbar>
      {loading && <p>{t('loading')}</p>}
      {!loading && error && <p>{t('Something went wrong')}</p>}
      {!loading && result && <WeatherList weathers={weathers} />}
    </>
  );
};
