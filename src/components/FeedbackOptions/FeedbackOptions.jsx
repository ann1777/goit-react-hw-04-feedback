import PropTypes from 'prop-types';
import React from 'react';
import { BtnWrapper } from './FeedbackOptions.styled';

const FeedbackOptions = ({  options, onLeaveFeedback }) => {
  return (
      options.map(option => (
          <BtnWrapper feed={option} onClick={onLeaveFeedback} key={option}>
                {option}
          </BtnWrapper>
        )
      ))
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;