import React, { useState } from 'react';
import { Section } from './Section/Section';
import { Notification } from './Notifications/Notifications';
import { PageContainer } from './PageContainer/PageContainer';
import { GlobalStyle } from './GlobalStyle';
import { Statistic } from './Statistic/Statistic';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

const feedback = ['good', 'neutral', 'bad'];

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = type => {
    switch (type.target.attributes.option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    if (totalFeedback === 0) {
      return 0;
    }
    return Math.round((good / totalFeedback) * 100);
  };

  const totalFeedback = countTotalFeedback();
  const showStatistics = totalFeedback > 0;

  return (
    <PageContainer>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={leaveFeedback}
          options={feedback}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistic">
        {showStatistics ? (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistic>
        ) : (
          <Notification msg="There is no feedback yet" />
        )}
      </Section>
      <GlobalStyle />
    </PageContainer>
  );
};
