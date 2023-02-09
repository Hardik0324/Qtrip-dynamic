
import config from "../conf/index.js";

//Implementation to extract city from query params
function getCityFromURL(search) {
  // TODO: MODULE_ADVENTURES
  // 1. Extract the city id from the URL's Query Param and return it
  let arr = search.split("=");
  // console.log(arr[1]);
  return arr[1];
}

//Implementation of fetch call with a paramterized input based on city
async function fetchAdventures(city) {
  // TODO: MODULE_ADVENTURES
  // 1. Fetch adventures using the Backend API and return the data
  try {
    let url = `${config.backendEndpoint}/adventures?city=${city}` 
    // console.log(url)
    let adv = await fetch(url)
    let data = await adv.json();
    console.log(data);
    return data;
  } catch (error) {
    return null;
  }
}

//Implementation of DOM manipulation to add adventures for the given city from list of adventures
function addAdventureToDOM(adventures) {
  // TODO: MODULE_ADVENTURES
  // 1. Populate the Adventure Cards and insert those details into the DOM
  for(let i=0; i<adventures.length; i++){
    let div1 = document.createElement("div");
    div1.setAttribute("class", "col-6 col-sm-6 col-md-3 col-lg-3 mb-4");
    let a = document.createElement("a");
    let url = `${config.backendEndpoint}/detail?adventure=${adventures[0].id}`
    a.setAttribute("href", url);
    a.setAttribute("id", adventures[0].id)
    let div2 = document.createElement("div");
    div2.setAttribute("class", "activity-card");
    let img = document.createElement("img");
    img.setAttribute("src", adventures[i].image)
    img.setAttribute("class", "activity-card-image")
    let div3 = document.createElement("div");
    div3.setAttribute("class", "adventure-detail-card");
    let div4 = document.createElement("div");
    div4.setAttribute("style", "display:flex; justify-content:space-between");
    let p1 = document.createElement("p");
    p1.textContent = adventures[i].name;
    let p2 = document.createElement("p");
    p2.textContent = adventures[i].costPerHead;
    let div5 = document .createElement("div");
    div5.setAttribute("style", "display:flex; justify-content:space-between");
    let p3 = document.createElement("p");
    p3.textContent = "Duration";
    let p4 = document.createElement("p");
    p4.textContent = adventures[i].duration;
    div5.append(p3, p4);
    div4.append(p1, p2);
    div3.append(div4, div5);
    div2.append(img, div3);
    a.append(div2);
    div1.append(a);
    let div = document.getElementById("data");
    div.append(div1);
  }
}

document.getElementById("click").onclick = async()=>{
  let b = window.location.search;
  let arr = b.split("=");
  let city = arr[1];
  let url = `${config.backendEndpoint}/adventures/new` 
  try {
    let a = await fetch(url, {
      method: "post",
      body: JSON.stringify({"city": city}),
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    })
    let data = await a.json();
    console.log(data);
  } catch (error) {
    console.log(null);
  }
}

//Implementation of filtering by duration which takes in a list of adventures, the lower bound and upper bound of duration and returns a filtered list of adventures.
function filterByDuration(list, low, high) {
  // TODO: MODULE_FILTERS
  // 1. Filter adventures based on Duration and return filtered list

}

//Implementation of filtering by category which takes in a list of adventures, list of categories to be filtered upon and returns a filtered list of adventures.
function filterByCategory(list, categoryList) {
  // TODO: MODULE_FILTERS
  // 1. Filter adventures based on their Category and return filtered list

}

// filters object looks like this filters = { duration: "", category: [] };

//Implementation of combined filter function that covers the following cases :
// 1. Filter by duration only
// 2. Filter by category only
// 3. Filter by duration and category together

function filterFunction(list, filters) {
  // TODO: MODULE_FILTERS
  // 1. Handle the 3 cases detailed in the comments above and return the filtered list of adventures
  // 2. Depending on which filters are needed, invoke the filterByDuration() and/or filterByCategory() methods


  // Place holder for functionality to work in the Stubs
  return list;
}

//Implementation of localStorage API to save filters to local storage. This should get called everytime an onChange() happens in either of filter dropdowns
function saveFiltersToLocalStorage(filters) {
  // TODO: MODULE_FILTERS
  // 1. Store the filters as a String to localStorage

  return true;
}

//Implementation of localStorage API to get filters from local storage. This should get called whenever the DOM is loaded.
function getFiltersFromLocalStorage() {
  // TODO: MODULE_FILTERS
  // 1. Get the filters from localStorage and return String read as an object


  // Place holder for functionality to work in the Stubs
  return null;
}

//Implementation of DOM manipulation to add the following filters to DOM :
// 1. Update duration filter with correct value
// 2. Update the category pills on the DOM

function generateFilterPillsAndUpdateDOM(filters) {
  // TODO: MODULE_FILTERS
  // 1. Use the filters given as input, update the Duration Filter value and Generate Category Pills

}
export {
  getCityFromURL,
  fetchAdventures,
  addAdventureToDOM,
  filterByDuration,
  filterByCategory,
  filterFunction,
  saveFiltersToLocalStorage,
  getFiltersFromLocalStorage,
  generateFilterPillsAndUpdateDOM,
};
