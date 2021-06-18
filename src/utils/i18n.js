import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
const resources = {
    en: {
        translation: {
            "Add": "Add!",
            "Enter a location": "Enter a location",
            "Something went wrong": "Something went wrong",
            "Loading": "Loading",
            "Wind": "Wind",
            "Humidity": "Humidity",
            "Pressure": "Pressure",
            "Feels like": "Feels like",
        }
    },
    uk: {
        translation: {
            "Add": "Додати",
            "Enter a location": "Введить місцезнаходження",
            "Something went wrong": "Щось пішло не так",
            "Loading": "Завантаження",
            "Wind": "Вітер",
            "Humidity": "Вологість",
            "Pressure": "Тиск",
            "Feels like": "Відчуваеться",
        }
    },
    ru: {
        translation: {
            "Add": "Добавить",
            "Enter a location": "Введите местоположение",
            "Something went wrong": "Что-то пошло не так",
            "Loading": "Загрузка",
            "Wind": "Ветер",
            "Humidity": "Влажность",
            "Pressure": "Давление",
            "Feels like": "Ощущается",
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;