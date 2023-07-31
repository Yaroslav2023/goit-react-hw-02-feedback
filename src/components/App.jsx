import React, { Component } from 'react';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <Section title="Please leave feedback">
        {/* <FeedbackOptions options={ } onLeaveFeedback={ }></FeedbackOptions> */}
        {/* <Statistics good={} neutral={} bad={} total={countTotalFeedback()} positivePercentage={}></Statistics> */}
      </Section>
    );
  }
}

export default App;
