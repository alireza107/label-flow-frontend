import classNames from 'classnames';

import { Loading } from '../loading/loading';
import { Size } from '../types/size.type';
import { ButtonProps, ButtonShape } from './button.types';

const sizeClasses: Record<Size, string> = {
  tiny: 'btn-xs',
  small: 'btn-sm',
  normal: '',
  large: 'btn-lg',
};

const shapeClasses: Record<ButtonShape, string> = {
  wide: 'btn-wide',
  full: 'btn-block',
  square: 'btn-square',
  circle: 'btn-circle',
  default: '',
};

export const Button: React.FC<ButtonProps> = ({
  variant,
  size = 'normal',
  isDisabled = false,
  isOutline = false,
  shape = 'default',
  isLoading = false,
  loadingType = 'spinner',
  loadingText = '...',
  type = 'button',
  isLink = false,
  animatedIcon = false,
  children,
  className,
  ...rest
}: ButtonProps) => {
  const classes = classNames(
    'btn',
    className,
    { 'btn-outline': isOutline },
    { 'btn-link': isLink },
    { 'animated-icon': animatedIcon },
    { 'pointer-events-none opacity-8-': isLoading },
    { [`btn-${variant}`]: variant },
    { [sizeClasses[size]]: size },
    { [shapeClasses[shape]]: shape },
  );

  return (
    <button type={type} disabled={isDisabled} {...rest} className={classes}>
      {isLoading && <Loading type={loadingType} />}
      {isLoading ? loadingText : children}
    </button>
  );
};
