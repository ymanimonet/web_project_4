export default class UserInfo {
    constructor({profileNameSelector, profileDescriptionSelector, avatar}) {
        this._profileName = profileNameSelector;
        this._profileDescription = profileDescriptionSelector;
        this._name = document.querySelector(this._profileName);
        this._about = document.querySelector(this._profileDescription);
        this._avatar = document.querySelector(avatar);
    }

    getUserInfo () {
        return {name: this._name.innerText, about: this._about.innerText};
        
    }

    setUserInfo (name, about, avatar, id) {
        this._name.innerText = name;
        this._about.innerText = about;
        this._avatar.src = avatar;
        this.id = id;
    }
}
