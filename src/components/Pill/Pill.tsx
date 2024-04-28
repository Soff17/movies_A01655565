import React from 'react';
import { IPill } from './types';

const Pill: React.FC<IPill> = ({
  title,
  color,
}) => {
  return (
    <span className="text-whit px-4 py-1 rounded text-sm" style={{backgroundColor: color}}>
      {title}
    </span>
  );
};

export default Pill;
