
import "./styles/index.css";


import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";


const defaultConfig = {
  formSelector: ".form",
  inputSelector: ".form__item",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible"
};

const imageWindow = document.querySelector(".popup_type_image");

//content
const addPopup = document.querySelector(".popup_type_add");
const profilePopup = document.querySelector(".popup_type_edit");

//forms
const addForm = addPopup.querySelector(".form_type_add");
const profileForm = profilePopup.querySelector(".form_type_edit");

//profile
const profile = document.querySelector(".profile");

//buttons
const editButton = profile.querySelector(".profile__edit");
const addButton = profile.querySelector(".profile__add-button");

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


//validation
const profileFormValidator = new FormValidator(defaultConfig, profileForm);
const addFormValidator = new FormValidator(defaultConfig, addForm);

profileFormValidator.enableValidation();
addFormValidator.enableValidation();

//initial cards
const list = new Section ({
  items: initialCards,
  renderer: (items) => {
    const card = new Card ({
      data: items, 
      handleCardClick: (link, name) => {
        imagePopup.open(link, name);
      }
    }, ".element-template");
    list.addItem(card.createCard());
  }
}, ".elements__list")

list.renderItems(); 


//photo popup
const imagePopup = new PopupWithImage (".popup_type_image");
imagePopup.setEventListeners();

//add popup --> new cards
const addCardPopup = new PopupWithForm({
  popupSelector: ".popup_type_add",
  //take info and make card
  handleFormSubmit: (items) => {
    const card = new Card ({
      data: items, 
      handleCardClick: ({link, title}) => {
        imagePopup.open(link, title);
      }
    }, ".element-template");
    list.prependItem(card.createCard());
    console.log(items);

  }
});
addCardPopup.setEventListeners(); 
addButton.addEventListener("click", (evt) => {
  addCardPopup.open();
})

//collect user info
const userInfo = new UserInfo ({
  profileNameSelector: ".profile__title",
  profileDescriptionSelector: ".profile__subtitle"
});

//edit popup 
const editPopup = new PopupWithForm({
  popupSelector: ".popup_type_edit",
  handleFormSubmit: ({name, description}) => {
    userInfo.setUserInfo(name, description);
  },
});
editPopup.setEventListeners();
editButton.addEventListener("click", (evt) => {
  editPopup.open();

}) 
