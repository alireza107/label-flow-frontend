import React from 'react';

import classNames from 'classnames';
import Image from 'next/image';

import { IconProfile } from '../icons';
import { Size } from '../types/size.type';
import { AvatarProps } from './avatar.types';

const sizeClasses: Record<Size, number> = {
  tiny: 40,
  small: 50,
  normal: 70,
  large: 120,
};

export const Avatar: React.FC<AvatarProps> = ({
  variant,
  className,
  size = 'normal',
  src,
  alt = '',
  style,
}) => {
  const classes = classNames('avatar', className, {
    [`avatar-ringed avatar-ringed-${variant}`]: variant,
  });

  return (
    <div
      style={{ width: sizeClasses[size], height: sizeClasses[size], ...style }}
      className={classes}
    >
      {src ? (
        <Image src={src} width={sizeClasses[size]} height={sizeClasses[size]} alt={alt} />
      ) : (
        <IconProfile width={sizeClasses[size] / 2} height={sizeClasses[size] / 2} />
      )}
    </div>
  );
};
