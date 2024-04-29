export type MenuItemProps = {
  text: string;
  className?: string;
  isActive?: boolean;
  isDisabled?: boolean;
  onClick?: VoidFunction;
  icon?: React.ReactNode;
};
