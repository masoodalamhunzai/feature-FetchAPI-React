import * as React from "react";

const SingleUsers = ({ users }) => {
  const { id, name, email } = users;
  return (
    <div className="flex">
      <p>{id}</p>
      <p>{name}</p>
      <p>{email}</p>
    </div>
  );
};
export { SingleUsers };
