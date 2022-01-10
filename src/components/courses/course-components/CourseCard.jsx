import * as React from 'react';
// import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CourseDialog from './CourseDialog';
// import Fab from '@mui/material/Fab';
// import NotStartedIcon from '@mui/icons-material/NotStarted';
import CircularProgressWithLabel from './CircularProgressWithLabel';
// import theme from './theme';

const styles = {
  media: {
    height: '100px',
    paddingTop: '56.25%', // 16:9,
  },
};

export default function CourseCard(props) {
  const [open, setOpen] = React.useState(false);

  const {
    // eslint-disable-next-line react/prop-types
    image, title, description, sections, path,
  } = props;

  return (
    <Card sx={{
      maxWidth: 345, border: 2, borderRadius: 2, boxShadow: 'true',
    }}
    >
      <CardMedia
        // eslint-disable-next-line global-require
        image={image}
        style={styles.media}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Fab color="primary" variant="extended">
          <NotStartedIcon sx={{ mr: 2 }} />
          Begin
        </Fab> */}
        <CourseDialog
          title={title}
          description={description}
          path={path}
          sections={sections}
          open={open}
          setOpen={setOpen}
        />
        <CircularProgressWithLabel value="50" />
      </CardActions>

    </Card>
  );
}
