/* eslint-disable react/no-unescaped-entities */
import { Grid, Typography } from '@mui/material';
import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FiveWaveforms from '../../../assets/images/courses/course-2-understanding/fivewaveforms.png';
import { styles } from '../styles';

const waveforms = [{
  name: 'P wave - atrial depolarisation',
  description: 'The P wave represents the spread of a stimulus through the atria (atrial depolarization).',
},
{
  name: 'QRS complex – ventricular depolarization',
  description: ' The QRS waveform, or complex, represents stimulus spread through the ventricles (ventricular depolarization). As the name implies, the QRS set of deflections (complex) includes one or more specific waves, labeled as Q, R, and S.',
},
{
  name: 'ST segment - ventricular depolarisation',
  description: 'The ST segment shows when the ventricle is contracting but no electricity is flowing through it. The ST segment usually appears as a straight, level line between the QRS complex and the T wave.',
},
{
  name: 'T wave - ventricular depolarisation',
  description: 'The T wave shows when the lower heart chambers are resetting electrically and preparing for their next muscle contraction.',
},
{
  name: 'U wave - ventricular depolarisation',
  description: ' The U wave is a small deflection sometimes seen just after the T wave. It represents the final phase of ventricular repolarization, although its exact mechanism is not known.',
},
];

export default function UnderstandingWaves() {
  const [selectedWave, setSelectedWave] = React.useState('');

  return (
    <div>
      <Typography variant="h5" sx={styles.sectionTitle}>Five Basic Waveforms</Typography>
      <Grid container>
        <Grid item xs={6} sx={{ paddingLeft: '2%' }}>
          <Typography variant="h6" sx={{ marginTop: '7%' }}>The Five Basic Waveforms</Typography>
          <Typography sx={{ marginTop: '2%' }} variant="body1" align="left">
            Click on each of the waveforms to find out more:
          </Typography>
          <Stack sx={{ marginTop: '1%' }} spacing={1}>
            {waveforms.map((wv, index) => (
              <Button sx={{ boxShadow: 5 }} variant={wv.description === selectedWave ? 'contained' : 'outlined'} onClick={() => setSelectedWave(wv.description)}>{`${(index + 1)}. ${wv.name}`}</Button>
            ))}
          </Stack>
          <Typography sx={{ marginTop: '2%' }} variant="body1" align="left">
            {selectedWave}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <figure>
            <img src={FiveWaveforms} style={styles.understandingBasicWaves.image} alt="normalsr" />
            <figcaption>
              The P wave represents atrial depolarization. The PR
              interval is the time from initial stimulation of the atria to initial
              stimulation of the ventricles. The QRS complex represents
              ventricular depolarization. The ST segment, T wave, and U wave
              are produced by ventricular repolarization. .
            </figcaption>
          </figure>
        </Grid>
      </Grid>
    </div>
  );
}
