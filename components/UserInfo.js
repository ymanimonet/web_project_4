export default class UserInfo {
    constructor({profileNameSelector, profileDescriptionSelector}) {
        this._profileName = profileNameSelector;
        this._profileDescription = profileDescriptionSelector;
        this._name = document.querySelector(this._profileName);
        this._description = document.querySelector(this._profileDescription);
    }

    getUserInfo () {
        return [this._name.innerText, this._description.innerText];
    }

    setUserInfo (name, description) {
        this._name.innerText = name;
        this._description.innerText = description;
    }
}
