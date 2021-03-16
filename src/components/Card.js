export default class Card {
    constructor({data, handleCardClick}, templateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
    }

    _likeButton() {
        const cardLikeButton = this._card.querySelector(".element__heart");
        cardLikeButton.classList.toggle("element__heart_active");
    }

    _deleteButton() {
        this._card.remove();
    }

    _setEventListeners() {
        this._card.querySelector(".element__heart")
          .addEventListener("click", () => this._likeButton());

        this._card.querySelector(".element__delete")
          .addEventListener("click", () => this._deleteButton());

        this._card.querySelector(".element__photo") 
          .addEventListener("click", () => this._handleCardClick(this._link, this._name));

    }

    _getCardTemplate() {
        const cardTemplate = document.querySelector(this._templateSelector).content.querySelector(".element");
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

