import { createListing } from "../api/items/create.mjs";


/**
 * Function that creates the listener for create post
 */
export function createListingListener() {
  const form = document.querySelector("#createListing");

  if(form){
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target; 
        const formData = new FormData(form)

        const title = formData.get('title');
        const description = formData.get('body');
        const tags = formData.get('tags').split(', ');
        const media = formData.get('media').split(', ');
        const endsAt = formData.get('endsAt');

        const post = {title, description, tags, media, endsAt}

        //Delete the media if there is a empty string 
        if(post.media === ""){
          delete post.media
        }
       
        //send it to API
        createListing(post);
    })
  }
};