import React from 'react';

export default function PostPage(props) {
  const { postId } = props.match.params;
  return (
    <h1>{postId}</h1>
  );
}
