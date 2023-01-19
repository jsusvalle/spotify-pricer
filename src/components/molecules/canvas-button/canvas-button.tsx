import type { FC } from 'react';

import { Button } from 'components/atoms';
import './canvas-button.css';

type CanvasButtonProps = {
  textButton: string;
  description: string;
  onClick: () => void;
};

export const CanvasButton: FC<CanvasButtonProps> = ({
  textButton,
  description,
  onClick,
}) => {
  return (
    <span className="container">
      <p>{description}</p>
      <Button onClick={onClick}>{textButton}</Button>
    </span>
  );
};
