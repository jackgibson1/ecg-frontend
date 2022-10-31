import React, { useRef } from 'react';
import HomeHero from './HomeHero';
import HomeSection1 from './HomeSection1';
import HomeSection2 from './HomeSection2';
import { styles } from './home.styles';

function Home(props) {
  const scrollRef = useRef(null);

  return (
    <>
      <HomeHero scrollRef={scrollRef} />
      <HomeSection1 scrollRef={scrollRef} history={props.history} />
      <hr style={styles.home.hr} />
      <HomeSection2 history={props.history} />
      <hr style={styles.home.hr} />
    </>
  );
}

export default Home;
