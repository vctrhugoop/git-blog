import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

export function Links({ url }: { url: string }) {
  return (
    <a
      href={url}
      target='_blank'
      className='flex items-center gap-2 text-base-blue font-bold text-xs hover:border-b-base-blue hover:border-b'
    >
      GITHUB
      <FaArrowUpRightFromSquare />
    </a>
  );
}
