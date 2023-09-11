import React from 'react';
import { Area, XAxis, YAxis, Tooltip, CartesianGrid, Bar, ComposedChart } from 'recharts';
import styled from 'styled-components';

const ChartContainer = styled.div``;

type TimeSeriesData = {
  key: string;
  id: string;
  value_area: number;
  value_bar: number;
};

interface TimeSeriesChartProps {
  data: TimeSeriesData[];
}

const TimeSeriesChart: React.FC<TimeSeriesChartProps> = ({ data }) => {
  return (
    <ChartContainer>
      <ComposedChart width={800} height={400} data={data}>
        <XAxis dataKey="key" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Area type="monotone" dataKey="value_area" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="value_bar" barSize={20} fill="#413ea0" />
      </ComposedChart>
    </ChartContainer>
  );
};

export default TimeSeriesChart;
