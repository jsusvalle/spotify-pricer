import { FC, useMemo } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import { sortByHighToLowPrice } from 'helpers';

import { CustomTooltip } from 'components/molecules';

import { Country } from 'models';

import './bar-chart-by-region.css';

type Chart1Props = {
  data: Country[];
  regionName: string;
};

export const BarChartByRegion: FC<Chart1Props> = ({ regionName, data }) => {
  const sortData = useMemo(() => {
    return sortByHighToLowPrice(data);
  }, [data]);

  return (
    <div className="container-region">
      <h4 className="title-region">Region {regionName}</h4>

      <div className="container-chart">
        <ResponsiveContainer width="95%" height={300}>
          <BarChart data={sortData}>
            <XAxis dataKey="title" stroke="#8884d8" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="convertedPrice" fill="#8884d8" barSize={30} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
