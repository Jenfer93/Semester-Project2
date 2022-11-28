/**
 * Makes the HTML for the list of listings
 * @param {*} listingData 
 */


export function listingTemplate(listingData){
  const { author, id, endsAt } = listingData;
  //const { name, avatar } = author;

  //Listing card
  const card = document.createElement("a");
  card.classList = "card bg-secondary p-3 mb-3 m-3";
  card.setAttribute("href", `/pages/items/item.html?id=${id}`);

 
  //Card Heading
  const cardHeading = document.createElement("div");
  cardHeading.classList = "m-auto mt-3 d-flex flex-column justify-content-center ";
  
  //The content of the first half of card 
  const cardMedia = document.createElement("img");
  cardMedia.classList = "w-75 m-auto align-self-center";
  cardMedia.src = listingData.media;

  const listingTitle = document.createElement("h4");
  listingTitle.classList = "m-auto text-center mt-2";
  listingTitle.innerText = listingData.title;
  cardHeading.append(cardMedia, listingTitle); 


  //Card bottom 
  const cardBottom = document.createElement("div");
  cardBottom.classList = "d-flex justify-content-between";

  //the content in the second half of card
  const lastBid = document.createElement("button");
  lastBid.classList = "btn btn-success btn-small";
  lastBid.innerText = listingData.bids;


  const listingEnds = document.createElement("p");
  listingEnds.innerText = `closes at ${endsAt}`;

  cardBottom.append(lastBid, listingEnds);

  card.append(cardHeading, cardBottom);

  return card;
}

/**
 * Displays the list of listings
 * @param {string} listingDataList gets the list of listings
 * @param {string} parent the container the list of listings shows in
 */
 export function renderListingTemplates(listingDataList, parent) {
  parent.append(...listingDataList.map(listingTemplate))
}




/**
 * Makes the HTML for the list of listings when the user is not logged in
 * @param {*} listingData 
 */


 export function UnAuthListingTemplate(listingData){
  const { author, id, endsAt } = listingData;
  //const { name, avatar } = author;

  //Listing card
  const card = document.createElement("a");
  card.classList = "card bg-secondary p-3 mb-3 m-3";
  card.setAttribute("href", `/pages/auth/login.html`);

 
  //Card Heading
  const cardHeading = document.createElement("div");
  cardHeading.classList = "m-auto mt-3 d-flex flex-column justify-content-center ";
  
  //The content of the first half of card 
  const cardMedia = document.createElement("img");
  cardMedia.classList = "w-75 m-auto align-self-center";
  cardMedia.src = listingData.media;

  const listingTitle = document.createElement("h4");
  listingTitle.classList = "m-auto text-center mt-2";
  listingTitle.innerText = listingData.title;
  cardHeading.append(cardMedia, listingTitle); 


  //Card bottom 
  const cardBottom = document.createElement("div");
  cardBottom.classList = "d-flex justify-content-between";

  //the content in the second half of card
  const loginButton = document.createElement("button");
  lastBid.classList = "btn btn-warning";
  lastBid.innerText = "Log in to view more";

  cardBottom.append(loginButton);

  card.append(cardHeading, cardBottom);

  return card;
}

/**
 * Displays the list of listings
 * @param {string} listingDataList gets the list of listings
 * @param {string} parent the container the list of listings shows in
 */
 export function renderUnAuthListingTemplates(listingDataList, parent) {
  parent.append(...listingDataList.map(UnAuthListingTemplate))
}