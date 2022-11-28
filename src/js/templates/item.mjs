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





/**
 * Makes the HTML for a single listing 
 */

export function singleListingTemplate(listingData){
  const { author, id, title, description } = listingData;
  //const { avatar } = author; 

  const pageHeader = document.querySelector(".pageHeader");
  const path = location.pathname
  if (path === "/pages/items/item.html") {
    pageHeader.innerText = title;
  } 

  const listingMedia = document.createElement ("img");
  listingMedia.src = listingData.media;
  listingMedia.classList = "w-50 m-auto align-self-center"

  const listingEnds = document.createElement("p");
  listingEnds.innerHTML = `Closes at <br> ${endsAt}`;

  const listingDescription = document.createElement ("div");
  listingDescription.classList = "bg-secondary p-3 w-50";

  const descriptionText = document.createElement ("p");
  descriptionText.innerText = description;

  const listingInformation = document.createElement ("div");
  listingInformation.classList = "p-3 w-50";
  
  const bidH2 = document.createElement ("h2");
  bidH2.innerText = "Current Bid";

  const lastBid = document.createElement ("button");
  lastBid.classList = "btn btn-success btn-small";
  lastBid.innerText = `${bids}`

  const bidH3 = document.createElement ("h3");
  bidH3.innerText = "Make a bid";

  const bidInput = document.createElement ("input");
  bidInput.classList = "form-control bg-secondary text-light"

  const placeBidButton = document.createElement("button");
  placeBidButton.classList = "btn btn-success btn-small";
  placeBidButton.innerText = "Place bid";

  listingInformation.append(bidH2, lastBid, bidH3, bidInput, placeBidButton)

}

/**
 * Displays the single post 
 * @param {string} listingData 
 * @param {string} parent 
 */
 export function renderListingTemplate(listingData, parent) {
  parent.append(singleListingTemplate(listingData))
}