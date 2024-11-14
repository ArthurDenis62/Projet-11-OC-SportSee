import React, { useState, useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import ApiRequest from '../../services/apiRequest';

const PerformanceRadar = ({ userId }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchPerformanceData = async () => {
      try {
        const performanceDataResponse = await ApiRequest(userId);
        const performanceData = performanceDataResponse[3].data.data.data;
        const transformedData = performanceData.map((item) => ({
          subject: performanceDataResponse[3].data.data.kind[item.kind],
          value: item.value,
        }));
        setChartData(transformedData);
      } catch (error) {
        console.error("Erreur lors de la récupération des données : ", error);
      }
    };

    fetchPerformanceData();
  }, [userId]);
  return (<>
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart data={chartData} outerRadius="70%">
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" tick={{ fill: '#555' }} />
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
