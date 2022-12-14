import { API_URL } from "../constants.mjs";
import { tokenAuth } from "../tokenFetch.mjs";
import { save } from "../../storage/index.mjs";

const action = "/listings";
const method = "POST";

export async function placeBid(id, amount) {
  const url = `${API_URL}${action}/${id}/bids`;


  const response = await tokenAuth(url, {
    method, 
    body: JSON.stringify({amount: amount})

  });

  const { user } = await response.json() 

  if (response.ok) {
    save("profile", user)
    const bidButton = document.querySelector("#bidButton");
    bidButton.innerText = "Bid placed";
    return await response.json();
  } else {
    alert(response.error)
  }

  throw new Error(response);
}