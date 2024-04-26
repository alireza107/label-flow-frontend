import classNames from 'classnames'

import { MenuItemProps } from './menu-item.types'

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
    <li className={classes} {...rest}>
      {icon && <div>{icon}</div>}
      <div className="select-none">{text}</div>
    </li>
  )
}

export default MenuItem
