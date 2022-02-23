/* eslint-disable react/no-unescaped-entities */
import { Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import heartIntroImage from '../../../assets/images/courses/course-1-anatomy/introduction.png';
import { styles } from '../styles';

// import all outside images
import aotraImage from '../../../assets/images/courses/course-1-anatomy/outside/aorta.png';
import arteriesImage from '../../../assets/images/courses/course-1-anatomy/outside/arteriestoheadarms.png';
import ivcImage from '../../../assets/images/courses/course-1-anatomy/outside/inferiorvenacava.png';
import leftAtriumImage from '../../../assets/images/courses/course-1-anatomy/outside/leftatrium.png';
import leftVentricleImage from '../../../assets/images/courses/course-1-anatomy/outside/leftventricle.png';
import lungsImage from '../../../assets/images/courses/course-1-anatomy/outside/lungs.png';
import pulmonaryImage from '../../../assets/images/courses/course-1-anatomy/outside/pulmonaryarteries.png';
import rightAtriumImage from '../../../assets/images/courses/course-1-anatomy/outside/rightatrium.png';
import rightVentricleImage from '../../../assets/images/courses/course-1-anatomy/outside/rightventricle.png';
import svcImage from '../../../assets/images/courses/course-1-anatomy/outside/superiorvenacava.png';

const outsideStructures = [
  { name: 'Outside Heart', description: 'The view of the entire outer heart anatomy.', image: heartIntroImage, beenClicked: true },
  { name: 'Aotra', description: 'The largest artery in the body. The aorta carries oxygen-rich blood away from the heart, to the rest of the body.', image: aotraImage, beenClicked: false },
  { name: 'Arteries To Head & Arms', description: 'The brachiocephalic trunk, the left common carotid artery, and the left subclavian artery carry blood upwards.', image: arteriesImage, beenClicked: false },
  { name: 'Atrium (Left)', description: 'Thin-walled upper chamber of the heart that receives oxygenated blood from the lungs.', image: leftAtriumImage, beenClicked: false },
  { name: 'Atrium (Right)', description: 'Thin-walled upper chamber of the heart that receives deoxygenated blood from the rest of the body.', image: rightAtriumImage, beenClicked: false },
  { name: 'Inferior Vena Cava', description: 'A large vein that delivers deoxygenated blood from the lower body into the heart.', image: ivcImage, beenClicked: false },
  { name: 'Lungs', description: 'Structures that inflate and deflate with air just like balloons. Everyone has 2 lungs, left and right. In the lungs, carbon dioxide travels from the blood to the air and oxygen travels from the air to the blood.', image: lungsImage, beenClicked: false },
  { name: 'Pulmonary Arteries', description: 'Blood vessels that carry deoxygenated blood from the heart to the lungs.', image: pulmonaryImage, beenClicked: false },
  { name: 'Superior Vena Cava', description: 'A large vein that delivers deoxygenated blood from the upper body into the heart.', image: svcImage, beenClicked: false },
  { name: 'Left Ventricle', description: 'Lower chamber of the heart that pumps deoxygenated blood into the lungs. The right ventricle has thinner walls than the left ventricle.', image: leftVentricleImage, beenClicked: false },
  { name: 'Right Ventricle', description: 'Lower chamber of the heart that pumps oxygenated blood to the body. The left ventricle has thicker walls than the right ventricle.', image: rightVentricleImage, beenClicked: false },
];

export default function Outside() {
  const [selectedArea, setSelectedArea] = useState(outsideStructures[0]);

  function onClickArea(structure, index) {
    setSelectedArea(structure);
    outsideStructures[index].beenClicked = true;
  }

  return (
    <div>
      <Typography variant="h5" sx={styles.sectionTitle}>Anatomy Outside The Heart</Typography>
      <Grid fluid container justify="center">
        <Grid item xs={6}>
          <Typography variant="h6">Right &nbsp; &nbsp; &nbsp; Left</Typography>
          <img src={selectedArea.image} alt="heart" />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">Anatomy Outside</Typography>
          <Typography variant="body1" align="left">
            To understand how the heart works, it is important to know
            the names of the parts of the heart and what they do. This
            section shows where the parts of the heart are and describes what they do.
          </Typography>
          <Typography variant="body1" align="left" sx={{ marginTop: '2%' }}>
            Select the name of the part of the heart or blood vessel from the list
            below to see a picture and a description of what it does:
          </Typography>
          <Grid item xs={12} sx={{ marginTop: '1%' }}>
            {outsideStructures.map((structure, index) => (
              <Button variant="outlined" onClick={() => onClickArea(structure, index)} color={outsideStructures[index].beenClicked ? 'success' : 'error'}>{structure.name}</Button>
            ))}
          </Grid>
          <Grid item xs={12} sx={{ marginTop: '1%' }}>
            <Typography variant="body1" align="center" sx={styles.anatomyInside.selectedName}>
              {selectedArea.name}
            </Typography>
            <Typography variant="body1" align="center" sx={{ marginTop: '1%' }}>
              {selectedArea.description}
            </Typography>
          </Grid>
        </Grid>

      </Grid>
    </div>
  );
}
