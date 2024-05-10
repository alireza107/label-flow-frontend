import classNames from 'classnames';

import { SkeletonProps } from './skeleton.types';

export const Skeleton: React.FC<SkeletonProps> = ({
  width = 100,
  height = 100,
  shape = 'rect',
  className,
}) => {
  const classes = classNames(
    'animate-pulse bg-base-200',
    { 'rounded-full': shape === 'circle' },
    { rounded: shape === 'rect' },
    className,
  );

  return <div style={{ width, height }} className={classes}></div>;
};
