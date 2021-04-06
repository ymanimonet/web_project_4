import Popup from "./Popup.js";

class PopupToDelete extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._button = this._popupElement.querySelector(".form__button");
    }

    handleConfirmClick(confirmClick) {
        this._confirmClick = confirmClick;
    }

    setEventListeners() {
        super.setEventListeners();
        this._button.addEventListener('click', () => {
            this._confirmClick();
        })
    } 
}


export default PopupToDelete;
