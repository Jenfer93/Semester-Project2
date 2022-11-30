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
  const { id, title, description, endsAt, bids, media } = listingData;

  const pageHeader = document.querySelector(".pageHeader");
  pageHeader.innerText = title;
  pageHeader.classList = "m-auto text-center mt-5"
   
  const listingContainer = document.createElement("div");
  listingContainer.classList = "list d-flex flex-wrap m-auto p-3 justify-content-around";

  const containerImgEnds = document.createElement("div");
  containerImgEnds.classList = "d-flex flex-column justify-content-center"

  const imgContainer = document.createElement("div");
  imgContainer.classList = "itemImage m-auto d-flex flex-column"
  

  if(media){
    for(let i = 0; i < media.length; i++){
    const listingMedia = document.createElement ("img");
    listingMedia.src = media[i];
    listingMedia.classList = "w-100 pb-2";
    imgContainer.append(listingMedia)
    }
}

  const listingEnds = document.createElement("p");
  listingEnds.innerHTML = `Closes at <br> ${endsAt}`;
  listingEnds.classList = "m-auto text-center"

  containerImgEnds.append(imgContainer, endsAt)

  const listingInformation = document.createElement ("div");
  listingInformation.classList = "p-3 m-auto";

  const listingDescription = document.createElement ("div");
  listingDescription.classList = "bg-secondary p-3 m-auto mb-3";
  listingDescription.innerText  = "Description:"

  const descriptionText = document.createElement("p");
  descriptionText.innerText = description;

  listingDescription.append(descriptionText);
  
  const bidH2 = document.createElement ("h2");
  bidH2.innerText = "Current Bid";

  const lastBid = document.createElement ("button");
  lastBid.classList = "btn btn-success btn-small mb-3";
  lastBid.innerHTML = `${bids}`

  const bidH3 = document.createElement ("h3");
  bidH3.innerText = "Make a bid";

  const bidInput = document.createElement ("input");
  bidInput.classList = "form-control bg-secondary text-light mb-2"

  const placeBidButton = document.createElement("button");
  placeBidButton.classList = "btn btn-success btn-small";
  placeBidButton.innerText = "Place bid";

  listingInformation.append(listingDescription, lastBid, bidH3, bidInput, placeBidButton)

  listingContainer.append(containerImgEnds, listingInformation);

  return listingContainer
}

/**
 * Displays the single post 
 * @param {string} listingData 
 * @param {string} parent 
 */
 export function renderListingTemplate(listingData, parent) {
  parent.append(singleListingTemplate(listingData))
}