import { HTMLAttributes, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';

type LinksProps = {
  children: ReactNode;
} & Omit<HTMLAttributes<HTMLAnchorElement>, 'href'> &
  LinkProps;

export function Links({ children, ...props }: LinksProps) {
  return (
    <Link
      {...props}
      className='flex items-center gap-2 text-base-blue font-bold text-xs border-b border-base-profile hover:border-b-base-blue hover:border-b'
    >
      {children}
    </Link>
  );
}
