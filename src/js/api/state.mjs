
import { load } from "../storage/index.mjs";

export const isLoggedIn = () => Boolean(load("token"));

export const profile = () => load("profile");

export function navBarState() {
  const token = load("token")
  const profileNav = document.querySelector(".profileNav");
  const createNav = document.querySelector(".createNav");
  const editNav = document.querySelector(".editNav");
  const logout = document.querySelector(".logout");
  const loginNav = document.querySelector(".loginNav");
  const registerNav = document.querySelector(".registerNav");
  if(token) {
    loginNav.classList.add ="d-none";
  }

  return 
}