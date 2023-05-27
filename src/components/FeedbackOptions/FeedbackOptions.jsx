import PropTypes from 'prop-types';
import { BtnFeedback } from 'components/FeedbackBtns/FeedbackBtns';
import React from 'react';
import { BtnWrapper } from './FeedbackOptions.styled';
import { Icons } from './Icons';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  console.log(options);
  return (
    <BtnWrapper>
     {options.map(option => {
      return (
        <BtnFeedback
          // key={option}
          type="button"
          icon={Icons[option]}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </BtnFeedback>
      ) 
     })}
    </BtnWrapper>
  )
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

// export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
//   console.log(options);
//   return (
//     <BtnWrapper>
//       {options.map(option => {
//         return (
//           <li key={option}>
//             <BtnFeedback
//               /* key={option} */
//               icon={Icons[option]}
//               type="button"
//               onClick={() => onLeaveFeedback(option)}
//             >
//               {option}
//             </BtnFeedback>
//           </li>
//         );
//       })}
//     </BtnWrapper>
//   );
// };