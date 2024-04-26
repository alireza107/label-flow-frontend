import { NonEmptyArray } from '@/types'

export type BreadcrumbProps = {
  breadcrumbs: NonEmptyArray<{ name: string; path: string }>
  className?: string
}
