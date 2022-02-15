import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import CourseTable from './CourseTable';

export default function CenteredTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', marginTop: '2%' }}>
      <TabContext value={value}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Courses Overview" value="1" />
          <Tab label="Quizzes Overview" value="2" />
          <Tab label="Forum Interactions" value="3" />
        </Tabs>
        <TabPanel value="1">
          <CourseTable isCourseTable />
        </TabPanel>
        <TabPanel value="2">
          <CourseTable isCourseTable={false} />
        </TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}
