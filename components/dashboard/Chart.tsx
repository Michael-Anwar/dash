"use client";
import React from "react";
import {
  XAxis,
  //   YAxis,
  //   CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "0",
    uv: 0,
    pv: 0,
    amt: 0,
  },
  {
    name: "1",
    uv: 1000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "2",
    uv: 2000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "3",
    uv: 1500,
    pv: 3800,
    amt: 2290,
  },
  {
    name: "5",
    uv: 3000,
    pv: 3000,
    amt: 2000,
  },
  {
    name: "6",
    uv: 1890,
    pv: 3500,
    amt: 2181,
  },
  {
    name: "7",
    uv: 2390,
    pv: 3000,
    amt: 2500,
  },
  {
    name: "8",
    uv: 3490,
    pv: 4500,
    amt: 2100,
  },
  {
    name: "9",
    uv: 3490,
    pv: 5900,
    amt: 2100,
  },
  {
    name: "10",
    uv: 3490,
    pv: 3000,
    amt: 2100,
  },
  {
    name: "11",
    uv: 3490,
    pv: 3500,
    amt: 2100,
  },
  {
    name: "12",
    uv: 3490,
    pv: 2500,
    amt: 2100,
  },
  {
    name: "13",
    uv: 3490,
    pv: 2800,
    amt: 2100,
  },
];

const Chart = () => {
  return (
    <div className="w-full bg-white p-3 rounded-2xl">
      <h4
        className="
     border-l-4 border-[#f84525ac]
      p-1"
      >
        Statistics
      </h4>
      <hr className="text-gray-300 my-2"/>

      <ResponsiveContainer width="100%" height={500}>
        <AreaChart
          width={500}
          height={200}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          {/* <CartesianGrid strokeDasharray="0 " /> */}
          <XAxis dataKey="name" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#F84525"
            fill="#f84525ac"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
