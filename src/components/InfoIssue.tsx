// import { formatDistanceToNow } from 'date-fns';
// import { ptBR } from 'date-fns/locale';
import { formatDistanceToNow } from 'date-fns';
import { IssuesInfo } from '../contexts/GitHubDataContext';
import { Links } from './Links';

import { ptBR } from 'date-fns/locale';
import {
  FaArrowUpRightFromSquare,
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaGithub,
} from 'react-icons/fa6';

interface InfoIssueProps {
  issueInfo: IssuesInfo;
}

export function InfoIssue({ issueInfo }: InfoIssueProps) {
  const { html_url, title, user, created_at, comments } = issueInfo;

  return (
    <header className='max-w-4xl mx-auto w-full space-y-5 bg-base-profile md:-mt-20 mt-4 px-8 py-8 gap-8 rounded-lg md:px-10 md:flex-row'>
      <div className='flex items-center justify-between'>
        <Links to='/'>
          <FaChevronLeft />
          VOLTAR
        </Links>
        <Links to={html_url} target='_blank'>
          VER NO GITHUB
          <FaArrowUpRightFromSquare />
        </Links>
      </div>
      <div className='space-y-2'>
        <h3 className='text-2xl font-bold text-base-title'>{title}</h3>
        <div className='flex items-center gap-6 text-xs md:text-base'>
          <span className='flex items-center gap-2 text-base-span'>
            <FaGithub className='text-base-label' />
            {user?.login}
          </span>
          <span className='flex items-center gap-2 text-base-span'>
            <FaCalendarDay className='text-base-label' />
            {created_at &&
              formatDistanceToNow(created_at, {
                addSuffix: true,
                locale: ptBR,
              })}
          </span>

          <span className='flex items-center gap-2 text-base-span'>
            <FaComment className='text-base-label' />
            {comments} comentários
          </span>
        </div>
      </div>
    </header>
  );
}
