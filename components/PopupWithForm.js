import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor ({popupSelector, handleFormSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popupElement.querySelector(".form");
    }

    _getInputValues () {
        this._inputList = Array.from(this._form.querySelectorAll(".form__item"));
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    close () {
        super.close();
        this._form.reset();
    }

    open () {
        super.open();
        const titleField = this._popupElement.querySelector(".form__item_field_name");
        const subtitleField = this._popupElement.querySelector(".form__item_field_description");
        titleField.value = document.querySelector(".profile__title").textContent;
        subtitleField.value = document.querySelector(".profile__subtitle").textContent;
    }

    setEventListeners () {
        
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this.close();
        });

        super.setEventListeners();
    }
}

