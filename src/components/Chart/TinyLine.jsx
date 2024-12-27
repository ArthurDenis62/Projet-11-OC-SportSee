import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const TinyLine = ({ tinyData }) => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={tinyData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis dataKey="day" tickLine={false} axisLine={false} />
        <YAxis hide />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="minutes"
          stroke="#FF0000"
          strokeWidth={2}
          dot={{ r: 3 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TinyLine;
