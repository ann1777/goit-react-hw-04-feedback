import React from 'react';
import { FeedbackButton } from './FeedbackBtns.styled';
import PropTypes from 'prop-types';

export const BtnFeedback = ({
  Icon: Icon = null, 
  type = 'button', 
  feed, 
  onClick, 
}) =>  ( 
    <FeedbackButton
    type={type} 
    onClick={onClick}
    id={ feed }>
      {Icon && <Icon size="14" />}
      { feed }
    </FeedbackButton>
  );

BtnFeedback.propTypes = {
  icon: PropTypes.any.isRequired,
  feed: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
