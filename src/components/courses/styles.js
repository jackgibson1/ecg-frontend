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
  sectionTitle: {
    marginTop: '2%',
    fontWeight: 'bold',
    textDecoration: 'underline',
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
      marginTop: '5%',
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
