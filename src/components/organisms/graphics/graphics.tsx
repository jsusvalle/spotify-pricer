import { FC, useMemo } from 'react';

import { Country, DataByRegions } from 'models';

import { Chart1, Chart2, Chart3 } from 'components/templates';

import { groupBy } from 'helpers';

import './graphics.css';

type GraphicsProps = {
  data: Country[];
  component?: string;
  title?: string;
  subtitle?: string;
};

export const Graphics: FC<GraphicsProps> = ({
  data,
  component,
  title,
  subtitle,
}) => {
  const dataByRegions: DataByRegions = useMemo(() => {
    return groupBy(data, 'region');
  }, [data]);

  const renderComponent = () => {
    if (component === 'chart_1') {
      return <Chart1 data={dataByRegions} />;
    } else if (component === 'chart_2') {
      return <Chart2 data={dataByRegions} />;
    }

    return <Chart3 data={dataByRegions} />;
  };

  return (
    <section className="graphic">
      <div className="graphic__img">{renderComponent()}</div>
      <span className="graphic__description">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </span>
    </section>
  );
};
