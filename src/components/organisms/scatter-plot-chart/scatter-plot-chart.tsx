import { FC } from 'react';
import {
  ScatterChart,
  Scatter,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import { Country } from 'models';

import { CustomTooltipScatter } from 'components/molecules';

import { colorRegions } from 'helpers';

type ScatterPlotChartProps = {
  data: Country[];
};

export const ScatterPlotChart: FC<ScatterPlotChartProps> = ({ data }) => {
  return (
    <div className="container-chart">
      <ResponsiveContainer width="95%" height={500}>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}>
          <CartesianGrid />
          <XAxis type="number" dataKey="gdp" name="GDP" />
          <YAxis type="number" dataKey="convertedPrice" name="Price" />
          <Tooltip
            cursor={{ strokeDasharray: '3 3' }}
            content={<CustomTooltipScatter />}
          />
          <Scatter name="Gdp & price comparison" data={data} fill="#8884d8">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colorRegions[entry.region]} />
            ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};
