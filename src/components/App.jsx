import { Component } from 'react'
import { Section } from './Section/Section';
import { PageContainer } from './PageContainer/PageContainer';
import { GlobalStyle } from './GlobalStyle';
import { Statistic } from './Statistic/Statistic';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = e => {
    this.setState({ [e]: this.state[e] + 1});
  }

  countTotalFeedback() {
    const values = Object.values(this.state);
    return values.reduce((acc, value) => acc + value, 0);
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return Math.round((good / totalFeedback) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;

  return (
    <PageContainer>
        <Section title="Please leave feedback">
          <FeedbackOptions  
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={this.leaveFeedback}>
          </FeedbackOptions>      
          </Section>
          <Section title="Statistic">
            <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback(this.state)}
            positivePercentage={this.countPositiveFeedbackPercentage(
              this.state
            )}>
            </Statistic>
          </Section>
        <GlobalStyle />
    </PageContainer>    
  );}
}
 