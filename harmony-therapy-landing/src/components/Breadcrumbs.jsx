"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Breadcrumbs = () => {
  const pathname = usePathname(); // Get current path
  const pathSegments = pathname.split('/').filter(Boolean);

  return (
    <nav aria-label="Breadcrumb" className="text-sm mt-4">
      <ul className="flex space-x-2">
        <li>
          <Link href="/" className="text-blue-500 hover:underline">
            Home
          </Link>
          <span className="mx-2 text-gray-500">/</span>
        </li>
        {pathSegments.map((segment, index) => {
          const breadcrumbPath = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const isLast = index === pathSegments.length - 1;

          return (
            <li key={index}>
              {!isLast ? (
                <Link href={breadcrumbPath} className="text-blue-500 hover:underline capitalize">
                  {segment}
                </Link>
              ) : (
                <span className="text-gray-600 capitalize">{segment}</span>
              )}
              {!isLast && <span className="mx-2 text-gray-500">/</span>}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
