import Popup from "./Popup.js"

class PopupWithImage extends Popup {
    constructor (popupSelector) {
        super(popupSelector);
        this._image = this._popupElement.querySelector(".popup__image");
        this._title = this._popupElement.querySelector(".popup__image-title");
    }

    open (link, name) {
        this._image.src = link;
        this._title.textContent = name;
        super.open();
    }
}

export default PopupWithImage;