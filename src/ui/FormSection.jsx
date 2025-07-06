import React from 'react';
import PropTypes from 'prop-types';
import './FormSection.css';

const FormSection = ({ children, title }) => (
  <div className="form-section">
    {title && <div className="section-title">{title}</div>}
    {children}
  </div>
);

FormSection.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default FormSection; 