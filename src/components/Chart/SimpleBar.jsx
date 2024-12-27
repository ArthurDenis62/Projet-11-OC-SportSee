import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import CustomTooltip from './CustomTooltip';

const SimpleBar = ({ chartData }) => {
    return (<>
    <p>Activité quotidienne</p>
      <ResponsiveContainer width="100%" aspect={850 / 320}>
        <BarChart data={chartData}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis yAxisId="right" dataKey="kilogram" orientation="right" domain={[68, 71]} allowDecimals={false} />
          <YAxis yAxisId="left" dataKey="calories" orientation="left" domain={[161, 600]} allowDecimals={false} hide={true}  />
          <Tooltip separator='' offset={60} wrapperStyle={{position: "absolute", width: "40px", height: "65px" }} contentStyle={{ backgroundColor: "red" }}  content={<CustomTooltip/>}/>
          <Legend wrapperStyle={{ position: "absolute", width: "auto", height: "auto", top: -20, right: 5 }} />
          <Bar yAxisId="right" barSize="7" radius={[10, 10, 0, 0]} dataKey="kilogram" fill="#282D30" name="Poids (kg)" />
          <Bar yAxisId="left" barSize="7" radius={[10, 10, 0, 0]} dataKey="calories" fill="#E60000" name="Calories brûlées (kCal)" />
        </BarChart>
      </ResponsiveContainer>
      </>);
}

export default SimpleBar

//Tooltip composant https://recharts.org/en-US/api/Tooltip