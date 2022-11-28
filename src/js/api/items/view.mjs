import { API_URL } from "../constants.mjs";

import { tokenAuth } from "../tokenFetch.mjs";

import * as templates from "../../templates/item.mjs";
import { isLoggedIn } from "../state.mjs";

const action = "/listings";
const author = "?_author=true";
const moreListings = "&limit=500";

/**
 * Function that gets all the listings
 * @returns listings
 */
 export async function viewListings () {

  const viewListingsURL = `${API_URL}${action}${author}`;

  const response = await tokenAuth (viewListingsURL)
  
  return await response.json();
};

/**
 * Function that gets one single listing based on ID
 * @param {number} id 
 * @returns single listing
 */

 export async function viewListing (id) {
  
  if(!id) {
    throw new Error("Requires ID");
  }

  const viewListingURL = `${API_URL}${action}/${id}${author}`;

  const response = await tokenAuth (viewListingURL)
  
  return await response.json();
}

/**
 * Function that shows the listings on the homepage
 */

 export async function showListings() {
  if (!isLoggedIn){
    const listings = await viewListings();
    const container = document.querySelector("#showListings");
    templates.renderUnAuthListingTemplates(listings, container);
  } else{
  const listings = await viewListings();
  const container = document.querySelector("#showListings");
  templates.renderListingTemplates(listings, container);
  }
}

