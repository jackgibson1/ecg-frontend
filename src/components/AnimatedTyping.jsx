import React from 'react';
import Typing from 'react-typing-animation';

const AnimatedTyping = (props) => {
  // eslint-disable-next-line react/prop-types
  const { text } = props;
  return (
    <Typing>
      <span>{text}</span>
    </Typing>
  );
};

export default AnimatedTyping;
