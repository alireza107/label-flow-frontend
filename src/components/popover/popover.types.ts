import { ComponentBase } from '../types/component-base.type';

type Horizontal = 'left' | 'center' | 'right';
type Vertical = 'top' | 'center' | 'bottom';

interface Origin {
  horizontal: Horizontal;
  vertical: Vertical;
}

export type PopoverProps = Pick<ComponentBase, 'className'> & {
  id: string;
  open: boolean;
  anchorEl?: HTMLElement | null;
  anchorOrigin?: Origin;
  transformOrigin?: Origin;
  position?: { top: number; left: number }; // Position for popover when anchorEl is not provided
  onClose: () => void;
  children: React.ReactNode;
};
