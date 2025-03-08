const print = (message) => {
  document.getElementById("output").value += `${typeof message === "string" ? message : JSON.stringify(message, null, 2)}
`;
};


const getCityCoords = async (cityName) => {
  try {

    const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&language=en&format=json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ key: "value" }),
    });


    if (!response.ok) {
      throw new Error(`Could not find location: status code`);
    }
    const jsonResponse = await response.json();

    const { latitude, longitude } = jsonResponse.results?.[0];
    return { latitude, longitude };
  } catch (e) {
    window.alert(e.message);
  }
};
const getForecast = async ({ latitude, longitude }) => {
  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min&forecast_days=1`);
    if (!response.ok) {
      throw new Error("Could not find forecast");
    }
    const jsonResponse = await response.json();

    const max = jsonResponse.daily.temperature_2m_max[0];
    const min = jsonResponse.daily.temperature_2m_min[0];
    const average = (max + min) / 2;
    print({ average: average + jsonResponse.daily_units.temperature_2m_max });
  } catch (e) {
    window.alert(e.message);
  }
};


window.document.getElementById("pocasi").addEventListener("click", async () => {
  const mesto = "Praha";

  const cityCoords = await getCityCoords(mesto);
  print(cityCoords);

  const forecast = await getForecast(cityCoords);
});
