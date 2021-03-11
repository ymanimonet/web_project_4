import "./styles/index.css";

import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
//import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";


const defaultConfig = {
  formSelector: ".form",
  inputSelector: ".form__item",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible"
};

//const list = document.querySelector(".elements__list");
//const imageWindow = document.querySelector(".popup_type_image");

//content
//const addPopup = document.querySelector(".popup_type_add");
const profilePopup = document.querySelector(".popup_type_edit");

//forms
const addForm = addPopup.querySelector(".form_type_add");
const profileForm = profilePopup.querySelector(".form_type_edit");

//profile
const profile = document.querySelector(".profile");

//buttons
//const createButton = addForm.querySelector(".form__button");
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

//edit popup 
const editPopup = new PopupWithForm({
  popupSelector: ".popup_type_edit",
  //take info and update profile
  handleFormSubmit,
  formSelector: profileForm,
  openButton: editButton});
editPopup.setEventListener()

//add popup --> new cards
const addPopup = new PopupWithForm({
  popupSelector: ".popup_type_add",
  //take info and make card
  handleFormSubmit,
  formSelector: addForm,
  openButton: addButton
});
addPopup.setEventListener()


//initial cards
const list = new Section ({
  items: initialCards,
  renderer: (items) => {
    const card = new Card ({
      items, 
      handleClickCard: () => {
        cardPopup();
      }
    }, ".element-template");
    list.addItem(card);
  }
}, ".elements__list")

list.renderItems(); 

//new cards

//photo popup

//collect user info
const userInfo = new UserInfo ({
  profileNameSelector: ".profile__title",
  profileDescriptionSelector: ".profile__subtitle"
});


