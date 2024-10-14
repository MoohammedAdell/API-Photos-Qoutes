/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Photo from "./Photo";

const PhotosList = ({ photos ,handelPhotoClick}) => {
  return (
    <div
      className="w-11/12 h-4/5 md:h-auto grid grid-flow-row md:grid-flow-col pb-4 md:pb-7 
  auto-cols-max overflow-y-scroll md:overflow-x-scroll snap-y md:snap-x 
  md:scrollbar-thin md:scrollbar-thumb-gray-200 md:scrollbar-track-gray-500 
  md:hover:scrollbar-thumb-gray-300 justify-center items-center"
    >
      {photos.map((photo) => (
        <Photo handelPhotoClick={handelPhotoClick} key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default PhotosList;
