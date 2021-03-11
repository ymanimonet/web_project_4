export default class UserInfo {
    constructor({profileNameSelector, profileDescriptionSelector}) {
        this._profileName = profileNameSelector;
        this._profileDescription = profileDescriptionSelector;
    }

    getUserInfo () {
        return [this.document.querySelector(this._profileName).innerText, this.document.querySelector(this._profileDescription).innerText];
    }

    setUserInfo (name, description) {
        this.document.querySelector(this._profileName).innerText = name;
        this.document.querySelector(this._profileDescription).innerText = description;
    }
}
