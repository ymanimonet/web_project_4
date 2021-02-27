class FormValidator {
    constructor(settings, formElement) {
        this._formSelector= settings.formSelector;
        this._inputSelector= settings.inputSelector;
        this._submitButtonSelector= settings.submitButtonSelector;
        this._inactiveButtonClass= settings.inactiveButtonClass;
        this._inputErrorClass= settings.inputErrorClass;
        this._errorClass= settings.errorClass;

        this._form = form;
    }
    
    //needs second argument validationMessage
    _showErrorMessage = function(input) {
        const error = this._form.querySelector(`#${input.id}-error`);
    
        error.textContent = input.validationMessage;
        error.classList.add(this._errorClass);
        input.classList.add(this._inputErrorClass);
    };
    
    _hideErrorMessage = function(input) {
        const error = this._form.querySelector(`#${input.id}-error`);
    
        error.textContent = "";
        error.classList.remove(this._errorClass);
        input.classList.remove(this._inputErrorClass);
    };
    
    
    _checkInputValidity = function(input, form, rest) {
        if (input.validity.valid) {
            hideErrorMessage(input, form, rest);
        } else {
            showErrorMessage(input, form, rest);
        }
    };
    
    
    _toggleButtonState = function(inputs, button, {inactiveButtonClass, ...rest}) {
        const isValid = inputs.every((input) => input.validity.valid);
    
        if (isValid) {
            button.classList.remove(inactiveButtonClass);
            button.disabled = false;
        } else {
            button.classList.add(inactiveButtonClass);
            button.disabled = true;
        }
    };

    enableValidation() {

        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        this._setEventListeners();
    }


}

export default FormValidator;
