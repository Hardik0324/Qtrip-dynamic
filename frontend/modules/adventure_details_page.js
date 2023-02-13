import config from "../conf/index.js";

//Implementation to extract adventure ID from query params
function getAdventureIdFromURL(search) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Get the Adventure Id from the URL
  let arr = search.split("=");
  // console.log(arr[1]);
  return arr[1];
}
//Implementation of fetch call with a paramterized input based on adventure ID
async function fetchAdventureDetails(adventureId) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Fetch the details of the adventure by making an API call
  try {
    let url = `${config.backendEndpoint}/adventures/detail?adventure=${adventureId}`
    let res = await fetch(url)
    let data = await res.json();
    console.log(data);
    // Place holder for functionality to work in the Stubs
    return data;
  } catch (error) {
    return null;
  }
}

//Implementation of DOM manipulation to add adventure details to DOM
function addAdventureDetailsToDOM(adventure) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the details of the adventure to the HTML DOM
  let name = document.getElementById("adventure-name");
  name.textContent = adventure.name;
  let sub = document.getElementById("adventure-subtitle");
  sub.textContent = adventure.subtitle;
  let img = document.getElementById("photo-gallery");
  let x = adventure.images;
  for(let i=0; i < x.length; i++){
    let div2 = document.createElement("div");
    let img1 = document.createElement("img");
    img1.setAttribute("src", adventure.images[i]);
    img1.setAttribute("class", "activity-card-image");
    div2.append(img1);
    img.append(div2);
  }
  let div3 = document.getElementById("adventure-content")
  div3.innerText = adventure.content;
}

//Implementation of bootstrap gallery component
function addBootstrapPhotoGallery(images) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the bootstrap carousel to show the Adventure images
  let div1 = document.getElementById("photo-gallery")
  div1.setAttribute("class" , "row mb-3 carousel slide")
  div1.setAttribute("data-bs-ride", "carousel")
  div1.innerHTML = `<div id="div2" class="carousel-inner">
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#photo-gallery" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#photo-gallery" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>`
  let div2 = document.getElementById("div2");
  for(let i=0; i<images.length; i++){
    if(i==0){
      let div3 = document.createElement("div");
      div3.setAttribute("class", "carousel-item active")
      let img = document.createElement("img")
      img.setAttribute("src", images[i]);
      img.setAttribute("class", "d-block w-100 activity-card-image");
      img.setAttribute("alt", "...");
      div3.append(img);
      div2.append(div3);
    }
    else{
      let div3 = document.createElement("div");
      div3.setAttribute("class", "carousel-item")
      let img = document.createElement("img")
      img.setAttribute("src", images[i]);
      img.setAttribute("class", "d-block w-100 activity-card-image");
      img.setAttribute("alt", "...");
      div3.append(img);
      div2.append(div3);
    }
  }
}

//Implementation of conditional rendering of DOM based on availability
function conditionalRenderingOfReservationPanel(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If the adventure is already reserved, display the sold-out message.

}

//Implementation of reservation cost calculation based on persons
function calculateReservationCostAndUpdateDOM(adventure, persons) {
  // TODO: MODULE_RESERVATIONS
  // 1. Calculate the cost based on number of persons and update the reservation-cost field

}

//Implementation of reservation form submission
function captureFormSubmit(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. Capture the query details and make a POST API call using fetch() to make the reservation
  // 2. If the reservation is successful, show an alert with "Success!" and refresh the page. If the reservation fails, just show an alert with "Failed!".
}

//Implementation of success banner after reservation
function showBannerIfAlreadyReserved(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If user has already reserved this adventure, show the reserved-banner, else don't

}

export {
  getAdventureIdFromURL,
  fetchAdventureDetails,
  addAdventureDetailsToDOM,
  addBootstrapPhotoGallery,
  conditionalRenderingOfReservationPanel,
  captureFormSubmit,
  calculateReservationCostAndUpdateDOM,
  showBannerIfAlreadyReserved,
};
