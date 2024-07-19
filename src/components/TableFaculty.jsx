import FacData from "./Data/FacultyData.json";
import React, { useId } from "react";
import "./Faculty.css"

const TableFaculty = () => (
  <>
    <table className="facultytable w-full rounded-xl">
      <thead className=" text-white border-4 border-blue-950 bg-blue-950 font-[para]">
        <tr className="[&>th]:text-left [&>th]:p-4 text-xs md:text-xl">
          <th>Name of the Faculty</th>
          <th>Designation</th>
          <th>Highest Qualification</th>
          <th>Experience</th>
        </tr>
      </thead>
      <tbody className="border-4 border-t-0 rounded-xl bg-white font-[para]">
        {FacData.map(
          ({
            name,
            desg,
            qualification,
            experience,
          }) => (
            <tr
              key={useId()}
              className="[&>td]:py-2 [&>td]:px-4 border border-t-0 text-xs md:text-lg lg:text-xl  border-neutral-200 [&>td]:text-left "
            >
              <td>{name}</td>
              <td>{desg}</td>
              <td>{qualification}</td>
              <td>{experience}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  </>
);

export default TableFaculty;