import { API_URL } from "../constants.mjs";
import { tokenAuth } from "../tokenFetch.mjs";
import { load } from "../../storage/index.mjs";

const action = "/profiles";
const author = "?_seller=true&_count=true";

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

  return await response.json();
}


export async function profileInfo() {
const userName = document.querySelector("#userName");
const userAvatar = document.querySelector(".avatar");
const userCredits = document.querySelector(".credits");
const userBids = document.querySelector(".nrBids");
const listingImg = document.querySelector(".listingImg");

const userData = load("profile");
const { name, credits} = userData;
const avatar = load("avatar");
const bidCount = load("_count");

userName.innerText = name; 
userAvatar.src = avatar; 
userCredits.innerText = credits;
if(bidCount){
  userBids.innerText = bidCount;
} else {
  userBids.innerText = "0"
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