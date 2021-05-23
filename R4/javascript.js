function showTable(params) {
  console.log(`params`, params);
  console.log(`params.query`, params.query);
  console.log(`params.request.success`, params.success);
}
var requestOptions = {
  method: "GET",
  redirect: "follow",
};
// {"request":{"type":"City","query":"New York, United States of America","language":"en","unit":"m"},"location":{"name":"New York","country":"United States of America","region":"New York","lat":"40.714","lon":"-74.006","timezone_id":"America\/New_York","localtime":"2021-05-23 14:56","localtime_epoch":1621781760,"utc_offset":"-4.0"},"current":{"observation_time":"06:56 PM","temperature":29,"weather_code":116,"weather_icons":["https:\/\/assets.weatherstack.com\/images\/wsymbols01_png_64\/wsymbol_0002_sunny_intervals.png"],"weather_descriptions":["Partly cloudy"],"wind_speed":13,"wind_degree":320,"wind_dir":"NW","pressure":1013,"precip":0,"humidity":42,"cloudcover":75,"feelslike":30,"uv_index":7,"visibility":16,"is_day":"yes"}}
fetch(
  "http://api.weatherstack.com/current?access_key=70c1c1d8727ccff07c7e3713072f4583&query= New York",
  requestOptions
)
  .then((response) => response.json())
  .then((result) => {
    console.log(`result.success`, result.success);

    if (result.success == false) {
      document.getElementById(
        "table-response"
      ).innerHTML = `<h1> The https://weatherstack.com api application doesnt work,keep trying | la aplicacion de https://weatherstack.com no anda, siga intentando</h1>`;
    } else {
      console.log(result);
      document.getElementById("table-response").innerHTML =
        document.getElementById("table-response").innerHTML +
        ` 
      <table>
        <tr >
          <th>request </th>
          <th>value </th>
        </tr>
        <tr>
          <td>language</td>
          <td>${result.request.language}  </td>  +
        </tr>        
        <tr>
          <td>query</td>
          <td>${result.request.query}  </td>  +
        </tr>        
        <tr>
         <td>type</td>
          <td>${result.request.type}  </td>  +
        </tr>        
        <tr>
          <td>language</td>
          <td>${result.request.language}  </td>  +
        </tr>        
        <td> name </name>
        <td>${result.request.name}</td>          
        </tr>
    `;
    }
  })
  .catch((error) => console.log("error", error));

//   Object { request: {…}, location: {…}, current: {…} }
// ​
// current: Object { observation_time: "07:28 PM", temperature: 31, weather_code: 113, … }
// ​​
// cloudcover: 0
// ​​
// feelslike: 32
// ​​
// humidity: 36
// ​​
// is_day: "yes"
// ​​
// observation_time: "07:28 PM"
// ​​
// precip: 0
// ​​
// pressure: 1013
// ​​
// temperature: 31
// ​​
// uv_index: 7
// ​​
// visibility: 16
// ​​
// weather_code: 113
// ​​
// weather_descriptions: Array [ "Sunny" ]
// ​​​
// 0: "Sunny"
// ​​​
// length: 1
// ​​​
// <prototype>: Array []
// ​​
// weather_icons: Array [ "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png" ]
// ​​​
// 0: "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
// ​​​
// length: 1
// ​​​
// <prototype>: Array []
// ​​
// wind_degree: 310
// ​​
// wind_dir: "NW"
// ​​
// wind_speed: 15
// ​​
// <prototype>: Object { … }
// ​
// location: Object { name: "New York", country: "United States of America", region: "New York", … }
// ​​
// country: "United States of America"
// ​​
// lat: "40.714"
// ​​
// localtime: "2021-05-23 15:28"
// ​​
// localtime_epoch: 1621783680
// ​​
// lon: "-74.006"
// ​​
// name: "New York"
// ​​
// region: "New York"
// ​​
// timezone_id: "America/New_York"
// ​​
// utc_offset: "-4.0"
// ​​
// <prototype>: Object { … }
// ​
// request: Object { type: "City", query: "New York, United States of America", language: "en", … }
// ​​
// language: "en"
// ​​
// query: "New York, United States of America"
// ​​
// type: "City"
// ​​
// unit: "m"
