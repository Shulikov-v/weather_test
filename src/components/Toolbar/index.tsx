import React, { useState, useRef, useEffect } from 'react';
import Autocomplete from "react-google-autocomplete";
import { useTranslation } from 'react-i18next';

import { Button, Select } from 'antd';


const { Option } = Select

type ToolbarProps = {
  onAdd: Function,
  lang: string,
  onSwitchLang?: Function
}

export const Toolbar: React.FunctionComponent<ToolbarProps> = ({onAdd, onSwitchLang, lang}: ToolbarProps) => {
  const { t, i18n } = useTranslation();
  const [foundCity, setFoundCity] = useState<string>('');
  const inputEl = useRef<HTMLInputElement>(null);

  const handleAddCityToForecast = () => {
    console.log(foundCity, inputEl.current)
    if (inputEl && inputEl.current) {
      inputEl.current.value = '';
    }
    if (foundCity && onAdd) {
      onAdd(foundCity);
    }
  }
  const handleSwitchLang = (value: string) => {
    i18n.changeLanguage(value);
    onSwitchLang && onSwitchLang(value)
  }

  useEffect(() => { console.log('lang changed -->', lang, inputEl)}, [lang])

  return (
  <>
  <div style={{padding: 20, display: 'flex'}}>
    <div style={{flexGrow: 1, display: 'flex'}}>
      <Autocomplete
        ref={inputEl}
        className="ant-input"
        apiKey="AIzaSyBqkNUurxy0KyBHibiy9aR5Xhf3MrUxvW4"
        language="en"
        placeholder={t('Enter a location')}
        onPlaceSelected={(place) => {
          const { address_components } = place;
          let address = '';
          if (address_components) {
            address = address_components.reduce((addr, component) => {
              if (component.types.includes("locality")) {
                addr = addr + component.short_name
              }
              if (component.types.includes("country")) {
                addr = addr + ',' + component.short_name
              }
              return addr
            }, '')
            setFoundCity(address);
          }
        }}
        style={{width: 250, height: 40}}
      />
      <Button type="primary" style={{height: 40, marginLeft: 20, minWidth: 112}} onClick={handleAddCityToForecast}>{t('Add')}</Button>
    </div>
    <div>
      <Select style={{width: 71, height: 40}} onChange={handleSwitchLang} value={lang}>
        <Option value="en">EN</Option>
        <Option value="uk">UA</Option>
        <Option value="ru">RU</Option>
      </Select>
    </div>
  </div>
  </>
)}