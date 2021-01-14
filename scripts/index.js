let profile = document.querySelector(".profile");
let editButton = profile.querySelector(".profile__edit");
let profileName = profile.querySelector(".profile__title");
let profileDescription = profile.querySelector(".profile__subtitle");
let popup = document.querySelector(".popup");
let form = popup.querySelector(".form");
let formName = form.querySelector(".form__item_field_name");
let formDescription = form.querySelector(".form__item_field_description");
let popupClose = popup.querySelector(".form__close");

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


