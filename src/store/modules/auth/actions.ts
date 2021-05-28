export default {
  async login(context: any, payload: any) {
    const res = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAIj2iR5Pfg_LlwVv_vWsin8iBz3Styxxc',
      {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true
        })
      }
    );

    const resData = await res.json();

    if (!res.ok) {
      const error = new Error(resData.message || 'Failed to authenticate');
      throw error;
    }

    context.commit('setUser', {
      token: resData.idToken,
      userId: resData.localId,
      tokenExpiration: resData.expiresIn
    });
  },
  async signup(context: any, payload: any) {
    const res = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAIj2iR5Pfg_LlwVv_vWsin8iBz3Styxxc',
      {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true
        })
      }
    );

    const resData = await res.json();

    if (!res.ok) {
      const error = new Error(resData.message || 'Failed to authenticate');
      throw error;
    }

    context.commit('setUser', {
      token: resData.idToken,
      userId: resData.localId,
      tokenExpiration: resData.expiresIn
    });
  }
};
