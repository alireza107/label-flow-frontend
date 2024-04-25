import BaseIcon from '@/components/icons/base-icon'
import { SvgIconType } from '@/components/icons/icon.types'

export default function SvgIcon(props: SvgIconType): SvgIconType {
  return (
    <BaseIcon {...props}>
      <path d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z" />
    </BaseIcon>
  )
}
