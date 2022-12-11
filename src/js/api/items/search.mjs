import { viewListings } from "./view.mjs";
import { renderListingTemplates, renderUnAuthListingTemplates } from "../../templates/item.mjs";
import { load } from "../../storage/index.mjs";

export async function searchListings () {
  try {
    const listings = await viewListings();
    const searchInput = document.querySelector("#search");
    const searchForm = document.querySelector("#searchForm");
    const container = document.querySelector("#showListings");

    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const searchedListings = listings.filter((listing) =>{
        const title = listing.title.toLowerCase();
        const searchValue = searchInput.value.toLowerCase();

        if (title.includes(searchValue)) {
          return true
        }
      })
      container.innerHTML = ""; 
      const token = load("token");
      if(!token) {
        renderUnAuthListingTemplates(searchedListings, container)
      } else{
        renderListingTemplates(searchedListings, container)
      }
    }) 
  } catch (error) {
    container.innerHTML = "There is no listings that match this search"
    console.log(error);
    }
}