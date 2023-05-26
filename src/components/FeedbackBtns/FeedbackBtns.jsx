import React from 'react';
import { FeedbackButton } from './FeedbackBtns.styled';
import PropTypes from 'prop-types';

export const BtnFeedback = ({ options, onClick }) =>  (
    <FeedbackButton onClick={onClick}>
      { options }
    </FeedbackButton>
  );

BtnFeedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};
