import "./index.css";

import Api from "../components/Api.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupToDelete from "../components/PopupToDelete.js";
import {
  defaultConfig,
  addForm,
  profileForm,
  avatarForm,
  nameField,
  aboutField,
  editButton,
  addButton,
  avatarButton,
  avatar
  //initialCards
} from "../utils/constants.js"

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-7",
  headers: {
    authorization: "20ab70d8-b14f-4271-bdde-c31cc9b6d660",
    "Content-Type": "application/json"
  }
});

//collect user info
const userInfo = new UserInfo ({
  profileNameSelector: ".profile__title",
  profileDescriptionSelector: ".profile__subtitle",
  avatar: ".profile__pic"
});

//1.loading user information from the server
api.gatherUserInfo().then((result) => {
  userInfo.setUserInfo(result.name, result.about, result.avatar, result._id);
})
.catch((err) => console.log(err));

//new card
function newCard(items) {
  const card = new Card ({
    data: items,
    handleCardClick: (link, name) => {
      imagePopup.open(link, name);
    },
    handleDeleteClick: () => {
      deletePopup.open();
      deletePopup.handleConfirmClick(() => {
        api.removeCard(card.getId())
          .then(() => {
            //console.log(card);
            card.deleteCard();
            deletePopup.close();
          })
          .catch((err) => console.log(err));
      })
    }
  }, ".element-template");
  return card.createCard(userInfo.id)
} 

/*
const list = new Section({
  items,
  renderer: (data) => {
    const card = new Card({
      data,
      handleCardClick: () => {
        imagePopup.open(data);
      },
      handleDeleteClick: () => {
        deletePopup.open();
        deletePopup.handleConfirmClick(() => {
          api.removeCard(card.getId())
            .then(() => {
              card.deleteCard();
              deletePopup.close();
            })
            .catch((err) => console.log(err));
        })
      }
    }, ".element.template");
  }
}, ".elements__list");

api.getInitialCards().then((items) => {
  console.log(items);
  console.log(list);
  //list.addItem(newCard(data));
  list.renderItems(items);
  console.log(data);
})
.catch((err) => console.log(err));
*/


//2. loading cards from the server

api.getInitialCards().then((result) => {
  const list = new Section ({
    items: result,
    renderer: (items) => {
      list.addItem(newCard(items));
      //console.log(items);
      //console.log(list);
    },
  }, ".elements__list");
  list.renderItems();
})
.catch((err) => console.log(err));


//add popup --> new cards
const addCardPopup = new PopupWithForm({
  popupSelector: ".popup_type_add",
  //take info and make card
  handleFormSubmit: (items) => {
    return api.addCard(items)
    .then((result) => {
      //list.prependItem(newCard());
      const list = new Section ({
        items: result,
        renderer: (items) => {
          list.addItem(newCard(items));
        },
        
      }, ".elements__list");
      //list.prependItem(card.createCard(userInfo.id));
      //console.log(result);
      list.prependItem(result);
      //console.log(result);
      addCardPopup.close();
    })
    .catch((err) => console.log(err));
  }
});

addCardPopup.setEventListeners(); 
addButton.addEventListener("click", (evt) => {
  addCardPopup.open();
  addFormValidator.resetValidation();
})

//validation
const profileFormValidator = new FormValidator(defaultConfig, profileForm);
const addFormValidator = new FormValidator(defaultConfig, addForm);
const avatarFormValidator = new FormValidator(defaultConfig, avatarForm);

profileFormValidator.enableValidation();
addFormValidator.enableValidation();
avatarFormValidator.enableValidation();

//delete popup
const deletePopup = new PopupToDelete(".popup_type_delete");
deletePopup.setEventListeners();


//photo popup
const imagePopup = new PopupWithImage (".popup_type_image");
imagePopup.setEventListeners();

//edit popup 
const editPopup = new PopupWithForm({
  popupSelector: ".popup_type_edit",
  handleFormSubmit: ({name, about}) => {
    return api.updateUserInfo({name, about})
      .then(result => {
        userInfo.setUserInfo(result.name, result.about, result.avatar)
        editPopup.close();
      })
      .catch((err) => console.log(err));
  },
});

editPopup.setEventListeners();
editButton.addEventListener("click", (evt) => {
  editPopup.open();
  const fillFields = userInfo.getUserInfo();
  nameField.value = fillFields.name;
  aboutField.value = fillFields.about;
}) 

//avatar popup

const avatarPopup = new PopupWithForm({
  popupSelector: ".popup_type_avatar",
  handleFormSubmit: ({link}) => {
    return api.updateAvatar({avatar: link})
      .then(result => {
        avatar.src = result.avatar;
        avatarPopup.close();
      })
      .catch((err) => console.log(err));
  }
});

avatarPopup.setEventListeners();
avatarButton.addEventListener("click", (evt) => {
  avatarPopup.open();
  avatarFormValidator.resetValidation();
})