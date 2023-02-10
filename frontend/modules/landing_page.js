import config from "../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description
  let cities = await fetchCities();

  //Updates the DOM with the cities
  cities.forEach((key) => {
    addCityToDOM(key.id, key.city, key.description, key.image);
  });
}

//Implementation of fetch call
async function fetchCities() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data
  try {
    let x = `${config.backendEndpoint}/cities`
    console.log(x);
    let a = await fetch(x)
    let data = await a.json();
    console.log(data);
    return data;
  } catch (error) {
    return null;
  }
}

//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM
  let con = document.getElementById("data");
  let div = document.createElement("div")
  div.setAttribute("class", "col-12 col-sm-6 col-lg-3 mb-4")
  let a = document.createElement("a");
  // a.setAttribute("class", "tile")
  a.setAttribute("id", id)
  a.setAttribute("href", `./pages/adventures/?city=${id}`)
  let div1 = document.createElement("div")
  div1.setAttribute("class", "tile")
  let img = document.createElement("img");
  img.setAttribute("src", image)
  let div2 = document.createElement("div");
  div2.setAttribute("class" ,"tile-text")
  let h5 = document.createElement("h5");
  h5.textContent = city;
  let p = document.createElement("p");
  p.textContent = description;
  div2.append(h5, p);
  div1.append(img, div2);
  a.append(div1)
  div.append(a)
  con.append(div);
}

export { init, fetchCities, addCityToDOM };
