import React from 'react';
import Typing from 'react-typing-animation';

const AnimatedTyping = (props) => {
  // eslint-disable-next-line react/prop-types
  const { text } = props;
  return (
    <Typing>
      <h1>{text}</h1>
    </Typing>
  );
};

export default AnimatedTyping;
