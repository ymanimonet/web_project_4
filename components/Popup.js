class Popup  {
    constructor (popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open () {
        this._popupElement.classList.add("popup_opened");
        document.addEventListener("keydown", this._handleEscClose);
    }

    close () {
        this._popupElement.classList.remove("popup_opened");
        document.removeEventListener("keydown", this._handleEscClose);
    }

    _handleEscClose (evt) {
        if (evt.key ===  "Escape") {
            this.close();
        }
    }

    setEventListeners () {
        this._popupElement.addEventListener("click", (evt) => {
            if (evt.target.classList.containes("popup__close") || evt.target.closest("popup__container")) {
                this.close();
            }
        })
    }
}

export default Popup



//const addCardPopup = new PopupWithForm(".popup_type_add");
//addCardPopup.setEventListener()

//const imagePopup = new PopupWithImage(".popup_type_image");
//imagePopup.setEventListener()