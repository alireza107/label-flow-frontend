import React from 'react'

import Link from 'next/link'

import { BreadcrumbProps } from './breadcrumb.types'

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ breadcrumbs }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex">
        {breadcrumbs.map((link, index) => (
          <li key={index} className="text-sm">
            {index !== breadcrumbs.length - 1 ? (
              <>
                <Link className="text-base-200 hover:text-black" href={link.path}>
                  {link.name}
                </Link>
                <span className="text-base-200 mx-2"> / </span>
              </>
            ) : (
              <p className="text-base-200 ">{link.name}</p>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
