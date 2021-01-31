const profile = document.querySelector(".profile");
const editButton = profile.querySelector(".profile__edit");
const profileName = profile.querySelector(".profile__title");
const profileDescription = profile.querySelector(".profile__subtitle");
const profilePopup = document.querySelector(".popup_type_edit");
const profileForm = profilePopup.querySelector(".form");
const formName = profileForm.querySelector(".form__item_field_name");
const formDescription = profileForm.querySelector(".form__item_field_description");
const profileEditClose = profilePopup.querySelector(".popup__close");
const addButton = profile.querySelector(".profile__add-button");
const addPopup = document.querySelector(".popup_type_add");
const addForm = addPopup.querySelector(".form_type_add");
const formTitle = addForm.querySelector(".form__item_field_title");
const formImageUrl = addForm.querySelector(".form__item_field_image-url");
const createButton = addForm.querySelector(".form__button");
const addPopupClose = addPopup.querySelector(".popup__close");
const element = document.querySelector(".element");
const cardTemplate = document.querySelector(".element-template").content.querySelector(".element");
const cardElement = cardTemplate.cloneNode(true);
//const newElement = cardTemplate.cloneNode(true);
//const cardImage = newElement.querySelector(".element__photo");
//const cardTitle = newElement.querySelector(".element__title");
const list = document.querySelector(".elements__list");
const imageWindow = document.querySelector(".popup_type_image");
const closeImageWindow = imageWindow.querySelector(".popup__close");

//open any popup
function openPopup(popup) {
  popup.classList.add("popup_opened");
}

//close any popup
function closePopup(popup) {
  popup.classList.remove("popup_opened");
} 

//open profile edit form
function openProfilePopup() {
    openPopup(profilePopup);
    formName.value = profileName.textContent;
    formDescription.value = profileDescription.textContent;
}

editButton.addEventListener("click", openProfilePopup);

//close profile edit form
function closeProfilePopup() {
    closePopup(profilePopup);
}

profileEditClose.addEventListener("click", closeProfilePopup);

//save button
function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = `${formName.value}`;
    profileDescription.textContent = `${formDescription.value}`;
    formClose();
}
profileForm.addEventListener("submit", handleFormSubmit);

//open add form
function addOpen() {
    openPopup(addPopup);
    formTitle.value = '';
    formImageUrl.value = '';
}

addButton.addEventListener("click", addOpen);

//close add form
function addClose() {
    closePopup(addPopup);
}

addPopupClose.addEventListener("click", addClose);

/*
//creates new card via submit
function handleFormCreate (evt) {


    evt.preventDefault();
    cardTitle.textContent = `${formTitle.value}`;
    cardImage.src = `${formImageUrl.value}`;
    cardImage.alt = `${formTitle.value}`;
    closePopup(addPopup);

    cardImage.addEventListener("click", () => {
        const popupImage = imageWindow.querySelector(".popup__image");
        const popupImageTitle = imageWindow.querySelector(".popup__image-title");

        popupImage.src = `${formImageUrl.value}`;
        popupImageTitle.textContent = `${formTitle.value}`;
        popupImage.alt = `${formTitle.value}`;
        openPopup(imageWindow);
    })

    createCard();

    list.prepend(newElement);

}
createButton.addEventListener("click", handleFormCreate);
*/





//creates initial cards
const initialCards = [
    {
      name: "Yosemite Valley",
      link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
    },
    {
      name: "Lake Louise",
      link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
    },
    {
      name: "Bald Mountains",
      link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
    },
    {
      name: "Latemar",
      link: "https://code.s3.yandex.net/web-code/latemar.jpg"
    },
    {
      name: "Vanoise National Park",
      link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
    },
    {
      name: "Lago di Braies",
      link: "https://code.s3.yandex.net/web-code/lago.jpg"
    }
  ];

/*

  initialCards.forEach(data => {
    const cardElement = cardTemplate.cloneNode(true);

    const cardImage = cardElement.querySelector(".element__photo");
    const cardTitle = cardElement.querySelector(".element__title");
      
    cardTitle.textContent = data.name;
    cardImage.src = data.link;
    cardImage.alt = data.name;

    //opens the image
    cardImage.addEventListener("click", () => {
      const popupImage = imageWindow.querySelector(".popup__image");
      const popupImageTitle = imageWindow.querySelector(".popup__image-title");

      popupImage.src = data.link;
      popupImageTitle.textContent = data.name;
      popupImage.alt = data.name;

      imageWindow.classList.add("popup_opened");
    })

    //closes the image
    closeImageWindow.addEventListener("click", () => {
      imageWindow.classList.remove("popup_opened");
    })

    createCard();

    list.prepend(cardElement);
  })
*/


//creates card
function createCard(name, link) {
  const cardImage = cardElement.querySelector(".element__photo");
  const cardTitle = cardElement.querySelector(".element__title");
  const cardLikeButton = cardElement.querySelector(".element__heart");
  const cardDeleteButton = cardElement.querySelector(".element__delete");

  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;

  //like button
  cardLikeButton.addEventListener("click", () => {
    cardLikeButton.classList.toggle("element__heart_active");
  })

  //delete button
  cardDeleteButton.addEventListener("click", () => {
    cardElement.remove();
  })

  //opens the image
  cardImage.addEventListener("click", () => {
    const popupImage = imageWindow.querySelector(".popup__image");
    const popupImageTitle = imageWindow.querySelector(".popup__image-title");
  
    popupImage.src = link;
    popupImageTitle.textContent = name;
    popupImage.alt = name;
  
    openPopup(imageWindow);
  })
  
  //closes the image
  closeImageWindow.addEventListener("click", () => {
    closePopup(imageWindow);
  })

}

//creates initial cards
initialCards.forEach(data => {
  createCard(data.name, data.link);
  list.prepend(cardElement);
})


//creates card from form
function newCard(evt) {
  evt.preventDefault();
  createCard(`${formTitle.value}`, `${formImageUrl.value}`);
  list.prepend(cardElement);
}

createButton.addEventListener("click", newCard);

