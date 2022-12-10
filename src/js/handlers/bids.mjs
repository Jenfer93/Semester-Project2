import { placeBid } from "../api/items/bids.mjs";

export function placeBidListener(id, amount){

  const form = document.querySelector("#bidForm");
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  let bidId = params.get("id");

  if(form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const bid = event.target.amount.value; 


      placeBid(bidId, Number(bid)); 
      location.reload();
    }) 
  }
     
}