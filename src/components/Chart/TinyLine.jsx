import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const TinyLine = ({ tinyData }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={tinyData} margin={{ top: 10, right: 20, left: 10, bottom: 10 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
        <YAxis dataKey="minutes" unit="min" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
        <Tooltip formatter={(value) => `${value} min`} />
        <Line type="monotone" dataKey="minutes" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TinyLine;
