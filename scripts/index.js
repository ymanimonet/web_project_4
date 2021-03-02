import FormValidator from "./FormValidator.js";
import {Card, openPopup, closePopup} from "./Card.js";


const defaultConfig = {
  formSelector: ".form",
  inputSelector: ".form__item",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible"
};

const list = document.querySelector(".elements__list");
const imageWindow = document.querySelector(".popup_type_image");

//content
const addPopup = document.querySelector(".popup_type_add");
const profilePopup = document.querySelector(".popup_type_edit");

//forms
const addForm = addPopup.querySelector(".form_type_add");
const profileForm = profilePopup.querySelector(".form_type_edit");

//profile
const profile = document.querySelector(".profile");
const profileName = profile.querySelector(".profile__title");
const profileDescription = profile.querySelector(".profile__subtitle");

//buttons
const createButton = addForm.querySelector(".form__button");
const editButton = profile.querySelector(".profile__edit");
const addButton = profile.querySelector(".profile__add-button");

//closing buttons
const closeImageWindow = imageWindow.querySelector(".popup__close");
const profileEditClose = profilePopup.querySelector(".popup__close");
const addPopupClose = addPopup.querySelector(".popup__close");

//form fields
const formName = profileForm.querySelector(".form__item_field_name");
const formDescription = profileForm.querySelector(".form__item_field_description");
const formTitle = addForm.querySelector(".form__item_field_title");
const formImageUrl = addForm.querySelector(".form__item_field_image-url");

//validation
const profileFormValidator = new FormValidator(defaultConfig, profileForm);
const addFormValidator = new FormValidator(defaultConfig, addForm);

profileFormValidator.enableValidation();
addFormValidator.enableValidation();

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

//close popup by clicking elsewhere
profilePopup.addEventListener("click", function (evt) {
  const clickElement = evt.target;
  if (clickElement.classList.contains("popup")) {
    closePopup(profilePopup);
  }
});

imageWindow.addEventListener("click", function (evt) {
  const clickElement = evt.target;
  if (clickElement.classList.contains("popup")) {
    openPopup(imageWindow);
  }
});

addPopup.addEventListener("click", function (evt) {
  const clickElement = evt.target;
  if (clickElement.classList.contains("popup")) {
    closePopup(addPopup);
  }
});

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

//profile save button
function profileSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = `${formName.value}`;
  profileDescription.textContent = `${formDescription.value}`;
  closePopup(profilePopup);
}
profileForm.addEventListener("submit", profileSubmit);

//open add form
function addOpen() {
  openPopup(addPopup);
  formTitle.value = '';
  formImageUrl.value = '';
  createButton.disabled = true;
}

addButton.addEventListener("click", addOpen);

//close add form
function addClose() {
    closePopup(addPopup);
}

addPopupClose.addEventListener("click", addClose);

//add form submit button
function cardSubmit(evt) {
  evt.preventDefault();
  newCard({name: formTitle.value, link: formImageUrl.value});
}

addForm.addEventListener("submit", cardSubmit);

//closes the image
closeImageWindow.addEventListener("click", () => {
  closePopup(imageWindow);
})

function generateCard (data) {
  const cardElement = new Card(data, ".element-template");
  list.prepend(cardElement.createCard());
}

//creates initial cards
initialCards.forEach(data => {
  generateCard(data);
})


//creates card from form
function newCard(data) {
  generateCard(data);
  closePopup(addPopup);
}




//export default openPopup;