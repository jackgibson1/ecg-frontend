import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CircularProgressWithLabel from './CircularProgressWithLabel';

const styles = {
  media: {
    height: '100px',
    paddingTop: '56.25%', // 16:9,
  },
};

export default function CourseCard(props) {
  // eslint-disable-next-line react/prop-types
  const { image, title, description } = props;

  return (
    <Card sx={{ maxWidth: 345 }}>
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
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
      <CircularProgressWithLabel value="50" />
    </Card>
  );
}
