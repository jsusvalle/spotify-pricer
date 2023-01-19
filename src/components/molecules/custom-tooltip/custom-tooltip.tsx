import { TooltipProps } from 'recharts';

import './custom-tooltip.css';

export const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

export const CustomTooltipScatter = ({
  active,
  payload,
}: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`Country: ${payload[1].payload.title}`}</p>
        <p className="label">{`Price: ${payload[1].value}`}</p>
        <p className="label">{`Region: ${payload[1].payload.region}`}</p>
      </div>
    );
  }

  return null;
};
