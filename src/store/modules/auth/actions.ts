let timer: any;

export default {
  async login(context: any, payload: any) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'login'
    });
  },
  async signup(context: any, payload: any) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'signup'
    });
  },
  async auth(context: any, payload: any) {
    const mode = payload.mode;
    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAIj2iR5Pfg_LlwVv_vWsin8iBz3Styxxc`;
    if (mode === 'signup') {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAIj2iR5Pfg_LlwVv_vWsin8iBz3Styxxc';
    }
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    });

    const resData = await res.json();

    if (!res.ok) {
      const error = new Error(resData.message || 'Failed to authenticate');
      throw error;
    }

    const expiresIn = +resData.expiresIn * 1000; // we get it in seconds, so *1000 for milliseconds
    const expirationDate = <string>(
      (<unknown>(new Date().getTime() + expiresIn))
    );

    localStorage.setItem('token', resData.idToken);
    localStorage.setItem('userId', resData.localId);
    localStorage.setItem('tokenExpiration', expirationDate);

    timer = setTimeout(() => {
      context.dispatch('autoLogout');
    }, expiresIn);

    context.commit('setUser', {
      token: resData.idToken,
      userId: resData.localId
    });
  },
  tryLogin(context: any) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const tokenExpiration = localStorage.getItem('tokenExpiration');

    const expiresIn = +tokenExpiration! - new Date().getTime();

    if (expiresIn < 0) {
      return;
    }

    timer = setTimeout(() => {
      context.dispatch('autoLogout');
    }, expiresIn);

    if (token && userId) {
      context.commit('setUser', {
        token: token,
        userId: userId
      });
    }
  },
  logout(context: any) {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('tokenExpiration');

    clearTimeout(timer);

    context.commit('setUser', {
      token: null,
      userId: null
    });
  },
  autoLogout(context: any) {
    context.dispatch('logout');
    context.commit('setAutoLogout');
  }
};
