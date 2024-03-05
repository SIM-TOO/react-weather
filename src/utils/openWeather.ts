import OpenWeatherMap from "openweathermap-ts";

// openweather API 활용
const openWeather = new OpenWeatherMap({
    // openweathermap 홈페이지 api 발급 참조
    // apiKey: 발급받은API 입력
    apiKey: process.env.REACT_APP_API_KEY as string
})

openWeather.setUnits('metric');

export default openWeather;