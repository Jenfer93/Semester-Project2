import { API_URL } from "../constants.mjs";
import { tokenAuth } from "../tokenFetch.mjs";
import { load } from "../../storage/index.mjs";

const action = "/profiles";
const author = "?_seller=true&_count=true&_bids=true&_listings=true";

/**
 * function to auth the user with the tokenFetch
 * @param { string } name
 * @returns
 */

export async function readProfile (name) {


  if(!name){
    throw new Error("Requires a name");
  }

  const profileURL = `${API_URL}${action}/${name}${author}`;

  const response = await tokenAuth (profileURL)

  if(response.ok){
    return await response.json();
  }

  throw new Error(response);
  
}

/**
 * Function to show the profile and the users information
 * 
 */

export async function profileInfo() {
const userName = document.querySelector("#userName");
const userAvatar = document.querySelector(".avatar");
const userCredits = document.querySelector(".credits");
const userListings = document.querySelector(".nrListings");
const userBids = document.querySelector(".userBids");
const listingsContainer = document.querySelector(".listings");

const { name } = load("profile");
const avatar = load("avatar");

const user = await readProfile(name)
//User information 
userName.innerText = name; 
userAvatar.src = avatar; 
userCredits.innerText = user.credits;

//Users bids
const bids = await readProfile(name + "/bids");
if (bids.length === 0) {
  userBids.innerText = "User has no bids"
} else {
  for (let i = 0; i < bids.length; i++){
    if(i === 3){
      break
    }
    userBids.innerHTML += 
    `<a href="/pages/items/item.html?id=${bids[i].listing.id}" class="btn btn-success m-2">
      ${bids[i].listing.title} <br>
      Bid made: $${bids[i].amount} </br>
      Ends: ${new Date(bids[i].created).toLocaleDateString()}
    </a>
    `
  }
}

//Users listings 
const listings = await readProfile(name + "/listings") 


  if (listings.length === null) {
    userListings.innerHTML = "0";
  } else {
    let sum = 0; 
      for (let i = 0; i < listings.length; i++) {
        userListings.innerHTML = sum = listings.length;
        let endsAt = new Date(listings[i].endsAt).toLocaleDateString()
        listingsContainer.innerHTML +=   
          `
            <a href="/pages/items/item.html?id=${listings[i].id}" class="small-card bg-secondary card m-3">
            <img class="mb-2 card-img-top" src="${listings[i].media[0]}" alt="listings picture">
            <div class="d-flex justify-content-between p-3">
              <div class="d-flex flex-column">
              <h5>${listings[i].title}</h5>
              </div>
            <span>Closes at: <br> ${endsAt}</span>
            </div>
            </a>`
      }
    }
  }




/**
 * Function to redirect a user to their edit profile page 
 */
 export function editAvatarRedirect(){
  const userData = load("profile");
  const { name } = userData;
  const editButton = document.querySelector(".editAvatar")
  editButton.addEventListener("click", () => editButton.href =`/pages/user/editavatar.html?name=${name}`);
}