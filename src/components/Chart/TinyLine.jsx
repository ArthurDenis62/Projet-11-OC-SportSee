import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ backgroundColor: "#FFFFFF", color: "#333", padding: "10px 5px 10px 5px" }}>
        <p>{`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
};

const TinyLine = ({ tinyData }) => {
  return (
    <ResponsiveContainer width="100%" height={255}>
      <LineChart data={tinyData} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
        <XAxis dataKey="day" tick={{ fill: '#FFFFFF' }} tickLine={false} axisLine={false} />
        <YAxis hide domain={[0, 60]} allowDecimals={false} />
        <Tooltip content={<CustomTooltip />} />
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
