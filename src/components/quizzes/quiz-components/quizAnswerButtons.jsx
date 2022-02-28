import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import QuizService from '../../../services/quiz.service';
import { styles } from '../quiz.styles';

export default function QuizAnswerButtons(props) {
  const { quiz, quizStorage, currentQuestion, submitted, setSubmitted } = props;
  const { answer, answerDesc } = quiz.questions[currentQuestion - 1];
  const [selectedAnswer, setSelectedAnswer] = React.useState(-1);
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('');

  React.useEffect(() => {
    setError(false);
    setHelperText('');
    setSelectedAnswer(-1);
  }, [currentQuestion]);

  const handleChange = (event) => {
    setSelectedAnswer(event.target.value);
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedAnswer === -1) {
      setHelperText('Please select an answer first!');
      setError(true);
    } else if (selectedAnswer === answer) {
      quizStorage.answers.push(true);
      setHelperText('You got it!');
      setError(false);
      setSubmitted(true);
    } else {
      quizStorage.answers.push(false);
      setHelperText(answerDesc);
      setError(true);
      setSubmitted(true);
    }

    QuizService.updateLocalQuiz(quizStorage);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl error={error}>
          <FormLabel>Select Answer</FormLabel>
          <RadioGroup row value={selectedAnswer} onChange={handleChange}>
            <FormControlLabel sx={(submitted && answer === '1') && styles.quizAnswerButtons.correct} value="1" control={<Radio />} label="1" disabled={submitted} />
            <FormControlLabel sx={(submitted && answer === '2') && styles.quizAnswerButtons.correct} value="2" control={<Radio />} label="2" disabled={submitted} />
            <FormControlLabel sx={(submitted && answer === '3') && styles.quizAnswerButtons.correct} value="3" control={<Radio />} label="3" disabled={submitted} />
            <FormControlLabel sx={(submitted && answer === '4') && styles.quizAnswerButtons.correct} value="4" control={<Radio />} label="4" disabled={submitted} />
          </RadioGroup>
          <Button sx={styles.quizAnswerButtons.submit} type="submit" variant="outlined" disabled={submitted} endIcon={<CheckCircleIcon />}>
            Submit Answer
          </Button>
        </FormControl>
      </form>
      <Typography variant="body" color="red">{helperText}</Typography>
    </>
  );
}
