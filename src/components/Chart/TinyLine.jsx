import React, { useState } from "react";
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
  const [hoverPosition, setHoverPosition] = useState(null);
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.right - e.clientX;
    setHoverPosition(x);
  };
  const handleMouseLeave = () => {
    setHoverPosition(null);
  };
  return (
    <div style={{ width: "100%", height: "300px", position: "relative", color: "#FFFFFF", transition: "background-color 0.3s ease" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {hoverPosition !== null && (
        <div
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            width: `${hoverPosition}px`,
            height: "255px",
            backgroundColor: "#333",
            opacity: "0.1",
            transition: "width 0.1s ease"
          }}
        />
      )}
      <div style={{ position: "absolute", top: "10px", left: "15px", fontSize: "16px", fontWeight: "bold" }}>
        Durée moyenne des sessions
      </div>
    <ResponsiveContainer width="100%" height={255}>
      <LineChart data={tinyData} margin={{ top: 20, right: 0, bottom: 0, left: 0 }}>
        <XAxis interval="preserveStartEnd" dataKey="day" tick={{ fill: '#FFFFFF' }} tickLine={false} axisLine={false} padding={{ left: 10, right: 10 }} />
        <YAxis hide domain={[0, 60]} allowDecimals={false} />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="natural"
          dataKey="minutes"
          stroke="#FFFFFF"
          strokeWidth={2}
          dot={false}
          activeDot={{ stroke: "white", strokeWidth: '8px', strokeOpacity: '0.4', r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
    </div>
  );
};

export default TinyLine;
