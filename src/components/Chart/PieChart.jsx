import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#FF0000", "#E5E5E5"];

const UserScoreChart = ({ todayScore }) => {
  const scoreData = [
    { name: "Score", value: todayScore * 100 },
    { name: "Remaining", value: 100 - todayScore * 100 },
  ];

  return (<>
    <p style={{ position: 'absolute' }}>Score</p>
    <div style={{ position: "relative", width: "100%", height: 255 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={scoreData}
            cx="50%"
            cy="50%"
            innerRadius="70%"
            outerRadius="90%"
            dataKey="value"
            startAngle={90}
            endAngle={450}
          >
            {scoreData.map((_entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "20px", fontWeight: "bold", margin: 0 }}>
          {todayScore * 100}%
        </p>
        <p style={{ fontSize: "12px", margin: 0 }}>de votre objectif</p>
      </div>
    </div>
    </>);
};

export default UserScoreChart;
