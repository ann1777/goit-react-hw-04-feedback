import React from 'react';
import PropTypes from 'prop-types';
import { HiOutlineHeart } from 'react-icons/hi';
import {
  MdThumbDownOffAlt,
  MdSentimentNeutral,
  MdOutlineSummarize,
  MdPercent,
} from 'react-icons/md';
import { StatList, StatDescrip } from './Statistic.styled';
import { Notification } from '../Notifications/Notifications';

export const Statistic = ({
  good,
  neutral,
  bad,
  total = 0,
  positivePercentage = 0,
}) => {
  return total ? (
    <StatList>
      <li>
        <StatDescrip>
          <HiOutlineHeart size="14" />
          Good: <span>{good}</span>
        </StatDescrip>
      </li>
      <li>
        <StatDescrip>
          <MdSentimentNeutral size="14" />
          Neutral: <span>{neutral}</span>
        </StatDescrip>
      </li>
      <li>
        <StatDescrip>
          <MdThumbDownOffAlt size="14" />
          Bad: <span>{bad}</span>
        </StatDescrip>
      </li>
      <li>
        <StatDescrip>
          <MdOutlineSummarize size="14" />
          Total: <span>{total}</span>
        </StatDescrip>
      </li>
      <li>
        <StatDescrip>
          <MdPercent size="14" />
          Positive feedback: <span>{positivePercentage}%</span>
        </StatDescrip>
      </li>
    </StatList>
  ) : (
    <Notification msg="There is no feedback" />
  );
};

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
