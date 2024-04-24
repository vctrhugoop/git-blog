import { CardIssues } from '../components/CardIssues';
import { Profile } from '../components/Profile';
import { useGitHubData } from '../hooks/useGitHubData';

export function Home() {
  const { issuesInfo } = useGitHubData();

  return (
    <section className='px-4 max-w-4xl mx-auto w-full pb-9'>
      <Profile />

      <main className='mt-[72px]'>
        <div className='flex items-center justify-between'>
          <h2 className='text-lg font-bold text-base-subtitle'>Publicações</h2>
          <span className='text-sm text-base-span'>
            {issuesInfo?.length} publicações
          </span>
        </div>

        <input
          type='text'
          className='w-full mt-3 py-3 px-4 rounded-md bg-base-input border text-base-text border-base-border placeholder:text-base-label focus-visible:border-base-blue outline-none'
          placeholder='Buscar conteúdo'
        />

        <section className='mt-12'>
          <CardIssues />
        </section>
      </main>
    </section>
  );
}
