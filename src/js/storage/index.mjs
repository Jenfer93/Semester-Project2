
/**
 * LocalStorage function that places a chosen object in localStorage
 * @param {string} key 
 * @param {string} value 
 */
 export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
};


/**
 * Function that retrieves something from localStorage
 * @param {string} key 
 * @returns 
 */
export function load(key) {
  try{
const value = localStorage.getItem(key);
return JSON.parse(value);
  } catch {
    return null
  }
};


/**
 * Function that removes a chosen thing from localStorage
 * @param {string} key 
 */
export function remove(key) {
  localStorage.removeItem(key);
};