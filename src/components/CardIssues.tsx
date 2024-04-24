import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Link } from 'react-router-dom';
import { useGitHubData } from '../hooks/useGitHubData';

export function CardIssues() {
  const { issuesInfo } = useGitHubData();

  return (
    <div className='grid gap-8 w-full md:grid-cols-2'>
      {issuesInfo &&
        issuesInfo.map((issue) => (
          <Link
            key={issue.id}
            className='bg-base-post rounded-lg p-8 overflow-hidden space-y-5 border-base-post border-2 hover:border-base-border'
            to={`/issues/${issue.number}`}
          >
            <div className=''>
              <h3 className='text-xl font-bold text-base-title'>
                {issue.title}
              </h3>
              <small className='text-sm text-base-span'>
                {formatDistanceToNow(issue.created_at, {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </small>
            </div>

            <p className='line-clamp-4 text-base-text'>{issue.body}</p>
          </Link>
        ))}
    </div>
  );
}
