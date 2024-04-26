import React from 'react'

import classNames from 'classnames'
import Image from 'next/image'

import { Size } from '../types/size.type'
import { AvatarProps } from './avatar.types'

const sizeClasses: Record<Size, number> = {
  tiny: 40,
  small: 50,
  normal: 70,
  large: 120,
}

export const Avatar: React.FC<AvatarProps> = ({
  variant,
  className,
  size = 'normal',
  src,
  alt = '',
}) => {
  const classes = classNames('avatar', className, {
    [`avatar-ringed avatar-ringed-${variant}`]: variant,
    [`${sizeClasses[size]}`]: size,
  })

  return (
    <div style={{ width: sizeClasses[size], height: sizeClasses[size] }} className={classes}>
      {src ? (
        <Image src={src} width={sizeClasses[size]} height={sizeClasses[size]} alt={alt} />
      ) : (
        // TODO: add profile icon after merge icon pack PR
        <span>avatar not found</span>
      )}
    </div>
  )
}
