import React from 'react'
import "./Department.css"

function TableCSE() {
  return (
    <table class="csetable">
<thead>
  <tr className=' bg-blue-950 text-white'>
    <th>Name of the Laboratory</th>
    <th>No. of Computers with coniguration</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Data Structure Laboratory</td>
    <td>41 HP Computers, Fedora 23, GCC Compiler, JDK, Visual Algos,jdoodle portal, a2oj portal.</td>
  </tr>
  <tr>
    <td>Computer Architecture Laboratory</td>
    <td>42 HP Computers, Fedora 23, Digital Logic Design, Comp Arch Simulation using HASE III.</td>
  </tr>
  <tr>
    <td>Computer Engineering Laboratory</td>
    <td>41 HP Computers, Fedora 23, GCC Compiler, JDK, Python, R,jdoodle portal, a2oj portal..</td>
  </tr>
  <tr>
    <td>Google Innovation Laboratory</td>
    <td>41 HP Computers, Fedora 23, Android Studio, Flutter, Fuchsia.</td>
  </tr>
  <tr>
    <td>Network & Cybersecurity Laboratory</td>
    <td>41 HP Computers, Fedora 23, Android Studio, Flutter, Fuchsia.</td>
  </tr>
  <tr>
    <td>System Engineering Laboratory</td>
    <td>42 HP Computers, Fedora 23, JDK, PHP/MySQL, Python,jdoodle portal, a2oj portal.</td>
  </tr>
</tbody>
    </table>
    
  );
}

export default TableCSE;
