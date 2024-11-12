import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Line
} from "recharts";
import { Helmet } from "react-helmet-async";

const Statistics = () => {
  const products = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Statistic|Gadget Heaven</title>
      </Helmet>
        <div className="bg-customPurple h-52 text-center flex flex-col justify-center">
            <h1 className="font-bold text-4xl text-white">Statistics</h1>
            <p className="mt-4 text-sm w-1/2 mx-auto font-light text-gray-200">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        </div>
      <div className="mt-10">
        <BarChart width={window.innerWidth} height={300} data={products}>
          <XAxis dataKey="product_title" />
          <YAxis />
          <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />
          <Legend
            width={100}
            wrapperStyle={{
              top: 40,
              right: 20,
              backgroundColor: "#f5f5f5",
              border: "1px solid #d5d5d5",
              borderRadius: 3,
              lineHeight: "40px",
            }}
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="rating" stroke="#8884d8" strokeDasharray="5 5" />
          <Bar dataKey="price" fill="#8884d8" barSize={30} />
        </BarChart>
      </div>
    </div>
  );
};

export default Statistics;
