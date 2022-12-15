import { removeListing } from "../api/items/delete.mjs";


export function removeListingListener() {
  const deleteButton = document.querySelector("#delete");

  deleteButton.addEventListener("click", () => {
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    let listingId = params.get("id");  
    removeListing(listingId);
      location.href="/pages/user/profile.html";
  })
};