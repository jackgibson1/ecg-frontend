/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import UserService from '../../../services/user.service';

const styles = {
  radioButtonCorrect: {
    border: 2,
    borderRadius: 2,
    backgroundColor: 'green',
  },
};

export default function QuizAnswerButtons(props) {
  const {
    quiz, quizStorage, currentQuestion, stillTime, submitted, setSubmitted, alreadyAnswered,
  } = props;
  const [selectedAnswer, setSelectedAnswer] = React.useState(-1);
  const [error, setError] = React.useState(false);

  const [helperText, setHelperText] = React.useState('');

  const { answer } = quiz.questions[currentQuestion - 1];

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
      setHelperText('Sorry wrong answer!');
      setError(true);
      setSubmitted(true);
    }

    UserService.updateLocalQuiz(quizStorage);
  };

  if (alreadyAnswered) {
    return (
      <Alert sx={{ marginLeft: '5%', marginRight: '5%' }} variant="filled" severity="info">Question already finished!</Alert>
    );
  }

  if (!stillTime) {
    if (typeof UserService.getLocalQuiz().answers[currentQuestion - 1] === 'undefined') {
      quizStorage.answers.push(false);
      UserService.updateLocalQuiz(quizStorage);
    }

    return (
      <Alert sx={{ marginLeft: '5%', marginRight: '5%' }} variant="filled" severity="error">You have ran out of time!</Alert>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl error={error}>
        <FormLabel>Select Answer</FormLabel>
        <RadioGroup
          row
          value={selectedAnswer}
          onChange={handleChange}
        >
          <FormControlLabel sx={(submitted && answer === '1') && styles.radioButtonCorrect} value="1" control={<Radio />} label="1" disabled={submitted} />
          <FormControlLabel sx={(submitted && answer === '2') && styles.radioButtonCorrect} value="2" control={<Radio />} label="2" disabled={submitted} />
          <FormControlLabel sx={(submitted && answer === '3') && styles.radioButtonCorrect} value="3" control={<Radio />} label="3" disabled={submitted} />
          <FormControlLabel sx={(submitted && answer === '4') && styles.radioButtonCorrect} value="4" control={<Radio />} label="4" disabled={submitted} />
        </RadioGroup>
        <Button type="submit" variant="outlined" disabled={submitted}>
          Submit Answer
        </Button>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </form>
  );
}
