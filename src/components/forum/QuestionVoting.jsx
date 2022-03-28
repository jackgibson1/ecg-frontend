import React, { useEffect, useState } from 'react';
import { IconButton, Typography } from '@mui/material';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ForumService from '../../services/forum.service';

export default function QuestionVoting(props) {
  const { questionId } = props;
  const [voteType, setVoteType] = useState();
  const [totalVotes, setTotalVotes] = useState(0);

  const hasUserVoted = async () => {
    await ForumService.hasUserVoted(questionId).then((res) => {
      if (res.data.voted) setVoteType(res.data.voteType);
    }).catch((err) => console.log(err));
  };

  const getTotalVotes = async () => {
    await ForumService.getVotes(questionId).then((res) => {
      setTotalVotes(res.data.totalVotes);
    });
  };

  const castVote = async (upOrDown) => {
    await ForumService.castVote(questionId, upOrDown).then(() => {
      // now call updated endpoint to check updated voting
      hasUserVoted();
      getTotalVotes();
    }).catch((err) => console.log(err));
  };

  useEffect(async () => {
    // check if user has previously voted on this question
    hasUserVoted();
    // get total number of votes for this question
    getTotalVotes();
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', position: 'relative', border: '1px solid black', paddingRight: '10px', borderRadius: '10px' }}>
        <IconButton disabled={voteType} onClick={() => castVote('upvote')}>
          {voteType === 'upvote' ? (
            <ThumbUpAltIcon />
          ) : (
            <ThumbUpOffAltIcon />
          )}
        </IconButton>
        <IconButton disabled={voteType} onClick={() => castVote('downvote')}>
          {voteType === 'downvote' ? (
            <ThumbDownAltIcon />
          ) : (
            <ThumbDownOffAltIcon />
          )}
        </IconButton>
        <Typography sx={{ marginTop: '8px' }} variant="body1">
          Total Score: {totalVotes}
        </Typography>
      </div>
    </div>
  );
}
