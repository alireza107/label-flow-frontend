import BaseIcon from '@/components/icons/base-icon';
import { SvgIconType } from '@/components/icons/icon.types';

export default function SvgIcon(props: SvgIconType): JSX.Element {
  return (
    <BaseIcon {...props}>
      <g clipPath="url(#a)">
        <path d="M9.95703 18.5C12.733 18.5 15.2684 17.237 16.9481 15.1675C17.1966 14.8613 16.9256 14.4141 16.5416 14.4872C12.1751 15.3188 8.16522 11.9709 8.16522 7.56303C8.16522 5.02398 9.52444 2.68914 11.7335 1.43199C12.074 1.23821 11.9884 0.721941 11.6015 0.650469C11.059 0.550447 10.5086 0.500082 9.95703 0.5C4.98914 0.5 0.957031 4.52578 0.957031 9.5C0.957031 14.4679 4.98281 18.5 9.95703 18.5Z" />
      </g>
      <defs>
        <clipPath id="a">
          <rect width="18" height="18" />
        </clipPath>
      </defs>
    </BaseIcon>
  );
}
