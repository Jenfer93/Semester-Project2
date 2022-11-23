import { load } from "../storage/index.mjs"

/**
 * Makes the headers for the token fetch
 * @returns token
 */
export function headers() {
  const token = load("token");
  return {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
  }
}

/**
 * Fetches the token
 * @param {string} url 
 * @param {object} options 
 * @returns 
 */
export async function tokenAuth (url, options = {} ) {
  return fetch (url, {
    ...options, 
    headers: headers()
  })
}