import * as listeners from "../js/handlers/index.mjs";
import * as listings from "../js/api/items/index.mjs";
import * as profile from "../js/api/profile/index.mjs"

const path = location.pathname;

if (path === "/pages/auth/login.html") {
  listeners.loginUserForm(); 
} else if (path === "/pages/auth/register.html") {
  listeners.registerUserForm(); 
} else if (path === "/"){
  listings.showListings();
  listeners.logoutListener();
} else if (path === "/pages/items/item.html"){
  listings.showListing();
  listeners.logoutListener();
} else if (path === "/pages/user/profile.html"){
  profile.profileInfo();
  profile.editAvatarRedirect();
  listeners.logoutListener();
} else if (path === "/pages/user/editavatar.html"){
  listeners.editAvatarListener();
  listeners.logoutListener();
} else if (path === "/pages/items/createitem.html") {
  listeners.createListingListener();
  listeners.logoutListener();
}