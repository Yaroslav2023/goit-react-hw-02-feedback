import React, { Component } from 'react';
import cl from './section.module.css';
import PropTypes from 'prop-types';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';

class Section extends Component {
  static defaultProps = {
    title: 'Please leave feedback',
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    title: this.props.title,
  };

  onClickFeedback = value => {
    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
  };

  render() {
    return (
      <section className={cl.section}>
        <h2 className={cl.title}>{this.state.title}</h2>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.onClickFeedback}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        ></Statistics>
      </section>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
