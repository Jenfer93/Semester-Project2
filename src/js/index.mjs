import * as listeners from "../js/handlers/index.mjs";
import * as listings from "../js/api/items/index.mjs";
import * as profile from "../js/api/profile/index.mjs"

const path = location.pathname;
//listeners.logoutListener();

if (path === "/pages/auth/login.html") {
  listeners.loginUserForm(); 
} else if (path === "/pages/auth/register.html") {
  listeners.registerUserForm(); 
} else if (path === "/"){
  listings.showListings();
} else if (path === "/pages/items/item.html"){
  listings.showListing();
} else if (path === "/pages/user/profile.html"){
  profile.profileInfo();
  profile.editAvatarRedirect();

} else if (path === "/pages/user/editavatar.html"){
  listeners.editAvatarListener();
}