import { API_URL } from "../constants.mjs";
import { tokenAuth } from "../tokenFetch.mjs";

const action = "/listings";
const method = "delete";

/**
 * Function to remove listing
 * @param {number} id 
 * @returns 
 */
export async function removeListing (id) {

  if(!id) {
    throw new Error("Requires ID");
  }
  const deleteListingURL = `${API_URL}${action}/${id}`;

  const response = await tokenAuth (deleteListingURL, {
    method
  })

  const listing = await response.json();
  
  return await response.json();
}