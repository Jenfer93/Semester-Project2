import { API_URL } from "../constants.mjs";
import { tokenAuth } from "../tokenFetch.mjs";

const action = "/listings";
const method = "POST";

export async function placeBid(id, amount) {
  const url = `${API_URL}${action}/${id}/bids`;


  const response = await tokenAuth(url, {
    method, 
    body: JSON.stringify({amount: amount})

  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response);
}