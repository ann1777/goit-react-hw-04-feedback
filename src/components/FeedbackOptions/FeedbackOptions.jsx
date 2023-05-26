import PropTypes from 'prop-types';
import React from 'react';
import { BtnWrapper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <BtnWrapper>
      <BtnWrapper.BtnFeedback onClick={() => onLeaveFeedback('good')}>
      Good
      </BtnWrapper.BtnFeedback>
      <BtnWrapper.BtnFeedback onClick={() => onLeaveFeedback('good')}>
      Neutral
      </BtnWrapper.BtnFeedback>
      <BtnWrapper.BtnFeedback onClick={() => onLeaveFeedback('good')}>
      Bad
      </BtnWrapper.BtnFeedback>
      </BtnWrapper>
);


FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
