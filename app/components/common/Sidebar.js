import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, ReferenceLine, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { x: 0, value: 10 },
  { x: 10, value: 15 },
  { x: 20, value: 20 },
  { x: 25, value: 35 }, // Your percentile point
  { x: 35, value: 45 },
  { x: 40, value: 60 },
  { x: 45, value: 90 },
  { x: 50, value: 85 },
  { x: 60, value: 55 },
  { x: 70, value: 30 },
  { x: 80, value: 20 },
  { x: 85, value: 18 },
  { x: 90, value: 35, isSpecial: true },
  { x: 100, value: 10 }
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length && payload[0].payload.isSpecial) {
    return (
      <div className="bg-white p-2 border border-gray-200 rounded shadow-sm">
        <p className="font-medium">90</p>
        <p className="text-blue-500">numberOfStudent: 4</p>
      </div>
    );
  }
  return null;
};

const StudentPercentileChart = () => {
  return (
    <div className="w-full h-64 p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart 
          data={data} 
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <XAxis 
            dataKey="x" 
            type="number" 
            domain={[0, 100]} 
            tickCount={5}
            stroke="#666"
          />
          <YAxis hide />
          <Tooltip content={<CustomTooltip />} />
          <ReferenceLine 
            x={25} 
            stroke="#666" 
            strokeDasharray="3 3" 
            label={{ 
              value: 'your percentile', 
              position: 'top',
              fill: '#666',
              fontSize: 12,
              offset: 10
            }} 
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#6366f1"
            strokeWidth={2}
            dot={(props) => {
              if (props.payload.isSpecial) {
                return (
                  <circle
                    cx={props.cx}
                    cy={props.cy}
                    r={4}
                    fill="#6366f1"
                    stroke="none"
                  />
                );
              }
              return (
                <circle
                  cx={props.cx}
                  cy={props.cy}
                  r={3}
                  stroke="#6366f1"
                  fill="white"
                />
              );
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StudentPercentileChart;