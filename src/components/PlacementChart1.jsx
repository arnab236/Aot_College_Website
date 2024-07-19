import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

function PlacementChart1() {
  var data = [{ name: "2021", percentage: 140.36 }, { name : "2022", percentage: 175.15 }, { name : "2023", percentage: 83.82 }];

  const renderLineChart = (

    <ResponsiveContainer width={"99%"} height={"99%"}>
    <LineChart
      
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
      <Line type="monotone" dataKey="percentage" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis dataKey="percentage"/>
      <Tooltip />
    </LineChart>
    </ResponsiveContainer>
  );

  return renderLineChart;
}

export default PlacementChart1;
