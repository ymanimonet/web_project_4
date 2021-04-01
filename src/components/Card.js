export default class Card {
    constructor({data, handleCardClick, handleDeleteClick}, templateSelector, api) {
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._id = data._id;
        this._ownerId = data.owner._id;
        this._owner = data.owner;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._handleDeleteClick = handleDeleteClick;
        this._api = api;
    }

    _likeButton() {
        const cardLikeButton = this._card.querySelector(".element__heart");
        cardLikeButton.classList.toggle("element__heart_active");
    }

    _countLikes() {
        const cardLikes = this._card.querySelector(".element__number");
        cardLikes.textContent = this._likes.length
    }

    _ownerLike() {
        const owner = this._likes.find(like => like._id === this._owner);
        return owner;
    }

    getId() {
        return this._id;
    }

    deleteCard() {
        this._card.remove();
    }

    _setEventListeners() {
        const deleteButton = this._card.querySelector(".element__delete");
        /*deleteButton.addEventListener('click', () => {
            this._handleDeleteClick();
        }) */

       if (this._owner === this._ownerId) {
            deleteButton.addEventListener('click', () => {
                this._handleDeleteClick(this.id());
            })
        } else {
            deleteButton.classList.add("element__hidden");
        }; 

        const cardLikeButton = this._card.querySelector(".element__heart");
        cardLikeButton.addEventListener("click", () => {
            this._likeButton();

            if (this._ownerLike(this._owner)) {
                this._api.removeLike(this._id);
                this._likes = this._likes.filter(like => like._id !== this._owner);
            } else {
                this._api.addLike(this._id);
                this._likes.push({ _id: this._owner });
            };

            this._countLikes();
        });

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
        this._countLikes();
      
        return this._card;   
    }
}

