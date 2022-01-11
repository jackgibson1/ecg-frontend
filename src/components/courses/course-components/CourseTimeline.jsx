/* eslint-disable react/prop-types */
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
// import TimelineDot from '@mui/lab/TimelineDot';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function CourseTimeline(props) {
  // eslint-disable-next-line react/prop-types
  const { sections } = props;
  return (
    <Timeline position="alternate">
      {sections.map((section, index) => (
        <TimelineItem key={Math.random()}>
          <TimelineSeparator>
            <FavoriteIcon variant="outlined" color="primary" />
            { (index !== sections.length - 1) ? (
              <TimelineConnector />) : (null)}

          </TimelineSeparator>
          <TimelineContent>{section}</TimelineContent>
        </TimelineItem>
      ))}

    </Timeline>
  );
}
