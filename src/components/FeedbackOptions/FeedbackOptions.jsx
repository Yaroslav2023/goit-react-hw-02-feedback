import cl from './feedbackOptions.module.css';
import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={cl.buttonsWrap}>
      {options.map(option => (
        <button
          className={cl.btn}
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
