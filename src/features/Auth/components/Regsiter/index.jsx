import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegsiterForm';

Regsiter.propTypes = {};

function Regsiter(props) {
  const handleSubmit = (values) => {
    console.log('Form submit', values);
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Regsiter;
