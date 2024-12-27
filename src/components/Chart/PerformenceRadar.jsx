import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const PerformanceRadar = ({ radarData }) => {
  return (<>
    <ResponsiveContainer width={258} height={263}>
      <RadarChart data={radarData} outerRadius="70%">
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" tick={{ fill: '#FFFFFF' }} />
        <Radar
          name="Performance"
          dataKey="value"
          stroke="red"
          fill="red"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
    </>);
};

export default PerformanceRadar;
