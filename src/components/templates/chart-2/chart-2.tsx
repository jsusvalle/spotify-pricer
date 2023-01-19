import { FC, useMemo } from 'react';

import { BarChartAverage } from 'components/organisms';

import { DataByRegions } from 'models';

import { getAverageOfValues } from 'helpers';

type Chart2Props = {
  data: DataByRegions;
};

export const Chart2: FC<Chart2Props> = ({ data }) => {
  const dataAverageByRegions = useMemo(() => {
    return getAverageOfValues(data);
  }, [data]);

  return <BarChartAverage data={dataAverageByRegions} />;
};
