import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor ({popupSelector, handleFormSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popupElement.querySelector(".form");
        this._submitButton = this._form.querySelector(".form__button");
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

    setEventListeners () {
        
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._submitButton.textContent = "Saving...";
            this._handleFormSubmit(this._getInputValues())
              .then(() => {
                  this.close();
                  this._submitButton.textContent = this._submitButton.value;
                })
        });

        super.setEventListeners();
    }
}

