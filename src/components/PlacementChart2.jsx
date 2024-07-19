import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function PlacementChart2() {
  var data2 = [
    { name: "2021", percentage: 147.89, pv: 2400, amt: 2400 },
    { name: "2022", percentage: 191.49, pv: 2400, amt: 2400 },
    { name: "2023", percentage: 103.49, pv: 2400, amt: 2400 },
  ];

  const renderLineChart2 = (
    <ResponsiveContainer width={"99%"} height={"99%"}>
      <LineChart
        data={data2}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="percentage" stroke="#07993E" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
  return renderLineChart2;
}

export default PlacementChart2;
