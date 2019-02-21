import * as React from "react";

const SinglePhotos = ({ photos }) => {
  const { id, title, name ,thumbnailUrl } = photos;
  return (
    <div className="flex">
      <p>{id}</p>
      <p>{title}</p>
      <p>{name}</p>
      <p><img src={thumbnailUrl} /></p>
    </div>
  );
};
export { SinglePhotos };
