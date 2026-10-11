
//free API on open-meteo.com (weather data), there is no need for key
//latitude and longitude removed, so we can ask for different areas based on coordinate:
const apiUrl = "https://api.open-meteo.com/v1/forecast?"
                + "latitude=[lat]&longitude=[lon]&hourly="
                +"temperature_2m,relative_humidity_2m,"
                +"precipitation_probability,precipitation,"
                +"wind_speed_10m,evapotranspiration"


//few coordinates, Lahti and Budapest(because Hungary is my home country):
const Lahti = [60.9827,25.6615]
const Budapest = [47.4984,19.0404]

//in javascript, fetching is kind of easy :
async function getData(coord) {
    const response = await fetch(apiUrl.replace("[lat]",coord[0]).replace("[lon]",coord[1]));
    const data = await response.json();
    setData(data);
}

//this can set the data on the website or app, but right now it just prints the raw data:
function setData(data){
    console.log(data);
}

getData(Budapest);
getData(Lahti);
