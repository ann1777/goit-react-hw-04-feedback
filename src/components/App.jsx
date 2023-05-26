import { Component } from 'react'
import { Section } from './Section/Section';
import { PageContainer } from './PageContainer/PageContainer';
import { GlobalStyle } from './GlobalStyle';
import { Statistic } from './Statistic/Statistic';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });


  const leaveFeedback = type => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

 
  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    if (totalFeedback === 0) {
      return 0;
    }
    return Math.round((feedback.good / totalFeedback) * 100);
  };


  const totalFeedback = countTotalFeedback();
  const showStatistics = totalFeedback > 0;

  return (
    <PageContainer>
        <Section title="Please leave feedback">
          <FeedbackOptions  
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={leaveFeedback}>
          </FeedbackOptions>      
          </Section>
          <Section title="Statistic">
            {showStatistics ? (
              <Statistic
            {...feedback}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage()}>
            </Statistic>
            ) : (
              <Notification message="There is no feedback yet" />
            )}
          </Section>
        <GlobalStyle />
    </PageContainer>    
  );
};
 