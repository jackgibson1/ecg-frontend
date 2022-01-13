/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import CourseDialog from './CourseDialog';
import LinearProgressWithLabel from './LinearProgressWithLabel';

const styles = {
  media: {
    height: 200,
    width: '100%',
  },
  card: {
    maxWidth: 350,
    borderRadius: 20,
    margin: 'auto',
    transition: '0.3s',
    boxShadow: '0 8px 40px -12px rgba(0,0,0,1)',
    '&:hover': {
      boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
    },
  },
};

export default function CourseCard(props) {
  const [open, setOpen] = React.useState(false);

  const {
    // eslint-disable-next-line react/prop-types
    image, title, description, sections, path, position,
  } = props;

  // eslint-disable-next-line react/prop-types
  const percentComplete = position === 0 ? 0 : (position / sections.length) * 100;

  return (
    <Card style={styles.card}>
      <CardMedia>
        <img src={image} style={styles.media} alt="medic" />
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" align="center">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {description}
        </Typography>
        <hr />
      </CardContent>
      <CardActions align="center">
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <CourseDialog
              title={title}
              description={description}
              path={path}
              sections={sections}
              open={open}
              setOpen={setOpen}
            />
          </Grid>
          <Grid item xs={12} sx={{ marginTop: '2%' }}>
            <LinearProgressWithLabel value={percentComplete} />
          </Grid>
        </Grid>
      </CardActions>

    </Card>
  );
}
