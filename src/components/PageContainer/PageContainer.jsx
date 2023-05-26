import React from 'react';
import { Pageontainer } from './PageContainer.styled';
import PropTypes from 'prop-types';

export const PageContainer = ({ children }) => {
  return (
    <Pageontainer>
      <main>{children}</main>
    </Pageontainer>
  );
};

PageContainer.propTypes = {
   children: PropTypes.any.isRequired,
};
