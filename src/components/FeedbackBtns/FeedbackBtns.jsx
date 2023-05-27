import React from 'react';
import { FeedbackButton } from './FeedbackBtns.styled';
import PropTypes from 'prop-types';

export const BtnFeedback = ({
  icon: Icon = null, 
  type = 'button', 
  option, 
  onClick, 
}) =>  ( 
    <FeedbackButton
    type={type} 
    onClick={onClick}
    id={ option }>
      {Icon && <Icon size="14" />}
      { option }
    </FeedbackButton>
  );

BtnFeedback.propTypes = {
  icon: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
};
