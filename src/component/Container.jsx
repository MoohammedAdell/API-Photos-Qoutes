/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Container = ({children}) => {
  return (
    <div className="bg-gradient-to-b from-gray-200 to-gray-800 h-screen flex justify-center items-center flex-col">
      {children}
    </div>
  );
};

export default Container;
