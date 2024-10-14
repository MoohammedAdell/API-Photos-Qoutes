/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import { FaCopy } from "react-icons/fa";
import { useClipboard } from "react-haiku";
import { FaCheck } from "react-icons/fa6";

const Model = ({ show, qoute, close }) => {
  const clipboard = useClipboard({ timeout: 1000 });
  const { content, author } = qoute;

  if (!show) return null;
  return ReactDOM.createPortal(
    <div className="flex justify-center items-center inset-0 absolute">
      <div
        onClick={close}
        className="w-full h-full absolute inset-0 z-10 bg-gray-800
       backdrop-blur-sm  opacity-50"
      ></div>

      <div className="flex flex-col justify-center shadow-lg items-center  w-11/12 md:w-1/2 bg-white px-8 py-8 z-20 rounded-lg h-auto">
        <button
          onClick={() => clipboard.copy(content)}
          className="self-end border-2 border-gray-400 mb-4 text-gray-500 hover:text-gray-800 rounded-full p-1.5 font-semibold"
        >
          {clipboard.copied ? (
            <FaCheck className="text-green-500 size-4 " />
          ) : (
            <FaCopy />
          )}
        </button>
        <p className="border-l-8 border-gray-700 px-3 mb-2">
          <q>{content}</q>
        </p>
        <p className="text-gray-600 self-center italic">~{author}~</p>
        <button
          onClick={close}
          className="bg-gray-600 hover:bg-gray-900 text-white font-bold px-5 py-1 rounded-lg mt-2"
        >
          Close
        </button>
      </div>
    </div>,
    document.getElementById("model")
  );
};

export default Model;
