import { API_URL } from "../constants.mjs";
import { tokenAuth } from "../tokenFetch.mjs";
import { load } from "../../storage/index.mjs";

const action = "/profiles"

/**
 * function to auth the user with the tokenFetch
 * @param { string } name
 * @returns
 */

export async function readProfile (name) {


  if(!name){
    throw new Error("Requires a name");
  }

  const profileURL = `${API_URL}${action}/${name}`;

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
const { name, credits } = userData;
const avatar = load("avatar");

userName.innerText = name; 
userAvatar.src = avatar; 
userCredits.innerText = credits;

}