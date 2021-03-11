export default class FormValidator {
    constructor(settings, formElement) {
        this._formSelector= settings.formSelector;
        this._inputSelector= settings.inputSelector;
        this._submitButtonSelector= settings.submitButtonSelector;
        this._inactiveButtonClass= settings.inactiveButtonClass;
        this._inputErrorClass= settings.inputErrorClass;
        this._errorClass= settings.errorClass;
       
        this._form = formElement;
    }
    
    _showErrorMessage(input) {
        const error = this._form.querySelector(`#${input.id}-error`);
    
        error.textContent = input.validationMessage;
        error.classList.add(this._errorClass);
        input.classList.add(this._inputErrorClass);
    };
    
    _hideErrorMessage(input) {
        const error = this._form.querySelector(`#${input.id}-error`);
    
        error.textContent = "";
        error.classList.remove(this._errorClass);
        input.classList.remove(this._inputErrorClass);
    };
    
    _checkInputValidity(input) {
        if (input.validity.valid) {
            this._hideErrorMessage(input);
        } else {
            this._showErrorMessage(input);
        }
    };
    
    _toggleButtonState () {
        const isValid = this._inputs.every((input) => input.validity.valid);
    
        if (isValid) {
            this.button.classList.remove(this._inactiveButtonClass);
            this.button.disabled = false;
        } else {
            this.button.classList.add(this._inactiveButtonClass);
            this.button.disabled = true;
        }
    };

    enableValidation() {

        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        this._setEventListeners();
    }

    resetValidation() {
        this._inputs.forEach((input) => {
            this._hideErrorMessage(input);
        });

        this._toggleButtonState();
    }

    _setEventListeners() {
        this._inputs = Array.from(this._form.querySelectorAll(this._inputSelector));
        this.button = this._form.querySelector(this._submitButtonSelector);

        this._inputs.forEach((input) => {
            input.addEventListener("input", () => {
                this._checkInputValidity(input);
                this._toggleButtonState();
            });
        });
    }
}
