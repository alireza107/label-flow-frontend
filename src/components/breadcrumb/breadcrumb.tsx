import React from 'react';

import Link from 'next/link';

import { BreadcrumbProps } from './breadcrumb.types';

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ breadcrumbs, className }) => {
  return (
    <nav aria-label="breadcrumb" className={className}>
      <ol className="flex">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index} className="text-sm">
            {index !== breadcrumbs.length - 1 ? (
              <>
                <Link className="text-base-200 hover:text-black" href={breadcrumb.path}>
                  {breadcrumb.name}
                </Link>
                <span className="mx-2 text-base-200"> / </span>
              </>
            ) : (
              <p className="text-base-200 ">{breadcrumb.name}</p>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
