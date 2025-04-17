import { Container } from './App.styled';
import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions.jsx/FeddbackOption';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleCounterFeedback = ({ target: { name } }) => {
    this.setState((prevState, props) => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    const total = good + bad + neutral;

    return total;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() === 0) {
      return 0;
    }
    const positiveFeedback =
      (this.state.good * 100) / this.countTotalFeedback();
    return Math.round(positiveFeedback);
  };

  render() {
    const { good, bad, neutral } = this.state;
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleCounterFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() >= 1 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positiveFeedback={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </Container>
    );
  }
}
