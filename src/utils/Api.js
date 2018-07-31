const KEY = "af8fbb26f5195b889158bccd9ff06ae1";
const URL = "http://api.openweathermap.org/data/2.5/weather";

class Api {
  async getForecast(city) {
    const query = await fetch(`${URL}?q=${city}&appid=${KEY}`);
    const data = await query.json();
    return data;
  }; 
}

export default new Api;