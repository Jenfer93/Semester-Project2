import { API_URL } from "../constants.mjs";
import { tokenAuth } from "../tokenFetch.mjs";
import { load, save } from "../../storage/index.mjs";
import { readProfile } from "../profile/profile.mjs";

const action = "/listings";
const method = "POST";

export async function placeBid(id, amount) {
  const url = `${API_URL}${action}/${id}/bids`;


  const response = await tokenAuth(url, {
    method, 
    body: JSON.stringify({amount: amount})

  });

  if (response.ok) {
    location.reload();
    return true;
  } else {
    alert(response.error)
  }

  throw new Error(response);
}