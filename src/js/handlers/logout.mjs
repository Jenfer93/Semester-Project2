import { logout } from "../api/auth/logout.mjs";

export function logoutListener() {
  const logoutButton = document.querySelector(".logout");
  logoutButton.addEventListener("click", () => {
    
    logout();
    location.href = "/pages/auth/login.html"

  })
}