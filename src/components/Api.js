class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    gatherUserInfo() {
        return fetch(this._baseUrl + "/users/me", {
            headers: this._headers
          })
          .then(res => res.ok ? res.json() : Promise.reject(new Error(res.statusText)))
    }

    updateUserInfo({name, about}) {
        return fetch(this._baseUrl + "/users/me", {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name,
                about
            })
          })
          .then(res => res.ok ? res.json() : Promise.reject(new Error(res.statusText)))
    }

    updateAvatar({avatar}) {
        return fetch(this._baseUrl + "/users/me/avatar", {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar
            })
          })
          .then(res => res.ok ? res.json() : Promise.reject(new Error(res.statusText)));
    }
  
    getInitialCards() {
      return fetch(this._baseUrl + "/cards", {
          headers: this._headers
        })
        .then(res => res.ok ? res.json() : Promise.reject(new Error(res.statusText)))
    }

    addCard({name, link}) {
        return fetch(this._baseUrl + "/cards", {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name,
                link
            })
          })
          .then(res => res.ok ? res.json() : Promise.reject(new Error(res.statusText)));
    }

    removeCard(cardId) {
        return fetch(this._baseUrl + "/cards/" + cardId, {
                method: "DELETE",
                headers: this._headers
            })
            .then(res => res.ok ? res.json() : Promise.reject(new Error(res.statusText)));
    }

    addLike(cardId) {
        return fetch(this._baseUrl + "/cards/likes/" + cardId, {
                method: "PUT",
                headers: this._headers
            })
            .then(res => res.ok ? res.json() : Promise.reject(new Error(res.statusText)));
    }

    removeLike(cardId) {
        return fetch(this._baseUrl + "/cards/likes/" + cardId, {
                method: "DELETE",
                headers: this._headers
            })
            .then(res => res.ok ? res.json() : Promise.reject(new Error(res.statusText)));
    }
    
  
}

export default Api
  
