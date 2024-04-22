import React from 'react'

import Link from 'next/link'

import { BreadcrumbProps } from './breadcrumb.types'

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ links }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex">
        {links.map((link, index) => (
          <li key={index} className="text-sm">
            {index !== links.length - 1 ? (
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
