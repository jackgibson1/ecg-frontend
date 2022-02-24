/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import CourseService from '../../services/course.service';
import QuizService from '../../services/quiz.service';
import CourseDetails from '../courses/course-components/CourseDetails';
import QuizDetails from '../quizzes/quiz-components/QuizDetails';

const courseColumns = [
  { field: 'id',
    headerName: 'ID',
    width: 80,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'courseName',
    headerName: 'Course',
    width: 350,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'completed',
    headerName: 'Completed',
    width: 110,
    renderCell: (params) => {
      if (params.row.completed) {
        return <CheckCircleIcon style={{ color: 'green' }} />;
      }
      return <CancelIcon style={{ color: 'red' }} />;
    },
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'date',
    headerName: 'Date',
    width: 160,
    headerAlign: 'center',
    align: 'center',
  },
];

const quizColumns = [
  { field: 'id',
    headerName: 'ID',
    width: 80,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'quizName',
    headerName: 'Course',
    width: 350,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'completed',
    headerName: 'Completed',
    width: 110,
    renderCell: (params) => {
      if (params.row.completed) {
        return <CheckCircleIcon style={{ color: 'green' }} />;
      }
      return <CancelIcon style={{ color: 'red' }} />;
    },
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'bestScore',
    headerName: 'Best Score',
    width: 160,
    headerAlign: 'center',
    align: 'center',
  },
];

export default function CourseTable(props) {
  const { isCourseTable } = props;
  const [courseRows, setCourseRows] = useState([]);
  const [quizRows, setQuizRows] = useState([]);

  useEffect(() => {
    CourseService.getAllCourseCompletions()
      .then((res) => {
        const courseCompletions = [];

        for (const crse of res.data) {
          const courseName = CourseDetails.find((course) => crse.courseId === course.id).title;
          const date = crse.firstCompletionDate ? new Date(crse.firstCompletionDate).toLocaleDateString() : 'N/A';
          courseCompletions.push({
            id: crse.courseId,
            courseName,
            completed: crse.completed,
            date,
          });
        }
        setCourseRows(courseCompletions);
      });

    QuizService.getAllQuizScores()
      .then((res) => {
        const quizCompletions = [];

        for (const qz of res.data) {
          const quizName = QuizDetails.find((quiz) => qz.quizId === quiz.id).title;

          quizCompletions.push({
            id: qz.quizId,
            quizName,
            completed: qz.score > -1,
            bestScore: qz.score > -1 ? qz.score : 'N/A',
          });
        }
        setQuizRows(quizCompletions);
      });
  }, []);

  return (
    <div style={{ height: 430, width: '95%', marginTop: '2%', marginBottom: '2%' }}>
      <DataGrid
        rows={isCourseTable ? courseRows : quizRows}
        columns={isCourseTable ? courseColumns : quizColumns}
        checkboxSelection={false}
        rowsPerPageOptions={[]}
      />
    </div>
  );
}
