// PRINT THE COUNTRY WHICH USES US DOLLARS AS CURRENCY
const get_country = () => {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
  );
  xhr.responseType = "json";
  xhr.onload = () => {
    const print_country = xhr.response;
    let country_name = print_country
      .filter(
        (details) => details.currencies[0].name === "United States dollar"
      )
      .map((details) => details.name);
    console.log(country_name);
  };
  xhr.send();
};
get_country();
