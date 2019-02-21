import * as React from "react";

const SingleComments = ({ comments }) => {
  const { id, body, name } = comments;
  return (
    <div className="flex">
      <p>{id}</p>
      <p>{body}</p>
      <p>{name}</p>
    </div>
  );
};
export { SingleComments };
