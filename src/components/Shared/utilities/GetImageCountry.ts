import { Country } from "../interfaces";

let countries: Country = {
    Argentina: {
      name: "Argentina",
      image: "http://127.0.0.1:5173/src/assets/flags/argentina-flag.png",
    },
  };
  
  export function getImageCountry(country: string): string {
    return countries[country].image;
  }