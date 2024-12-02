import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SimpleBar = ({ chartData }) => {
    return (<>
      <ResponsiveContainer width="90%" height={400} style={{ margin: '0 auto'}}>
        <BarChart data={chartData}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis yAxisId="right" dataKey="kilogram" orientation="right" domain={[68, 71]} allowDecimals={false} />
          <YAxis yAxisId="left" dataKey="calories" orientation="left" domain={[161, 600]} allowDecimals={false} hide={true}  />
          <Tooltip />
          <Legend />
          <Bar yAxisId="right" barSize="7" radius={[10, 10, 0, 0]} dataKey="kilogram" fill="#282D30" name="Poids (kg)" />
          <Bar yAxisId="left" barSize="7" radius={[10, 10, 0, 0]} dataKey="calories" fill="#E60000" name="Calories brûlées (kCal)" />
        </BarChart>
      </ResponsiveContainer>
      </>);
}

export default SimpleBar