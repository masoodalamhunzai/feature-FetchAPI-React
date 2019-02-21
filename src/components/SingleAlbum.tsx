import * as React from "react";

const SingleAlbums = ({ albums }) => {
  const { id, title, name } = albums;
  return (
    <div className="flex">
      <p>{id}</p>
      <p>{title}</p>
      <p>{name}</p>
    </div>
  );
};
export { SingleAlbums };
