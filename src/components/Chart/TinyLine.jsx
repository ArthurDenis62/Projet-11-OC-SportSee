import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const TinyLine = ({ tinyData }) => {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <LineChart data={tinyData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis dataKey="day" tick={{ fill: '#FFFFFF' }} tickLine={false} axisLine={false} />
        <YAxis hide domain={[0, 60]} allowDecimals={false} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="minutes"
          stroke="#FFFFFF"
          strokeWidth={2}
          dot={false}
          activeDot={{ stroke: "white", strokeWidth: '8px', strokeOpacity: '0.4', r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TinyLine;
