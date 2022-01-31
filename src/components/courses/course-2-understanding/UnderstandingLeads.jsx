/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import { Grid, Typography } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import chestElectrodes from '../../../assets/images/courses/course-2-understanding/chestelectrodes.jpeg';
import limbElectrodes from '../../../assets/images/courses/course-2-understanding/limbelectrodes.png';

const styles = {
  figure: { display: 'inline-block', textAlign: 'left' },
  image: { height: '220px', width: '500px', border: '2px solid #FF0000', borderRadius: 5, marginTop: '1%' },
};

const tabOutputs = [
  (
    <>
      <Grid item xs={5} sx={{ paddingLeft: '2%' }}>
        <Typography variant="h6" align="left">
          Chest Electrodes:
        </Typography>
        <ol style={{ textAlign: 'left' }}>
          <li> <b>V1:</b> 4th intercostal space at the right sternal edge </li>
          <li><b>V2:</b> 4th intercostal space at the left sternal edge</li>
          <li><b>V3:</b> midway between the V2 and V4 electrodes</li>
          <li><b>V4:</b> 5th intercostal space in the midclavicular line</li>
          <li><b>V5:</b> left anterior axillary line at the same horizontal level as V4</li>
          <li><b>V6:</b> left mid-axillary line at the same horizontal level as V4 and V5</li>
        </ol>
      </Grid>
      <Grid item xs={7}>
        <img src={chestElectrodes} style={styles.image} alt="normalsr" />
      </Grid>
    </>
  ),
  (
    <>
      <Grid item xs={5} sx={{ paddingLeft: '2%' }}>
        <Typography variant="h6" align="left">
          Limb Electrodes:
        </Typography>
        <ol style={{ textAlign: 'left' }}>
          <li> <b>White (Right Arm):</b> on the ulnar styloid process of the right arm.</li>
          <li><b>Black (Left Arm):</b> on the ulnar styloid process of the left arm.</li>
          <li><b>Red (Left Leg):</b> on the medial or lateral malleolus of the left leg.</li>
          <li><b>Green (Right Leg):</b> on the medial or lateral malleolus of the right leg.</li>
        </ol>
      </Grid>
      <Grid item xs={7}>
        <img src={limbElectrodes} alt="normalsr" />
      </Grid>
    </>
  ),
];

export default function UnderstandingLeads() {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleTabChange = (event, newTab) => {
    setSelectedTab(newTab);
  };
  return (
    <div>
      <Typography variant="h5" sx={{ marginTop: '1%', fontWeight: 'bold' }}>How The 12-Lead ECG Works (2)</Typography>
      <Grid container justify="left">
        <Grid item xs={12} sx={{ paddingLeft: '2%' }}>
          <Typography variant="h5" align="left" sx={{ fontWeight: 'bold' }}><u>Electrodes</u></Typography>
          <Typography variant="h6" align="left" sx={{ marginTop: '1%' }}>
            What do we know so far?
          </Typography>
          <ul style={{ textAlign: 'left' }}>
            <li>An ECG electrode is a conductive pad that is attached to the skin to record electrical activity.</li>
            <li>The data gathered from these electrodes allows the 12 leads of the ECG to be calculated (e.g. lead I is calculated using data from the electrodes on both the right and left arm).</li>
            <li>
              The electrodes used to generate a 12 lead ECG can be broken into two sections;
              {' '}
              <b>chest electrodes</b>
              {' '}
              and
              {' '}
              <b>limb electrodes:</b>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ width: '100%' }}>
            <Tabs value={selectedTab} onChange={handleTabChange} centered>
              <Tab label="Chest Electrodes" />
              <Tab label="Limb Electrodes" />
            </Tabs>
          </Box>
        </Grid>
        {tabOutputs[selectedTab]}
      </Grid>
    </div>
  );
}