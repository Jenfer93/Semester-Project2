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
        const post = Object.fromEntries(formData.entries())
        
        //Delete the media if there is a empty string 
        if(post.media === ""){
          delete post.media
        }
       
        //send it to API
        createListing(post).then(console.log(post))
      //   if (post){
      //   location.href = "/";
      // } else {
      //   console.log("error");
      // }
    })
  }
};