/**
 * Function to edit the avatar 
 */

import { load } from "../storage/index.mjs";

export async function editAvatarListener(){
  const form = document.querySelector("#form-avatar");
  const avatarImg = document.querySelector(".avatar");


  if(form){

    const {name} = load("profile");
    const avatar = load("avatar");

    avatarImg.src = avatar;
    editAvatar(profileData)
  }


}