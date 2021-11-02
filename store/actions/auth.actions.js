import {URL_AUTH_API, URL_SIGNING_API, URL_LOOKUP_API} from '../../constants/databas.js';

export const SIGNUP = 'SIGNUP'
export const LOGIN = 'LOGIN'
export const LOOKUP = 'LOOKUP'

export const signup = (email, password) => {
    return async dispatch => {
      const response = await fetch(URL_AUTH_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });
  
      if (!response.ok) {
        const errorResponse = await response.json();
        const errorID = errorResponse.error.message;
  
        let message = 'No se ha podido registrar';
        if (errorID === 'EMAIL_EXISTS') message = 'Este email ya está registrado';
  
        throw new Error(message);
      }
  
      const data = await response.json();
  
      dispatch({
        type: SIGNUP,
        token: data.idToken,
        userId: data.localId,
      });
    }
  }
  
  export const login = (email, password) => {
    return async dispatch => {
      const response = await fetch(URL_SIGNING_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });
  
      if (!response.ok) {
        const errorResponse = await response.json();
        const errorID = errorResponse.error.message;
  
        let message = 'No se ha podido ingresar';
        if (errorID === 'EMAIL_NOT_FOUND') message = 'Este email no se encuentra registrado';
  
        throw new Error(message);
      }
  
      const data = await response.json();
  
      dispatch({
        type: LOGIN,
        token: data.idToken,
        userId: data.localId,
      });
    }
  }
  export const lookupUser = (token) => {
  return async dispatch => {
    const response = await fetch(URL_LOOKUP_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idToken: token,
      }),
    });

    const data = await response.json();

    dispatch({
      type: LOOKUP,
      data,
    });
  }
}