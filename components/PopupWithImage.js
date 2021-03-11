import Popup from "./Popup.js"

class PopupWithImage extends Popup {
    constructor (popupSelector) {
        super(popupSelector);
    }

    open (link, name) {
        link = this._popupElement.querySelector(".popup__image");
        name = this._popupElement.querySelector(".popup__image-title");
        super.open();
    }
}

export default PopupWithImage;