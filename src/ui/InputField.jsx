import React from 'react';
import PropTypes from 'prop-types';
import './InputField.css';

const InputField = ({ name, label, type = 'text', required = false, error, ...props }) => (
  <label className="input-group">
    {label && <span className="input-label">{label}{required && '*'}</span>}
    <input
      type={type}
      name={name}
      required={required}
      aria-invalid={!!error}
      aria-describedby={error ? `${name}-error` : undefined}
      {...props}
    />
    {error && <span className="input-error" id={`${name}-error`}>{error}</span>}
  </label>
);

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
};

export default InputField; 