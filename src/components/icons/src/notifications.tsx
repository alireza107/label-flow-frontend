import BaseIcon from '@/components/icons/base-icon';
import { SvgIconType } from '@/components/icons/icon.types';

export default function SvgIcon(props: SvgIconType): JSX.Element {
  return (
    <BaseIcon {...props}>
      <g clipPath="url(#a)">
        <path d="M19.2901 17.79L18.0001 16.5V11.5C18.0001 8.43 16.3601 5.86 13.5001 5.18V4.5C13.5001 3.67 12.8301 3 12.0001 3C11.1701 3 10.5001 3.67 10.5001 4.5V5.18C7.63005 5.86 6.00005 8.42 6.00005 11.5V16.5L4.71005 17.79C4.08005 18.42 4.52005 19.5 5.41005 19.5H18.5801C19.4801 19.5 19.9201 18.42 19.2901 17.79ZM16.0001 17.5H8.00005V11.5C8.00005 9.02 9.51005 7 12.0001 7C14.4901 7 16.0001 9.02 16.0001 11.5V17.5ZM12.0001 22.5C13.1001 22.5 14.0001 21.6 14.0001 20.5H10.0001C10.0001 21.6 10.8901 22.5 12.0001 22.5Z" />
      </g>
      <defs>
        <clipPath id="a">
          <rect width="24" height="24" />
        </clipPath>
      </defs>
    </BaseIcon>
  );
}
