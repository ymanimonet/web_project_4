import "./index.css";

import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import {
  defaultConfig,
  addForm,
  profileForm,
  editButton,
  addButton,
  initialCards
} from "../utils/constants.js"


//validation
const profileFormValidator = new FormValidator(defaultConfig, profileForm);
const addFormValidator = new FormValidator(defaultConfig, addForm);

profileFormValidator.enableValidation();
addFormValidator.enableValidation();

function newCard(items) {
  const card = new Card ({
    data: items,
    handleCardClick: (link, name) => {
      imagePopup.open(link, name);
    }
  }, ".element-template");
  return card.createCard()
}

const list = new Section ({
  items: initialCards,
  renderer: (items) => {
    list.addItem(newCard(items));
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
    list.prependItem(newCard(items));
  }
});

addCardPopup.setEventListeners(); 
addButton.addEventListener("click", (evt) => {
  addCardPopup.open();
  addForm.querySelector(".form__button").classList.add("form__button_disabled");
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
  const fillFields = userInfo.getUserInfo();
  profileForm.querySelector(".form__item_field_name").value = fillFields[0];
  profileForm.querySelector(".form__item_field_description").value = fillFields[1];
}) 
