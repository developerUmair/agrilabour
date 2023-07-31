import React from "react";
import { useState } from "react";
import { tableData } from "../data/Data";
import Row from "./Row";
import { FaPlus } from "react-icons/fa";
const Table = () => {
  const [data, setData] = useState(tableData);
  return (
    <>
      <div className="w-10% lg:ml-80 mt-10">
        <div className="mb-5 flex justify-between px-4">
          <h1 className="text-gray-900 lg:text-3xl text-2xl font-semibold">
            Candidates files
          </h1>
          <div className="flex justify-center items-center lg:mr-12 bg-teal-500 px-4 rounded-sm text-white">
            <FaPlus />
            <a href="#" className="pl-1 font-semibold">
              Add File
            </a>
          </div>
        </div>
      </div>
      <div className="w-70% overflow-x-scroll lg:overflow-hidden lg:ml-80 mt-10 lg:p-4 p-2">
        <div>
          <table className="">
            <thead>
              <tr className="border-b border-t border-gray-300">
                <th className="lg:px-5 lg:pt-2 pb-5">No</th>
                <th className="lg:px-5 lg:pt-2 pb-5">File Name</th>
                <th className="lg:px-5 lg:pt-2 pb-5">Type</th>
                <th className="lg:px-5 lg:pt-2 pb-5">Size</th>
                <th className="lg:px-5 lg:pt-2 pb-5">Date Added</th>
                <th className="lg:px-5 lg:pt-2 pb-5">Download/View</th>
              </tr>
            </thead>
            <tbody>
              {/* {data.map((item) => (
            <tr key={item.id}>
              <td className="lg:px-6 lg:py-2">{item.id}.</td>
              <td className="lg:px-6 lg:py-2">{item.file}</td>
              <td className="lg:px-6 lg:py-2">{item.type}</td>
              <td className="lg:px-6 lg:py-2">{item.size}</td>
              <td className="lg:px-6 lg:py-2">{item.dateAdded}</td>
              <td className="lg:px-6 lg:py-2">Download</td>
            </tr>
          ))} */}
              <Row />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
