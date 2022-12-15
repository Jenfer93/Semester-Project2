import { removeListing } from "../api/items/delete.mjs";


export function removeListingListener() {
  const deleteButton = document.querySelector("#delete");

  deleteButton.addEventListener("click", () => {
      removeListing(id);
      location.reload();
  })
};