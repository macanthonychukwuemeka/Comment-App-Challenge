import React from "react";

const CommentItems = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
          <h3>{comment.name}</h3>
          <p>{comment.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentItems;
