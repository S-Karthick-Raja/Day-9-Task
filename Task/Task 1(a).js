// GET ALL THE COUNTRIES FROM ASIA CONTINENT / REGION USING FILTER FUNCTION
const get_countries = () => {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
  );
  xhr.responseType = "json";
  xhr.onload = () => {
    const print_countries = xhr.response;
    let countries = print_countries
      .filter((details) => details.region === "Asia")
      .map((details) => details.name);
    console.log(countries);
  };
  xhr.send();
};
get_countries();
