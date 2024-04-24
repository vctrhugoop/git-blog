import { ReactNode } from 'react';

type LinksProps = {
  url: string;
  children: ReactNode;
};

export function Links({ url, children }: LinksProps) {
  return (
    <a
      href={url}
      target='_blank'
      className='flex items-center gap-2 text-base-blue font-bold text-xs hover:border-b-base-blue hover:border-b'
    >
      {children}
    </a>
  );
}
