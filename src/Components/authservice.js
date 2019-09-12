import { decode } from 'jsonwebtoken';


export default class AuthService {
    constructor(domain) {
        this.domain = domain || 'http://localhost:3001';
        this.fetch = this.fetch.bind(this);
        this.login = this.login.bind(this);
        this.getProfile = this.getProfile.bind(this);
        this.logout = this.logout.bind(this);
    }


    login(user_name, password) {
        console.info(`${this.domain}/api/users/login`);
        return this.fetch(`${this.domain}/api/users/login`, {
            method: 'POST',
            body: JSON.stringify({
                user_name,
                password
            })

        }).then(res => {
            console.log(res);
            this.setToken(res.token)
            return Promise.resolve(res);
        })
    }

    loggedIn() {
        const token = this.getToken()
        return !!token && !this.isTokenExpired(token)
    }


    isTokenExpired(token) {
        try {
            const decoded = decode(token)
            if (decoded.exp < Date.now() / 1000) {
                return true
            }
            else return false
        }
        catch (err) {
            return false
        }
    }

    setToken(idToken) {
        if (typeof idToken !== 'undefined')
            localStorage.setItem('id_token', idToken);

    }

    getToken() {
        return localStorage.getItem('id_token')
    }

    logout() {
        localStorage.removeItem('id_token')

    }
    getProfile() {
        return decode(this.getToken())
    }

    fetch(url, options) {
        const headers = {
            'Accept': 'application/json',
            'content-Type': 'application/json'

        }

        if (this.loggedIn()) {
            headers['Authorisation'] = 'Bearer ' + this.getToken()
        }

        return fetch(url, { headers, ...options })
            .then(this._checkStatus)
            .then(response => {
                console.log(response, headers, options, url)
                return response.json()
            })
    }
    _checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response
        } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
        }
    }
}

