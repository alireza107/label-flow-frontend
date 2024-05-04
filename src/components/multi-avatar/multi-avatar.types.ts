import { ComponentBase } from '../types/component-base.type';

export type MultiAvatarProps = Omit<ComponentBase, 'isDisabled'> & {
  className?: string;
  size?: 'tiny' | 'small' | 'normal' | 'large';
  avatars: string[];
  alt?: string;
  max?: number;
};
