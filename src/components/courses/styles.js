import { styled } from '@mui/material/styles';
import { Paper, Box } from '@mui/material';
import CourseBackground from '../../assets/images/courses/courseBG.jpeg';

export const styles = {
  courseLayout: {
    leftGrid: {
      paddingTop: '1%',
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: '2000px',
    },
    courseContents: {
      boxShadow: 10,
      border: 1,
      borderColor: 'blue',
    },
    courseSection: {
      boxShadow: 10,
      border: 1,
      borderColor: 'red',
    },
    savesAlert: {
      boxShadow: 10,
      borderRadius: 5,
      marginTop: '3%',
      marginLeft: '5px',
      marginRight: '5px',
    },
    stepperBox: {
      border: 1,
      borderRadius: 2,
      width: '25%',
      height: '50px',
      margin: 'auto',
      marginTop: '1%',
      boxShadow: 10,
    },
  },

  courseContentsList: {
    modal: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      textAlign: 'center',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      borderRadius: 10,
      p: 4,
    },
  },

  sectionTitle: {
    marginTop: '2%',
    fontWeight: 'bold',
    textDecoration: 'underline',
  },

  sectionStepper: {
    maxWidth: 400,
    flexGrow: 1,
    borderRadius: 3,
    backgroundColor: 'transparent',
  },

  understandingIntroduction: {
    image: {
      height: '300px',
      width: '500px',
      boxShadow: '7px 7px 7px rgb(0 0 0 / 0.5)',
      borderRadius: 10,
      marginTop: '7%',
    },
  },

  understandingWaves: {
    image: {
      height: '300px',
      width: '500px',
      marginTop: '3%',
      paddingRight: '5%',
    },
  },

  understandingBasicWaves: {
    image: {
      height: '300px',
      width: '500px',
      borderRadius: 10,
      marginTop: '7%',
    },
  },

  understandingSegmentsVsIntervals: {
    image: {
      height: '250px',
      width: '900px',
      borderRadius: 10,
    },
    paraOne: {
      marginTop: '1%',
      marginBottom: '1%',
      paddingLeft: '2%',
    },
  },

  understandingThreeSegments: {
    image: {
      height: '150px',
      width: '900px',
      borderRadius: 10,
    },
  },

  understandingFourIntervals: {
    numberList: {
      marginTop: '1%',
      paddingLeft: '2%',
    },
  },

  understandingFiveFourThree: {
    title: {
      marginTop: '1%',
      fontWeight: 'bold',
    },
    paraList: {
      marginTop: '1%',
      marginLeft: '2%',
    },
    image: {
      height: '350px',
      width: '500px',
      borderRadius: 10,
      marginTop: '1%',
    },
  },

  understandingElectrical: {
    steps: {
      marginTop: '15%',
      fontWeight: 'bold',
    },
  },

  understandingReading: {
    imageLeft: {
      height: '300px',
      width: '500px',
      borderRadius: 10,
      marginTop: '1%',
    },
    imageRight: {
      height: '180px',
      width: '500px',
      borderRadius: 10,
      marginTop: '1%',
    },
  },

  understandingTwelveLeads: {
    figure: { display: 'inline-block', textAlign: 'left' },
    image: { height: '250px', width: '500px', borderRadius: 10, boxShadow: '7px 7px 7px rgb(0 0 0 / 0.5)', marginTop: '1%' },
  },

  understandingElectrodes: {
    figure: { display: 'inline-block', textAlign: 'left' },
    image: { height: '220px', width: '500px', boxShadow: '7px 7px 7px rgb(0 0 0 / 0.5)', borderRadius: 5, marginTop: '1%' },
  },

  understandingLeads: {
    figure: { display: 'inline-block', textAlign: 'left' },
    image: { height: '250px', width: '600px', boxShadow: '7px 7px 7px rgb(0 0 0 / 0.5)', borderRadius: 5, marginTop: '1%' },
  },
  understandingWaveformOne: {
    gridLeft: { marginTop: '10px', paddingLeft: '2%' },
    image: { height: '300px', width: '400px', boxShadow: '7px 7px 7px rgb(0 0 0 / 0.5)', borderRadius: 10, marginTop: '5%' },
  },
  understandingWaveformTwo: {
    gridLeft: { marginTop: '10px', paddingLeft: '2%' },
    figure: { display: 'inline-block', textAlign: 'left' },
    image: { height: '250px', width: '400px', boxShadow: '7px 7px 7px rgb(0 0 0 / 0.5)', borderRadius: 10, marginBottom: '2%' },
  },
  understandingPathology: {
    gridLeft: { marginTop: '10px', paddingLeft: '2%' },
    figure: { display: 'inline-block', textAlign: 'left' },
    image: { height: '250px', width: '400px', borderRadius: 10, marginBottom: '2%', boxShadow: '7px 7px 7px rgb(0 0 0 / 0.5)' },
  },
  understandingCardiac: {
    figure: { display: 'inline-block', textAlign: 'left' },
    image: { height: '250px', width: '400px', boxShadow: '7px 7px 7px rgb(0 0 0 / 0.5)', borderRadius: 10 },
  },
  understandingNormal: {
    figure: { display: 'inline-block', textAlign: 'left' },
    image: { height: '230px', width: '400px', boxShadow: '7px 7px 7px rgb(0 0 0 / 0.5)', borderRadius: 10 },
  },
  understandingRight: {
    figure: { display: 'inline-block', textAlign: 'left' },
    image: { height: '230px', width: '400px', boxShadow: '7px 7px 7px rgb(0 0 0 / 0.5)', borderRadius: 10 },
  },
  understandingLeft: {
    figure: { display: 'inline-block', textAlign: 'left' },
    image: { height: '270px', width: '500px', boxShadow: '7px 7px 7px rgb(0 0 0 / 0.5)', borderRadius: 10 },
  },
};

export const CourseContentsLayout = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  minHeight: '530px',
  maxHeight: '700px',
  height: '50vh',
  borderRadius: 20,
  marginLeft: '5px',
  marginRight: '5px',
}));

export const CourseSectionLayout = styled(Box)(({ theme }) => ({
  borderLeft: 10,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary,
  minHeight: '530px',
  maxHeight: '700px',
  height: '50vh',
  borderRadius: 20,
  width: '100%',
  backgroundImage: `url(${CourseBackground})`,
  backgroundSize: 'cover',
  paddingRight: '1%',
}));
