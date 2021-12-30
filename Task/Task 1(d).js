// PRINT THE TOTAL POPULATION OF COUNTRIES USING REDUCE FUNCTION
const get_population = () => {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
  );
  xhr.responseType = "json";
  xhr.onload = () => {
    const print_population = xhr.response;
    let total_population = print_population.reduce(
      (initial_country, current_country) =>
        initial_country + current_country.population,
      0
    );
    console.log(total_population);
  };
  xhr.send();
};
get_population();
