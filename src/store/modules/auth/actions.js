let timer = null

export default {
    async logIn(context, payload) {
        return context.dispatch('auth', {
            ...payload,
            mode: 'login'
        })
    },
    async signUp(context, payload) {
        return context.dispatch('auth', {
            ...payload,
            mode: 'signup'
        })
    },
    async auth(context, payload) {
        const mode = payload.mode
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBHAMlUfgEuVnlSNEeem8fqTRDI8xJOB3w'

        if (mode == 'signup') {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBHAMlUfgEuVnlSNEeem8fqTRDI8xJOB3w'
        }

        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
        })

        const responseData = await response.json()

        if (!response.ok) {
            const error = new Error(responseData.error.message || 'Failed to authenticate.')
            throw error
        }

        const expiresIn = +responseData.expiresIn * 1000
        const expirationDate = new Date().getTime() + expiresIn

        timer = setTimeout(function () {
            context.dispatch('autoLogout')
        }, expiresIn)

        localStorage.setItem('token', responseData.idToken)
        localStorage.setItem('userId', responseData.localId)
        localStorage.setItem('tokenExpiration', expirationDate)

        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId
        })
    },
    tryLogin(context) {
        const token = localStorage.getItem('token')
        const userId = localStorage.getItem('userId')
        const tokenExpiration = localStorage.getItem('tokenExpiration')

        const expiresIn = +tokenExpiration - new Date().getTime()

        if (expiresIn < 0) {
            return
        }

        timer = setTimeout(() => {
            context.dispatch('autoLogout')
        }, expiresIn);

        if (token && userId) {
            context.commit('setUser', {
                token: localStorage.getItem('token'),
                userId: localStorage.getItem('userId')
            })
        }
    },
    logOut(context) {
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        localStorage.removeItem('tokenExpiration')
        clearTimeout(timer)
        context.commit('setUser', {
            token: null,
            userId: null
        })
    },
    autoLogout(context) {
        context.dispatch('logOut')
        context.commit('setAutoLogout')
    }
}