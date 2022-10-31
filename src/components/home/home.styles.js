/* eslint-disable import/prefer-default-export */
import heroImage from '../../assets/images/home/heroimage1.jpg';

export const styles = {
  home: {
    hr: { border: '0', clear: 'both', display: 'block', width: '96%', backgroundColor: '#000000', height: '2px', marginTop: '5%', marginBottom: '5%' },
  },
  homeHero: {
    paperContainer: { backgroundImage: `url(${heroImage})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100%', height: '95vh', display: 'flex', alignItems: 'center' },
    text: { fontWeight: 'bold', marginTop: '30vh' },
    button: { color: '#FFFFFF', marginTop: '2%', fontWeight: 'bold', borderRadius: 3, boxShadow: 20, backdropFilter: 'blur(20px)', width: '400px' },
  },
  section1: {
    outerBox: { marginLeft: '5%', marginTop: '10%' },
    viewCoursesButton: { color: '#EE3233', boxShadow: 10, marginTop: '2%', fontWeight: 'bold', borderRadius: 3, backdropFilter: 'blur(20px)', width: '400px' },
  },
  section2: {
    box: { paddingLeft: '5%', paddingRight: '5%', paddingTop: '2%' },
    animatedQuiz: { display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '100%', borderRadius: '75px' },
    button: { color: '#EE3233', boxShadow: 10, marginTop: '2%', fontWeight: 'bold', borderRadius: 3, backdropFilter: 'blur(20px)', width: '90%' },
  },
};
