import PropTypes from 'prop-types';
import React from 'react';
import { OptionsList, OptionItem, BtnWrapper } from './FeedbackOptions.styled';

const FeedbackOptions = ({  options, onLeaveFeedback }) => {
  return (
    <>
    <OptionsList>
      {options.map(option => {
        return (
          <OptionItem key={option}>
          <BtnWrapper.BtnFeedback onClick={onLeaveFeedback} option={option}>
                {option}
          </BtnWrapper.BtnFeedback>
          </OptionItem>
        );
      })}
    </OptionsList>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;