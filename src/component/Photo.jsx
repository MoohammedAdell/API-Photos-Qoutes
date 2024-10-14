/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Photo = ({ photo, handelPhotoClick }) => {
  return (
    <div
      onClick={() => handelPhotoClick()}
      className=" md:mx-3 md:my-auto my-2 relative snap-center cursor-pointer"
    >
      <img
        src={photo.download_url}
        alt=""
        className=" h-48 w-72 md:w-80  md:h-80 lg:w-96 rounded-lg shadow-md
    hover:border-4 transition-all "
      />
      <p className="text-gray-200 bg-slate-800 px-3 py=1 text-sm md:text-xl tracking-widest rounded-r-md bg-opacity-70 absolute bottom-4 ">
        {photo.author}
      </p>
    </div>
  );
};

export default Photo;
