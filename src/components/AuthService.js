import decode from 'jwt-decode';

export default class AuthService {

    constructor(domain) {
        this.domain = domain || "https://moonwalk-dev.herokuapp.com" //API server domain
        this.fetch = this.fetch.bind(this)
        this.login = this.login.bind(this)
        this.getProfile = this.getProfile.bind(this) 
    }

    login(email, password) {
        // Get a token from api server using the fetch api
        return this.fetch(`${this.domain}/auth/login`, {
            method: 'POST',
            body : JSON.stringify({
                email,
                password
            })
        }).then(res => {
            this.setToken(res.token) // set token in local storage
            return Promise.resolve(res);
        })
    }

    logDistance(userId, method, distance) {
        return this.fetch(`${this.domain}/api/exercise`, {
            method: 'POST',
            body : JSON.stringify({
                userId,
                method,
                distance
            })
        })
    }

    loggedIn() {
        //Checks if there is a saved token and if it is still valid
        const token = this.getToken() // Get token from local storage
        return !!token && !this.isTokenExpired(token)
    }

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            } else return false;
        }
        catch (err) {
            return false;
        }
    }

    setToken(idToken) {
        // Saves user token to local storage
        localStorage.setItem('id_token', idToken)
    }

    getToken() {
        // Retrieves the user token from localstorage
        return localStorage.getItem('id_token')
    }

    logout() {
        localStorage.removeItem('id_token');
    }

    getProfile() {
        // Use jwt-decode to decode the token
        return decode(this.getToken());
    }

    fetch(url, options) {
        // performs api calls sending the required authentication headers
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        // Set authorization header
        if (this.loggedIn()) {
            headers['Authorization'] = 'Bearer ' + this.getToken()
        }

        return fetch(url, {
            headers,
            ...options
        })
        .then(this._checkStatus)
        .then(response => response.json())
    }

    _checkStatus(response) {
        // raises an error in case response status is not a success
        if (response.status >= 200 && response.status < 300) {
            return response
        } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
        }
    }
}