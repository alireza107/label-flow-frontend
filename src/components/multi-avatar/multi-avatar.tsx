import classNames from 'classnames';

import { Avatar } from '../avatar';
import { Size } from '../types/size.type';
import { MultiAvatarProps } from './multi-avatar.types';

const sizeClasses: Record<Size, number> = {
  tiny: 40,
  small: 50,
  normal: 70,
  large: 120,
};

export const MultiAvatar: React.FC<MultiAvatarProps> = ({
  avatars,
  className,
  size = 'normal',
  max = 4,
}) => {
  const visibleAvatars = avatars?.slice(0, max);
  const remainingAvatars = avatars?.length - max;
  const classes = classNames('multi-avatar', className, {});

  return (
    <div style={{ height: sizeClasses[size], width: '100%' }} className={classes}>
      {remainingAvatars > 0 && (
        <div
          style={{
            width: sizeClasses[size],
            height: sizeClasses[size],
            left: `${(max * sizeClasses[size]) / 2}px`,
            fontSize: sizeClasses[size] / 3,
          }}
          className="multi-avatar-remaining"
        >
          {remainingAvatars}+
        </div>
      )}
      {visibleAvatars?.map((avatar, index) => (
        <Avatar
          key={index}
          src={avatar}
          size={size}
          className={`absolute border-4 border-white`}
          style={{
            left: `${(index * sizeClasses[size]) / 2}px`,
          }}
        />
      ))}
    </div>
  );
};
