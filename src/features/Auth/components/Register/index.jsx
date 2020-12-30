import React from 'react';
import { useDispatch } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit';
import RegisterForm from '../RegsiterForm/index';
import { register } from 'features/Auth/userSlice'

Register.propTypes = {};

function Register(props) {
  const dispatch = useDispatch();
  const handleSubmit = async (values) => {
    console.log('values', values);
    try {
      //auto set username = email
      values.username = values.email;

      const action = register(values);
      const resultAction = await dispatch(action)
      const user = unwrapResult(resultAction)

      console.log('New user', user);
    } catch (error) {
      console.log('Failed to register:', error);
    }
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
