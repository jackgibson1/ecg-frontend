/* eslint-disable object-curly-newline */
/* eslint-disable react/no-unescaped-entities */
import { Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { styles } from '../styles';

// import all inside images
import aotraImage from '../../../assets/images/courses/course-1-anatomy/inside/aorta.png';
import aorticValveImage from '../../../assets/images/courses/course-1-anatomy/inside/aorticvalve.png';
import arteriesImage from '../../../assets/images/courses/course-1-anatomy/inside/arteriestohead.png';
import leftAtriumImage from '../../../assets/images/courses/course-1-anatomy/inside/atriumleft.png';
import rightAtriumImage from '../../../assets/images/courses/course-1-anatomy/inside/atriumright.png';
import insideHeartImage from '../../../assets/images/courses/course-1-anatomy/inside/insideheart.png';
import ivcImage from '../../../assets/images/courses/course-1-anatomy/inside/ivc.png';
import lungsImage from '../../../assets/images/courses/course-1-anatomy/inside/lungs.png';
import mitralImage from '../../../assets/images/courses/course-1-anatomy/inside/mitralvalve.png';
import pulmonaryValveImage from '../../../assets/images/courses/course-1-anatomy/inside/pulmonaryvalve.png';
import pulmonaryArteriesImage from '../../../assets/images/courses/course-1-anatomy/inside/pulmonaryarteries.png';
import pulmonaryVeinsImage from '../../../assets/images/courses/course-1-anatomy/inside/pulmonaryveins.png';
import septumImage from '../../../assets/images/courses/course-1-anatomy/inside/septum.png';
import svcImage from '../../../assets/images/courses/course-1-anatomy/inside/svc.png';
import tricusImage from '../../../assets/images/courses/course-1-anatomy/inside/tricuspidvalve.png';
import rightventricleImage from '../../../assets/images/courses/course-1-anatomy/inside/ventricleright.png';
import leftventricleImage from '../../../assets/images/courses/course-1-anatomy/inside/ventricleleft.png';

const insideStructures = [
  { name: 'Inside Heart', description: 'The view of the entire inner heart anatomy.', image: insideHeartImage, beenClicked: true },
  { name: 'Aorta', description: 'The largest artery in the body. The aorta carries oxygen-rich blood away from the heart, to the rest of the body.', image: aotraImage, beenClicked: false },
  { name: 'Aortic Valve', description: '3-leafed valve that prevents blood from flowing backwards from the aorta into the left ventricle.', image: aorticValveImage, beenClicked: false },
  { name: 'Arteries To Head & Arms', description: 'The brachiocephalic trunk, the left common carotid artery, and the left subclavian artery carry blood upwards.', image: arteriesImage, beenClicked: false },
  { name: 'Atrium (Left)', description: 'Thin-walled upper chamber of the heart that receives oxygenated blood from the lungs.', image: leftAtriumImage, beenClicked: false },
  { name: 'Atrium (Right)', description: 'Thin-walled upper chamber of the heart that receives deoxygenated blood from the rest of the body.', image: rightAtriumImage, beenClicked: false },
  { name: 'Inferior Vena Cava', description: 'A large vein that delivers deoxygenated blood from the lower body into the heart.', image: ivcImage, beenClicked: false },
  { name: 'Lungs', description: 'Structures that inflate and deflate with air just like balloons. Everyone has 2 lungs, left and right. In the lungs, carbon dioxide travels from the blood to the air and oxygen travels from the air to the blood.', image: lungsImage, beenClicked: false },
  { name: 'Mitral (Bicuspid) Valve', description: '2-leafed valve that prevents blood from flowing backwards from the left ventricle into the left atrium.', image: mitralImage, beenClicked: false },
  { name: 'Pulmonary Arteries', description: 'Blood vessels that carry deoxygenated blood from the heart to the lungs.', image: pulmonaryArteriesImage, beenClicked: false },
  { name: 'Pulmonary Valve', description: '3-leafed valve that prevents blood from flowing backwards from the pulmonary artery into the right ventricle.', image: pulmonaryValveImage, beenClicked: false },
  { name: 'Pulmonary Veins', description: 'Blood vessels that carry oxygenated blood from the lungs to the heart.', image: pulmonaryVeinsImage, beenClicked: false },
  { name: 'Septum', description: 'The thin wall that separates the right side of the side of the heart from the left side.', image: septumImage, beenClicked: false },
  { name: 'Superior Vena Cava', description: 'A large vein that delivers deoxygenated blood from the upper body into the heart.', image: svcImage, beenClicked: false },
  { name: 'Tricuspid Valve', description: '3-leafed valve that prevents blood from flowing backwards from the right ventricle into the right atrium.', image: tricusImage, beenClicked: false },
  { name: 'Ventricle (Left)', description: 'Lower chamber of the heart that pumps oxygenated blood to the body. The left ventricle has thicker walls than the right ventricle.', image: leftventricleImage, beenClicked: false },
  { name: 'Ventricle (Right)', description: 'Lower chamber of the heart that pumps deoxygenated blood into the lungs. The right ventricle has thinner walls than the left ventricle.', image: rightventricleImage, beenClicked: false },
];

export default function AnatomyInside() {
  const [selectedArea, setSelectedArea] = useState(insideStructures[0]);

  function onClickArea(structure, index) {
    setSelectedArea(structure);
    insideStructures[index].beenClicked = true;
  }

  return (
    <div>
      <Typography variant="h5" sx={styles.sectionTitle}>Anatomy Inside The Heart</Typography>
      <Grid fluid container justify="center">
        <Grid item xs={6}>
          <Typography variant="h6">Right &nbsp; &nbsp; &nbsp; Left</Typography>
          <img src={selectedArea.image} alt="heart" />
        </Grid>
        <Grid item xs={6}>
          <Typography sx={{ marginTop: '3%' }} variant="h6">Anatomy Inside</Typography>
          <Typography variant="body1" align="left">
            Select the name of the part of the heart or blood vessel from the list
            below to see a picture and a description of what it does:
          </Typography>
          <Grid item xs={12} sx={{ marginTop: '1%' }}>
            {insideStructures.map((structure, index) => (
              <Button variant="outlined" onClick={() => onClickArea(structure, index)} color={insideStructures[index].beenClicked ? 'success' : 'error'}>{structure.name}</Button>
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
