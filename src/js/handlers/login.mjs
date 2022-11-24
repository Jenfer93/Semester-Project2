import { login } from "../api/auth/login.mjs";

/**
 * The function for the listener for login page
 */

export function loginUserForm() {
  const form = document.querySelector("#login-form");

  form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target; 
      const formData = new FormData(form)
      const profile = Object.fromEntries(formData.entries())
      
      
      login(profile)

  })
};