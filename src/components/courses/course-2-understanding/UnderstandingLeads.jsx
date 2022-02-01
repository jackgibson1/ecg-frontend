/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import { Grid, Typography } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import chestLeads from '../../../assets/images/courses/course-2-understanding/chestLeads.png';
import otherLeads from '../../../assets/images/courses/course-2-understanding/otherLeads.png';

const styles = {
  figure: { display: 'inline-block', textAlign: 'left' },
  image: { height: '250px', width: '600px', border: '2px solid #FF0000', borderRadius: 5, marginTop: '1%' },
};

const tabOutputs = [
  (
    <>
      <Grid item xs={7}>
        <img src={chestLeads} style={styles.image} alt="normalsr" />
      </Grid>
      <Grid item xs={5} sx={{ paddingLeft: '2%' }}>
        <Typography variant="h6" align="left">
          Chest Leads:
        </Typography>
        <ol style={{ textAlign: 'left' }}>
          <li> <b>V1:</b> septal view of the heart.</li>
          <li><b>V2:</b> septal view of the heart.</li>
          <li><b>V3:</b> anterior view of the heart.</li>
          <li><b>V4:</b> anterior view of the heart.</li>
          <li><b>V5:</b> lateral view of the heart.</li>
          <li><b>V6:</b> lateral view of the heart.</li>
        </ol>
      </Grid>
    </>
  ),
  (
    <>
      <Grid item xs={5} sx={{ paddingLeft: '2%' }}>
        <Typography variant="h6" align="left">
          Other Leads:
        </Typography>
        <ol style={{ textAlign: 'left' }}>
          <li> <b>Lead I:</b> lateral view (calculated by analysing activity between the RA and LA electrodes).</li>
          <li><b>Lead II:</b> inferior view (calculated by analysing activity between the RA and LL electrodes).</li>
          <li><b>Lead III:</b> inferior view (calculated by analysing activity between the LA and LL electrodes).</li>
          <li><b>aVR:</b> lateral view (calculated by analysing activity between LA+LL to RA).</li>
          <li><b>aVL:</b> lateral view (calculated by analysing activity between RA+LL to LA).</li>
          <li><b>aVF:</b> inferior view (calculated by analysing activity between RA+LA to LL).</li>
        </ol>
      </Grid>
      <Grid item xs={7}>
        <img src={otherLeads} style={styles.image} alt="normalsr" />
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
      <Typography variant="h5" sx={{ marginTop: '1%', fontWeight: 'bold' }}>How The 12-Lead ECG Works (3/4)</Typography>
      <Grid container justify="left">
        <Grid item xs={12} sx={{ paddingLeft: '2%' }}>
          <Typography variant="h5" align="left" sx={{ fontWeight: 'bold' }}><u>Leads</u></Typography>
          <Typography variant="h6" align="left" sx={{ marginTop: '1%' }}>
            What do we know so far?
          </Typography>
          <ul style={{ textAlign: 'left' }}>
            <li>An ECG lead is a graphical representation of the heart’s electrical activity which is calculated by analysing data from several ECG electrodes.</li>
          </ul>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ width: '100%' }}>
            <Tabs value={selectedTab} onChange={handleTabChange} centered>
              <Tab label="Chest Leads" />
              <Tab label="Other Leads" />
            </Tabs>
          </Box>
        </Grid>
        {tabOutputs[selectedTab]}
      </Grid>
    </div>
  );
}
