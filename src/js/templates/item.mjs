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
  cardHeading.classList = "m-auto mt-3 d-flex flex-column justify-content-center";
  
  //The content of the first half of card 
  const cardMedia = document.createElement("img");
  cardMedia.classList = "w-100 h-75 m-auto align-self-center";
  cardMedia.onerror = 'this.src="https://picsum.photos/id/20/367/267"';
  const image = media.length ? media[0]: "https://picsum.photos/id/20/367/267";
  cardMedia.src = image; 
  cardMedia.alt =`Image of ${title}`

  const listingTitle = document.createElement("h4");
  listingTitle.classList = "m-auto text-center mt-2 text-wrap text-break";
  if (!title){
    listingTitle.innerText = "Missing Title";
  } else {
    listingTitle.innerText = title;
  }
  
  cardHeading.append(cardMedia, listingTitle); 


  //Card bottom 
  const cardBottom = document.createElement("div");
  cardBottom.classList = "d-flex justify-content-around mt-3";

  //the content in the second half of card
  const lastBid = document.createElement("button");
  lastBid.classList = "btn btn-success btn-small";
    lastBid.innerText = "No bids yet"
  
  if(bids) { 
    for (var i = 0; i < bids.length; i++){
      if(bids.length > 1) {
        bids.sort((firstBid, secondBid) => firstBid.amount - secondBid.amount);
      }
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
  cardMedia.classList = "w-100 h-75 m-auto align-self-center";
  cardMedia.onerror = 'this.src="https://picsum.photos/id/20/367/267"';
  const image = listingData.media.length ? listingData.media[0]: "https://picsum.photos/id/20/367/267";
  cardMedia.src = image; 
  cardMedia.alt =`Image of ${listingData.title}`

  const listingTitle = document.createElement("h4");
  listingTitle.classList = "m-auto text-center mt-2 text-wrap text-break";
  listingTitle.innerText = listingData.title;
  cardHeading.append(cardMedia, listingTitle); 


  //Card bottom 
  const cardBottom = document.createElement("div");
  cardBottom.classList = "d-flex justify-content-between mt-3";

  //the content in the second half of card
  const loginButton = document.createElement("button");
  loginButton.classList = "btn btn-warning text-underline";
  loginButton.innerText = "Log in to view more";

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
  const { title, description, endsAt, bids, media } = listingData;

  const pageHeader = document.querySelector(".pageHeader");
  pageHeader.innerText = title;
  pageHeader.classList = "m-auto text-center mt-5 text-wrap text-break"
   
  const listingContainer = document.createElement("div");
  listingContainer.classList = "list d-flex flex-wrap m-auto p-3 justify-content-around";

  const containerImgEnds = document.createElement("div");
  containerImgEnds.classList = "d-flex flex-column justify-content-center"

  const carouselContainer = document.createElement("div");
  carouselContainer.classList = "itemImage m-auto carousel slide"
  carouselContainer.id = "carousel"
  carouselContainer.dataset.bsRide = "carousel"

  const carouselInner = document.createElement("div");
  carouselInner.classList="carousel-inner"; 

  if(media.length === 0 || !media) {
    const noImageContainer = document.createElement("div")
    noImageContainer.classList="carousel-item active";
    const listingMedia = document.createElement("img");
    listingMedia.onerror = 'this.src="https://picsum.photos/id/20/367/267"';
    const image = media.length ? media: "https://picsum.photos/id/20/367/267";
    listingMedia.src = image;
    carouselInner.append(noImageContainer)
    noImageContainer.append(listingMedia)
  } else {
    for(let i = 0; i < media.length; i++){
      const carouselItem = document.createElement("div")
      carouselItem.classList="carousel-item";
      carouselItem.ariaLabel = `slide ${i}`
      if(carouselItem.ariaLabel === "slide 0"){
       carouselItem.classList ="carousel-item active"
      }
      const listingMedia = document.createElement ("img");
      listingMedia.src = media[i];
      listingMedia.alt = `Image of ${title}`;
      listingMedia.classList = "d-block w-100 pb-2";
      carouselItem.append(listingMedia)
      carouselInner.append(carouselItem)
    }
  }

  const slideButtonLeft = document.createElement("button");
  slideButtonLeft.classList="carousel-control-prev";
  slideButtonLeft.type="button";
  slideButtonLeft.dataset.bsTarget ="#carousel"
  slideButtonLeft.setAttribute("data-bs-slide", "prev")

  const buttonLIcon = document.createElement("span");
  buttonLIcon.classList="carousel-control-prev-icon";
  buttonLIcon.ariaHidden="true";

  const buttonLHidden = document.createElement("span");
  buttonLHidden.classList="visually-hidden";
  buttonLHidden.innerText="Previous";

  const slideButtonRight = document.createElement("button");
  slideButtonRight.classList="carousel-control-next";
  slideButtonRight.type="button";
  slideButtonRight.dataset.bsTarget ="#carousel"
  slideButtonRight.setAttribute("data-bs-slide", "next")

  const buttonRIcon = document.createElement("span");
  buttonRIcon.classList="carousel-control-next-icon";
  buttonRIcon.ariaHidden="true";

  const buttonRHidden = document.createElement("span");
  buttonRHidden.classList="visually-hidden";
  buttonRHidden.innerText="Next";

  slideButtonLeft.append(buttonLIcon, buttonLHidden)
  slideButtonRight.append(buttonRIcon, buttonRHidden)
  
  carouselContainer.append(carouselInner, slideButtonLeft, slideButtonRight)

  const listingEnds = document.createElement("p");
  listingEnds.innerHTML = "Closes at:" + `<br>` + new Date(endsAt).toLocaleDateString();
  listingEnds.classList = "m-auto text-uppercase"

  containerImgEnds.append(carouselContainer, listingEnds)

  const listingInformation = document.createElement ("div");
  listingInformation.classList = "p-3 m-auto";

  const listingDescription = document.createElement ("div");
  listingDescription.classList = "bg-secondary p-3 m-auto mb-3";
  listingDescription.innerText  = "Description:"

  const descriptionText = document.createElement("p");
  descriptionText.innerText = description;

  listingDescription.append(descriptionText);
 
  const lastBid = document.createElement("button");
  lastBid.classList = "btn btn-success btn-small";
    lastBid.innerText = "No bids yet"
  
  if(bids) { 
    for (var i = 0; i < bids.length; i++){
    if(bids.length > 1) {
      bids.sort((firstBid, secondBid) => firstBid.amount - secondBid.amount);
    }
    lastBid.classList = "btn btn-success btn-small p-2";
    lastBid.innerText =`Last bid: $${bids[i].amount}`;
  }
  }

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