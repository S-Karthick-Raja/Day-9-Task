// PRINT THE FOLLOWING DETAILS NAME, CAPITAL, FLAG USING FOREACH FUNCTION
const get_countries_details = () => {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
  );
  xhr.responseType = "json";
  xhr.onload = () => {
    const print_countries_details = xhr.response;
    print_countries_details.forEach((details) =>
      console.log(
        "NAME =>",
        details.name,
        "CAPITAL =>",
        details.capital,
        "FLAG =>",
        details.flag
      )
    );
  };
  xhr.send();
};
get_countries_details();
