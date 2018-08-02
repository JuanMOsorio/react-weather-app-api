const KEY = "af8fbb26f5195b889158bccd9ff06ae1";
const URL = "http://api.openweathermap.org/data/2.5/weather";

class Api {
  async getForecast(city) {
    const query = `${URL}?q=${city}&appid=${KEY}&units=metric`;
    const data = fetch(query)
    .then(forecast => forecast.json())
    .then(data => data);
    return data

  }
}

export default new Api();