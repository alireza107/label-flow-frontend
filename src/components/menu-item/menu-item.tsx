import classNames from 'classnames'

import { MenuItemProps } from './menu-item.type'

const MenuItem: React.FC<MenuItemProps> = ({
  isDisabled,
  className,
  icon,
  text,
  isActive,
  ...rest
}: MenuItemProps) => {
  const classes = classNames('menu-item', className, {
    'pointer-events-none': isDisabled,
    'menu-item--active': isActive,
  })

  return (
    <div className={classes} {...rest}>
      {icon && <div>{icon}</div>}
      <div>{text}</div>
    </div>
  )
}

export default MenuItem
