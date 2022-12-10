/**
 * Makes the HTML for the list of listings
 * @param {*} listingData 
 */


export function listingTemplate(listingData){
  const { title, media, id, endsAt, bids } = listingData;

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
  cardMedia.onerror = 'this.src="https://picsum.photos/id/20/367/267"';
  const image = media.length ? media[0]: "https://picsum.photos/id/20/367/267";
  cardMedia.src = image; 

  const listingTitle = document.createElement("h4");
  listingTitle.classList = "m-auto text-center mt-2 text-wrap text-break";
  listingTitle.innerText = title;
  cardHeading.append(cardMedia, listingTitle); 


  //Card bottom 
  const cardBottom = document.createElement("div");
  cardBottom.classList = "d-flex justify-content-around mt-3";

  //the content in the second half of card
  const lastBid = document.createElement("button");
  lastBid.classList = "btn btn-success btn-small";
    lastBid.innerText = "Start biding"
  
  if(bids) { 
    for (var i = 0; i < bids.length; i++){
    lastBid.classList = "btn btn-success btn-small";
    lastBid.innerText = `$ ${bids[i].amount}`;
  }
  }


  const listingEnds = document.createElement("p");
  listingEnds.innerHTML = "Closes at:" + `<br>` + new Date(endsAt).toLocaleDateString();

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
  cardMedia.onerror = "https://picsum.photos/id/20/367/267";
  cardMedia.src = listingData.media;

  const listingTitle = document.createElement("h4");
  listingTitle.classList = "m-auto text-center mt-2 text-wrap text-break";
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
  pageHeader.classList = "m-auto text-center mt-5 text-wrap text-break"
   
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
} else {
  listingMedia.src = "https://picsum.photos/id/20/367/267";
}

  const listingEnds = document.createElement("p");
  listingEnds.innerHTML = "Closes at:" + `<br>` + new Date(endsAt).toLocaleDateString();
  listingEnds.classList = "m-auto text-uppercase"

  containerImgEnds.append(imgContainer, listingEnds)

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

  const lastBid = document.createElement("button");
  lastBid.classList = "btn btn-success btn-small";
    lastBid.innerText = "Start biding"
  
  if(bids) { 
    for (var i = 0; i < bids.length; i++){
    lastBid.classList = "btn btn-success btn-small";
    lastBid.innerText = bids[i].amount;
  }
  }

  // const bidForm = document.createElement ("form");
  // bidForm.classList = "form m-auto mt-3"
  // bidForm.id= "bidForm";

  // const bidInput = document.createElement ("input");
  // bidInput.classList = "form-control bg-secondary text-light mb-2"

  // const placeBidButton = document.createElement("button");
  // placeBidButton.classList = "btn btn-success btn-small";
  // placeBidButton.innerText = "Place bid";

  // bidForm.append(bidInput, placeBidButton)

  listingInformation.append(listingDescription, lastBid)

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