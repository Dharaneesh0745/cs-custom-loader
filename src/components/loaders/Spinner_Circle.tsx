import React from 'react';
import { LoaderProps } from '../../types/LoaderProps';

const Spinner_Circle: React.FC<LoaderProps> = ({ size = 40, color = 'blue' }) => {

  return (
    <div
      className="rounded-full animate-spin border-4 border-t-transparent"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderColor: `${color} transparent transparent transparent`,
      }}
    />
  );
};

export default Spinner_Circle;
