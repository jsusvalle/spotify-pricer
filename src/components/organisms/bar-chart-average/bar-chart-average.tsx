import { FC } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';

import { CustomTooltip } from 'components/molecules';

import { colorRegions } from 'helpers';

type BarChartAverageProps = {
  data: {
    region: string;
    average: number;
  }[];
};

export const BarChartAverage: FC<BarChartAverageProps> = ({ data }) => {
  return (
    <div className="container-chart">
      <ResponsiveContainer width="95%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="region" stroke="#8884d8" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="average" fill="#8884d8" barSize={30}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colorRegions[entry.region]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
