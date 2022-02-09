/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import HomeHero from './HomeHero';
import HomeSection1 from './HomeSection1';
import HomeSection2 from './HomeSection2';

const styles = {
  hr: {
    border: '0',
    clear: 'both',
    display: 'block',
    width: '96%',
    backgroundColor: '#000000',
    height: '2px',
    marginTop: '5%',
    marginBottom: '5%',
  },
};

function Home(props) {
  const scrollRef = useRef(null);
  return (
    <>
      <HomeHero scrollRef={scrollRef} />
      <HomeSection1 scrollRef={scrollRef} history={props.history} />
      <hr style={styles.hr} />
      <HomeSection2 history={props.history} />
      <hr style={styles.hr} />
    </>
  );
}

export default Home;
