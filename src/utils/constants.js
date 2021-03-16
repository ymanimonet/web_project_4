export const defaultConfig = {
    formSelector: ".form",
    inputSelector: ".form__item",
    submitButtonSelector: ".form__button",
    inactiveButtonClass: "form__button_disabled",
    inputErrorClass: "form__input_type_error",
    errorClass: "form__error_visible"
};
  
//content
export const addPopup = document.querySelector(".popup_type_add");
export const profilePopup = document.querySelector(".popup_type_edit");
  
//forms
export const addForm = addPopup.querySelector(".form_type_add");
export const profileForm = profilePopup.querySelector(".form_type_edit");

//profile form fields
export const nameField = profileForm.querySelector(".form__item_field_name")
export const descriptionField = profileForm.querySelector(".form__item_field_description")
  
//profile
export const profile = document.querySelector(".profile");
  
//buttons
export const editButton = profile.querySelector(".profile__edit");
export const addButton = profile.querySelector(".profile__add-button");
  


export const initialCards = [
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