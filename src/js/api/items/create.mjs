import { API_URL } from "../constants.mjs";
import { tokenAuth } from "../tokenFetch.mjs";

const action = "/listings";
const method = "post";
/**
 * Function to create a new listing 
 * @param {string} listData 
 * @returns new post
 */
export async function createListing (listData) {
  const createListingURL = `${API_URL}${action}`;

  const response = await tokenAuth (createListingURL, {
    method,
    body: JSON.stringify(listData)
    
  })

  return await response.json();
}

