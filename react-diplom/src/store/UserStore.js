import {makeAutoObservable, makeObservable} from "mobx";

export default class UserStore {


    constructor() {
        this._isAuth = false
        this._user = {}
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }

    setUser({id, login}) {
        this._user = {id: id, login: login}
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }
  
}

 