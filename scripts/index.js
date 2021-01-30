const profile = document.querySelector(".profile");
const editButton = profile.querySelector(".profile__edit");
const profileName = profile.querySelector(".profile__title");
const profileDescription = profile.querySelector(".profile__subtitle");
const popup = document.querySelector(".popup");
const form = popup.querySelector(".form");
const formName = form.querySelector(".form__item_field_name");
const formDescription = form.querySelector(".form__item_field_description");
const popupClose = popup.querySelector(".popup__close");
const addButton = profile.querySelector(".profile__add-button");
const addPopup = document.querySelector(".popup_type_add");
const addForm = addPopup.querySelector(".form_type_add");
const formTitle = addForm.querySelector(".form__item_field_title");
const formImageUrl = addForm.querySelector(".form__item_field_image-url");
const createButton = addForm.querySelector(".form__button");
const addPopupClose = addPopup.querySelector(".popup__close");
const element = document.querySelector(".element");

const cardTemplate = document.querySelector(".element-template").content.querySelector(".element");
const list = document.querySelector(".elements__list");
const imageWindow = document.querySelector(".popup_type_image");
const closeImageWindow = imageWindow.querySelector(".popup__close");


//open popup
function formOpen() {
    popup.classList.add("popup_opened");
    formName.value = profileName.textContent;
    formDescription.value = profileDescription.textContent;
}

editButton.addEventListener("click", formOpen);

//close popup
function formClose() {
    popup.classList.remove("popup_opened");
    formName.value = '';
    formDescription.value = '';
}

popupClose.addEventListener("click", formClose);

//save button
function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = `${formName.value}`;
    profileDescription.textContent = `${formDescription.value}`;
    formClose();
}
form.addEventListener("submit", handleFormSubmit);

//open add form
function addOpen() {
    addPopup.classList.add("popup_opened");
    formTitle.value = '';
    formImageUrl.value = '';
}

addButton.addEventListener("click", addOpen);

//close add form
function addClose() {
    addPopup.classList.remove("popup_opened");
    formTitle.value = '';
    formImageUrl.value = '';
}

addPopupClose.addEventListener("click", addClose);

//creates new card
function handleFormCreate (evt) {
    const newElement = cardTemplate.cloneNode(true);
    const cardImage = newElement.querySelector(".element__photo");
    const cardTitle = newElement.querySelector(".element__title");
    const cardLikeButton = newElement.querySelector(".element__heart");
    const cardDeleteButton = newElement.querySelector(".element__delete");

    evt.preventDefault();
    cardTitle.textContent = `${formTitle.value}`;
    cardImage.src = `${formImageUrl.value}`;
    cardImage.alt = `${formTitle.value}`;
    list.prepend(newElement);
    addPopup.classList.remove("popup_opened");

    cardLikeButton.addEventListener("click", () => {
        cardLikeButton.classList.toggle("element__heart_active");
    })

    cardDeleteButton.addEventListener("click", () => {
      newElement.remove();
    })

    cardImage.addEventListener("click", () => {
        const popupImage = imageWindow.querySelector(".popup__image");
        const popupImageTitle = imageWindow.querySelector(".popup__image-title");

        popupImage.src = `${formImageUrl.value}`;
        popupImageTitle.textContent = `${formTitle.value}`;
        popupImage.alt = `${formTitle.value}`;

        imageWindow.classList.add("popup_opened");
        imageWindow.classList.remove("popup__container");
    })

    //closes the image
    closeImageWindow.addEventListener("click", () => {
        imageWindow.classList.remove("popup_opened");
    })

    }

createButton.addEventListener("click", handleFormCreate);

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



  initialCards.forEach(data => {
      const cardElement = cardTemplate.cloneNode(true);

      const cardImage = cardElement.querySelector(".element__photo");
      const cardTitle = cardElement.querySelector(".element__title");
      const cardLikeButton = cardElement.querySelector(".element__heart");
      const cardDeleteButton = cardElement.querySelector(".element__delete");
      
      
      cardTitle.textContent = data.name;
      cardImage.src = data.link;
      cardImage.alt = data.name;

      cardLikeButton.addEventListener("click", () => {
          cardLikeButton.classList.toggle("element__heart_active");
      })

      cardDeleteButton.addEventListener("click", () => {
        cardElement.remove();
    })

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

      list.prepend(cardElement);
  })



