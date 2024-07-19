import React, { useEffect,useState } from "react";
import Placement2021Data from "./Placement_data/Placement_2021.json"
import Placement2022Data from "./Placement_data/Placement_2022.json"
import Placement2023Data from "./Placement_data/Placement_2023.json"
import { useTable } from "react-table";

function PlacementDataTable() {


  const [files, setFiles] = useState(Placement2023Data);
 
  useEffect(() => {
    const Filedata= (a) => {
      if(a == Placement2021Data)
        setFiles(Placement2021Data);
      else if(a == Placement2022Data)     
        setFiles(Placement2022Data)
      else
        setFiles(Placement2023Data)
    };

    return () => {
      Filedata
    };
  }, [files]);

  return (
    <>
    <div className="flex flex-col ">
    <div className=" text-center text-xl rounded-xl text-white bg-blue-950 border-4 mx-auto" >
        <button className="p-4 px-8 hover:bg-blue-900 hover:rounded-xl active:bg-blue-800 " onClick={() => setFiles((files) => Placement2023Data)}> 2023 </button>
        <button className="p-4 px-8 hover:bg-blue-900 hover:rounded-xl active:bg-blue-800 " onClick={() => setFiles((files) => Placement2022Data)}> 2022 </button>
        <button className="p-4 px-8 hover:bg-blue-900 hover:rounded-xl active:bg-blue-800 " onClick={() => setFiles((files) => Placement2021Data)}> 2021 </button>

    </div>
      <table className="placementtable">
        <caption className="font-[headline]">
          LAST THREE YEARS PLACEMENT OFFERS
        </caption>
        <thead className="font-[para]">
          <tr className=" bg-blue-950 text-white uppercase">
            <th>Sl No.</th>
            <th>University Roll</th>
            <th>Student</th>
            <th>Stream</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody className="font-[para]">
            {
                files.map(({
                    id,
                    univ_roll,
                    sname,
                    stream,
                    company
                })=>(
                    <tr>
                    <td>{id}</td>
                    <td>{univ_roll}</td>
                    <td>{sname}</td>
                    <td>{stream}</td>
                    <td>{company}</td>
                  </tr>
                ))
            }
        </tbody>
      </table>
      </div>
    </>
  );
}

export default PlacementDataTable;
