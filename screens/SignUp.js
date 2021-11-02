import React, { useCallback, useReducer } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import AuthScreenWrapper from '../components/AuthScreenWrapper.js';

import { signup } from '../store/actions/auth.actions'
import Input from '../components/InputUser.js';
import { formReducer, FORM_INPUT_UPDATE } from '../store/reducers/formReducer';

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const [formState, formDispatch] = useReducer(formReducer, {
    inputValues: {
      email: '',
      password: '', 
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });

  const handleSignUp = () => {
    if (formState.formIsValid) {
      dispatch(signup(formState.inputValues.email, formState.inputValues.password));
    } else {
      Alert.alert(
        'Formulario inválido',
        'Ingresa email y usuario válido',
        [{ text: 'Ok' }]
      );
    }
  }

  const onInputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {
    formDispatch({
      type: FORM_INPUT_UPDATE,
      value: inputValue,
      isValid: inputValidity,
      input: inputIdentifier,
    });
  }, [formDispatch]);

  return (
    <AuthScreenWrapper
      title="REGISTRO"
      message="¿Ya tienes cuenta?"
      btnText="Ingresar"
      path="Login"
    >
      <Input
        id="email"
        label="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        errorText="Por favor ingresa un email válido"
        required
        email
        onInputChange={onInputChangeHandler}
      />
      <Input
        id="password"
        label="Password"
        secureTextEntry
        autoCapitalize="none"
        errorText="La contraseña debe ser mínimo 6 caracteres"
        required
        minLength={6}
        onInputChange={onInputChangeHandler}
      />
      <Button
        title="REGISTRARME"
        onPress={handleSignUp}
        buttonStyle={styles.button}
      />
    </AuthScreenWrapper>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#C5AC96',
    marginVertical: 20,
  },
});

export default RegisterScreen;
