import BaseIcon from '@/components/icons/base-icon';
import { SvgIconType } from '@/components/icons/icon.types';

export default function SvgIcon(props: SvgIconType): JSX.Element {
  return (
    <BaseIcon {...props}>
      <path d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 6v-.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2v.8q0 .825-.587 1.413T18 20H6q-.825 0-1.412-.587T4 18" />
    </BaseIcon>
  );
}
