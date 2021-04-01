export default class UserInfo {
    constructor({profileNameSelector, profileDescriptionSelector}) {
        this._profileName = profileNameSelector;
        this._profileDescription = profileDescriptionSelector;
        this._name = document.querySelector(this._profileName);
        this._about = document.querySelector(this._profileDescription);
    }

    getUserInfo () {
        return {name: this._name.innerText, about: this._about.innerText};
        
    }

    setUserInfo (name, about) {
        this._name.innerText = name;
        this._about.innerText = about;
    }
}
