import React from 'react'
import "./Department.css"

function PlacementYearTable() {
  return (
    <table className="placementtable">
        <caption className='font-[headline]'>LAST THREE YEARS PLACEMENT OFFERS</caption>
<thead className='font-[para]'>
  <tr className=' bg-blue-950 text-white'>
    <th>Year</th>
    <th>Till April (corresponding year)</th>
    <th>Final Placement</th>
  </tr>
</thead>
<tbody className='font-[para]'>
  <tr>
    <td>2023</td>
    <td>140.36%</td>
    <td>147.89%</td>
  </tr>
  <tr>
    <td>2022</td>
    <td>175.15%</td>
    <td>191.49%</td>
  </tr>
  <tr>
    <td>2021</td>
    <td>83.82%</td>
    <td>103.49%</td>
  </tr>
</tbody>
    </table>
    
  );
}

export default PlacementYearTable;
