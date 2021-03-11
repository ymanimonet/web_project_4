import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor (popupSelector, handleFormSubmit, formSelector, openButton) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._formSelector = formSelector;
        this._openButton = openButton;
    }

    _getInputValues () {
        this._inputList = this._element.querySelectorAll(".form__input");
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    setEventListeners () {
        super.setEventListeners();
        this._popup.addEventListener("submit", (evt) => {
            this._handleFormSubmit(this._getInputValues());
            this.close();
        });
        this._openButton.addEventListener("click", (evt) => {
            this.open();
        });
    }

    close () {
        super.close();
        this._formSelector.reset();
    }
}

