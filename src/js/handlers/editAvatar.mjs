/**
 * Function to edit the avatar 
 */
 import { load, save } from "../storage/index.mjs";
 import { editAvatar, readProfile } from "../api/profile/index.mjs";
 
 export async function editAvatarListener(){
   const form = document.querySelector("#form-avatar");
   const avatarImg = document.querySelector(".avatar");
   const userName = document.querySelector("#userName");
 
 
   if(form){
 
     const {name} = load("profile");
     const avatar = load("avatar");
 
     avatarImg.src = avatar;
     userName.innerText = name;
 
     const profile = await readProfile(name);
 
     form.addEventListener("submit", (event) => {
       event.preventDefault();
       const form = event.target; 
       const formData = new FormData(form)
       const avatar = Object.fromEntries(formData.entries())
       save("avatar", form.avatar.value);
       //send it to API
       editAvatar(avatar)
       location.reload();
   })
   }
 }