import { register } from "../api/auth/register.mjs";

/**
 * Function for listener for the register form 
 */
export function registerUserForm() {
  const form = document.querySelector("#register-form");

  form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target; 
      const formData = new FormData(form)
      const profile = Object.fromEntries(formData.entries())

      console.log(profile)
      //Send to API
      register(profile);
  })
};