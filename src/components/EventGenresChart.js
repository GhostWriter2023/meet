import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

const EventGenresChart = ({ events }) => {
    const [data, setData] = useState([]);
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];
    const colors = ['#DD0000', '#00DD00', '#0000DD', '#FFAC67', '#DD00DD'];    

    useEffect(() => {
      setData(getData());
    }, [`${events}`]);

    const getData = () => {
      const data = genres.map((genre, index) => {
      const filteredEvents = events.filter(event => event.summary.includes(genre));      
      return {
          name: genre,
          value: filteredEvents.length,
          color: colors[index]
        }
      })
      return data;
    };   

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const RADIAN = Math.PI / 180;
        const radius = innerRadius + (outerRadius - innerRadius)  * 0.66;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        return percent ? (
          <text
            x={x}
            y={y}
            fill="#4c4c4c"
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
            fontSize="20"
          >
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        ) : null;
    };

    return (
      <ResponsiveContainer width="99%" height={400}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            fill="#4c4c4c"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}           
          >
           {
              data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
                ))
              }
          </Pie>
          <Legend height={36} />
        </PieChart>
      </ResponsiveContainer>
    );
}

export default EventGenresChart;