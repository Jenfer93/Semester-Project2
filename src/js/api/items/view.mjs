import { API_URL } from "../constants.mjs";

import { tokenAuth } from "../tokenFetch.mjs";

import * as templates from "../../templates/item.mjs";
import { load } from "../../storage/index.mjs";


const action = "/listings";
const author = "?_seller=true&_bids=true&_active=true&sort=created";
const sorted = "&sort=title&sortOrder=desc";

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

const token = load("token");

 export async function showListings() {
  if (!token){
    const listings = await viewListings();
    const container = document.querySelector("#showListings");
    templates.renderUnAuthListingTemplates(listings, container);
  } else{
  const listings = await viewListings();
  const container = document.querySelector("#showListings");
  templates.renderListingTemplates(listings, container);
  }
}

  /**
 * Function that shows a single listing
 */

   export async function showListing(){ 
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const id = params.get("id");

   const listing = await viewListing(id); 
   const seller = listing.seller.name;
   const {name} = load("profile");
   const bidContainer = document.querySelector("#bidContainer");
   const deleteEdit = document.querySelector("#deleteEdit");
   if(seller === name) {
      bidContainer.classList.add ("visually-hidden");
      deleteEdit.classList.remove ("visually-hidden");
    }

   const singleListingContainer = document.querySelector("#container");
   templates.renderListingTemplate(listing, singleListingContainer)
  } 


