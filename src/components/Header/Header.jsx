import React from 'react';
import { PageHeader } from './Header.styled';
import PropTypes from 'prop-types';

export const Header = ({ title }) => {
  return <PageHeader>{title}</PageHeader>;
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
