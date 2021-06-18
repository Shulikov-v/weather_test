import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
// import { fetchCount } from './counterAPI';

export type WeatherLanguages = "en" | "ru" | "uk"

export interface ICity {
  name: string;
  id: string;
}

export interface IWeatherState {
  language: WeatherLanguages;
  cities: ICity[];
}

const initialState: IWeatherState = {
  language: "en",
  cities: [
    {
      name: "Cherkasy, UA",
      id: "710791",
    },
    {
      name: "Dnipro, UA",
      id: "710791",
    },
  ]
};

export const incrementAsync = createAsyncThunk(
  'weather/fetchWeather',
  async (amount: number) => {
    // const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    // return response.data;
  }
);

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setLanguage: (state: IWeatherState, action: PayloadAction<WeatherLanguages>) => {
      state.language = action.payload;
    },
    addCity: (state, action: PayloadAction<ICity>) => {
      state.cities.push(action.payload);
    },
    removeCity: (state, action: PayloadAction<ICity>) => {
      const tmpCities: ICity[] = [];
      state.cities.forEach(c => {
        if (c.id !== action.payload.id) {
          tmpCities.push(c)
        }
        }
      )
      state.cities = [...tmpCities]
    },
  },
});

export const { setLanguage, addCity, removeCity } = weatherSlice.actions;

export const selectLang = (state: RootState) => state.weather.language;
export const selectCities = (state: RootState) => state.weather.cities;

export default weatherSlice.reducer;
