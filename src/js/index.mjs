import * as listeners from "../js/handlers/index.mjs";

const path = location.pathname;

if (path === "/pages/auth/login.html") {
  listeners.loginUserForm(); 
} else if (path === "/pages/auth/register.html") {
  listeners.registerUserForm(); 
};