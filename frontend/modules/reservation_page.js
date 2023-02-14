import config from "../conf/index.js";

//Implementation of fetch call to fetch all reservations
async function fetchReservations() {
  // TODO: MODULE_RESERVATIONS
  // 1. Fetch Reservations by invoking the REST API and return them
  try {
    let url = `${config.backendEndpoint}/reservations/`
    let res = await fetch(url);

    let data = await res.json();
    console.log(data);

    // Place holder for functionality to work in the Stubs
    return data;
  } catch (error) {
    return null;
  }
}

//Function to add reservations to the table. Also; in case of no reservations, display the no-reservation-banner, else hide it.
function addReservationToTable(reservations) {
  // TODO: MODULE_RESERVATIONS
  console.log(reservations)
  if(reservations.length === 0){
    let a = document.getElementById("reservation-table-parent");
    let b = document.getElementById("no-reservation-banner");
    a.setAttribute("style", "display : none");
    b.setAttribute("style", "display : block");
  }
  else{
    let a = document.getElementById("no-reservation-banner");
    let b = document.getElementById("reservation-table-parent");
    b.setAttribute("style", "display : block");
    a.setAttribute("style", "display : none");
  // 1. Add the Reservations to the HTML DOM so that they show up in the table
  for(let i=0; i<reservations.length; i++){
    let arr = reservations[i].date.split("-")
    reservations[i].date = `${((arr[2])*1).toString()}/${((arr[1])*1).toString()}/${arr[0]}`
    let tbody = document.getElementById("reservation-table")
    let arr1 = reservations[i].time.split(" ");
    console.log(arr1)
    let arr2 = arr1[4].split(":");
    // console.log(arr2);
    if(parseInt(arr2[0])>=12){
      arr2[0] = (parseInt(arr2[0]) - 12).toString();
      arr1[4] = `${arr2[0]}:${arr2[1]}:${arr2[2]} pm`
    }
    else{
      arr1[4] = `${arr2[0]}:${arr2[1]}:${arr2[2]} pm`
    }
    switch (arr1[1]) {
      case "Jan":
        arr1[1] = "January"
        break;
      case "Feb":
        arr1[1] = "February";
        break;
      case "Mar":
        arr1[1] = "March";
        break;
      case "Apr":
        arr1[1] = "April";
        break;
      case "May":
        arr1[1] = "May";
        break;
      case "Jun":
        arr1[1] = "June";
        break;
      case "Jul":
        arr1[1] = "July";
        break;
      case "Aug":
        arr1[1] = "August";
        break;
      case "Sep":
        arr1[1] = "September";
        break;
      case "Oct":
        arr1[1] = "October";
        break;
      case "Nov":
        arr1[1] = "November";
        break;
      case "Dec":
        arr1[1] = "December";
        break;
    }
    reservations[i].time = `${arr1[2]} ${arr1[1]} ${arr1[3]}, ${arr1[4]}`
    let url = `../detail/?adventure=${reservations[i].adventure}`
    tbody.innerHTML += `<tr>
                          <th scope="col">${reservations[i].id}</th>
                          <th scope="col">${reservations[i].name}</th>
                          <th scope="col">${reservations[i].adventureName}</th>
                          <th scope="col">${reservations[i].person}</th>
                          <th scope="col">${reservations[i].date}</th>
                          <th scope="col">${reservations[i].price}</th>
                          <th scope="col">${reservations[i].time}</th>
                          <th scope="col" id=${reservations[i].id}><a href=${url}><button class="reservation-visit-button">View Adventure</button></a></th>
                      </tr>`
  }
}
  //Conditionally render the no-reservation-banner and reservation-table-parent

  /*
    Iterating over reservations, adding it to table (into div with class "reservation-table") and link it correctly to respective adventure
    The last column of the table should have a "Visit Adventure" button with id=<reservation-id>, class=reservation-visit-button and should link to respective adventure page

    Note:
    1. The date of adventure booking should appear in the format D/MM/YYYY (en-IN format) Example:  4/11/2020 denotes 4th November, 2020
    2. The booking time should appear in a format like 4 November 2020, 9:32:31 pm
  */

}

export { fetchReservations, addReservationToTable };
