/* eslint-disable react/no-unescaped-entities */
import { Grid, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import heartIntroImage from '../../../assets/images/courses/anatomy/introduction.png';

// import all outside images
import aotraImage from '../../../assets/images/courses/anatomy/outside/aorta.png';
import arteriesImage from '../../../assets/images/courses/anatomy/outside/arteriestoheadarms.png';
import ivcImage from '../../../assets/images/courses/anatomy/outside/inferiorvenacava.png';
import leftAtriumImage from '../../../assets/images/courses/anatomy/outside/leftatrium.png';
import leftVentricleImage from '../../../assets/images/courses/anatomy/outside/leftventricle.png';
import lungsImage from '../../../assets/images/courses/anatomy/outside/lungs.png';
import pulmonaryImage from '../../../assets/images/courses/anatomy/outside/pulmonaryarteries.png';
import rightAtriumImage from '../../../assets/images/courses/anatomy/outside/rightatrium.png';
import rightVentricleImage from '../../../assets/images/courses/anatomy/outside/rightventricle.png';
import svcImage from '../../../assets/images/courses/anatomy/outside/superiorvenacava.png';

export default function Outside() {
  // eslint-disable-next-line no-unused-vars
  const [imageHook, setImageHook] = useState(heartIntroImage);

  const outsideStructures = [
    { name: 'Aotra', description: 'The largest artery in the body. The aorta carries oxygen-rich blood away from the heart, to the rest of the body.', image: aotraImage },
    { name: 'Arteries To Head & Arms', description: 'The brachiocephalic trunk, the left common carotid artery, and the left subclavian artery carry blood upwards.', image: arteriesImage },
    { name: 'Atrium (Left)', description: 'Thin-walled upper chamber of the heart that receives oxygenated blood from the lungs.', image: leftAtriumImage },
    { name: 'Atrium (Right)', description: 'Thin-walled upper chamber of the heart that receives deoxygenated blood from the rest of the body.', image: rightAtriumImage },
    { name: 'Inferior Vena Cava', description: 'A large vein that delivers deoxygenated blood from the lower body into the heart.', image: ivcImage },
    { name: 'Lungs', description: 'Structures that inflate and deflate with air just like balloons. Everyone has 2 lungs, left and right. In the lungs, carbon dioxide travels from the blood to the air and oxygen travels from the air to the blood.', image: lungsImage },
    { name: 'Pulmonary Arteries', description: 'Blood vessels that carry deoxygenated blood from the heart to the lungs.', image: pulmonaryImage },
    { name: 'Superior Vena Cava', description: 'A large vein that delivers deoxygenated blood from the upper body into the heart.', image: svcImage },
    { name: 'Left Ventricle', description: 'Lower chamber of the heart that pumps deoxygenated blood into the lungs. The right ventricle has thinner walls than the left ventricle.', image: leftVentricleImage },
    { name: 'Right Ventricle', description: 'Lower chamber of the heart that pumps oxygenated blood to the body. The left ventricle has thicker walls than the right ventricle.', image: rightVentricleImage },
  ];

  return (
    <div>
      <Typography variant="h4" sx={{ marginTop: '1%' }}>Anatomy Outside The Heart</Typography>
      <Grid fluid container justify="center">
        <Grid item xs={6}>
          <Typography variant="h6">Right &nbsp; &nbsp; &nbsp; Left</Typography>
          <img src={imageHook} alt="heart" />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">Anatomy Outside</Typography>
          <Typography variant="body1" align="left">
            To understand how the heart works, it is important to know
            the names of the parts of the heart and what they do. This
            section shows where the parts of the heart are and describes what they do.
          </Typography>
          <Typography variant="body1" align="left" sx={{ marginTop: '5%' }}>
            Select the name of the part of the heart or blood vessel from the list
            below to see a picture and a description of what it does.
          </Typography>
          <Stack spacing={2} direction="row">
            {outsideStructures.map((structure) => (
              <Button variant="text">{structure.name}</Button>
            ))}

          </Stack>
        </Grid>

      </Grid>
    </div>
  );
}
