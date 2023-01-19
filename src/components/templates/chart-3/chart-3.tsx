import { FC, useMemo } from 'react';

import { ScatterPlotChart } from 'components/organisms';

import { DataByRegions } from 'models';

import { getMaxAndMinEachRegions } from 'helpers';

type Chart3Props = {
  data: DataByRegions;
};

export const Chart3: FC<Chart3Props> = ({ data }) => {
  const dataByRegions = useMemo(() => {
    return getMaxAndMinEachRegions(data);
  }, [data]);

  return <ScatterPlotChart data={dataByRegions} />;
};
