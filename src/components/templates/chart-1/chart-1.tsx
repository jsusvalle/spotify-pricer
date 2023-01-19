import { FC } from 'react';

import { BarChartByRegion } from '../../organisms/bar-chart-by-region';

import { DataByRegions } from 'models';

type Chart1Props = {
  data: DataByRegions;
};

export const Chart1: FC<Chart1Props> = ({ data }) => {
  return (
    <>
      {Object.keys(data).length > 0 &&
        Object.keys(data).map(region => (
          <BarChartByRegion
            key={region}
            regionName={region}
            data={data[region]}
          />
        ))}
    </>
  );
};
