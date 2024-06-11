import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const EventGenresChart = ({ events }) => {
    const [data, setData] = useState([]);
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];
    const colors = ['#DD0000', '#00DD00', '#0000DD', '#DDDD00', '#DD00DD'];    

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

    const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, index }) => {
        const RADIAN = Math.PI / 180;
        const radius = outerRadius;
        const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
        const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;
        return percent ? (
          <text
            x={x}
            y={y}
            fill="#8884d8"
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
          >
            {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
          </text>
        ) : null;
    };

    return (
      <ResponsiveContainer width="99%" height={400}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            fill="#8884d8"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={130}           
          >
           {
              data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
                ))
              }
          </Pie>
          <legend />
        </PieChart>
      </ResponsiveContainer>
    );
}

export default EventGenresChart;