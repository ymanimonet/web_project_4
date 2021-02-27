const imageWindow = document.querySelector(".popup_type_image");
const popupImage = imageWindow.querySelector(".popup__image");
const popupImageTitle = imageWindow.querySelector(".popup__image-title");

//open any popup
const openPopup = (popup) => {
    popup.classList.add("popup_opened");
    document.addEventListener("keydown", closeByEscape);
}

//close popup with esc key
const closeByEscape = (evt) => {
    if (evt.key === "Escape") {
        const openedPopup = document.querySelector(".popup_opened");
        closePopup(openedPopup);
    }
}

class Card {
    constructor(data, templateSelector) {
        this._data = data;
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        //console.log(this);

    }

    _likeButton() {
        const cardLikeButton = this._card.querySelector(".element__heart");
        cardLikeButton.classList.toggle("element__heart_active");
    }

    _deleteButton() {
        this._card.remove();
    }

    _cardPopup() {
        popupImage.src = this._link;
        popupImageTitle.textContent = this._name;
        popupImage.alt = this._name;
              
        openPopup(imageWindow);
    }

    _setEventListeners() {
        const cardLikeButton = this._card.querySelector(".element__heart");
        const cardDeleteButton = this._card.querySelector(".element__delete");
        const cardImage = this._card.querySelector(".element__photo");
        
        //like button
        cardLikeButton.addEventListener("click", () => this._likeButton());
        cardDeleteButton.addEventListener("click", () => this._deleteButton());
        cardImage.addEventListener("click", () => this._cardPopup());
    }

    _getCardTemplate() {
        const cardTemplate = document.querySelector(".element-template").content.querySelector(".element");
        return cardTemplate;
    }

    createCard() {
        this._card = this._getCardTemplate().cloneNode(true);
      
        const cardImage = this._card.querySelector(".element__photo");
        const cardTitle = this._card.querySelector(".element__title");
    
        cardTitle.textContent = this._name;
        cardImage.src = this._link;
        cardImage.alt = this._name;

        this._setEventListeners();
      
        return this._card;   
    }
}

export default Card;
