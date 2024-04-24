import { CardInfo } from '../components/CardInfos';
import { CardPost } from '../components/CardPost';
import { useGitHubData } from '../hooks/useGitHubData';

export function App() {
  const { issuesInfo } = useGitHubData();

  return (
    <div>
      <header className="bg-[url('/src/assets/Cover.png')] h-[292px] bg-cover bg-center hidden md:block"></header>

      <section className='px-4 max-w-4xl mx-auto w-full pb-9'>
        <CardInfo />

        <main className='mt-[72px]'>
          <div className='flex items-center justify-between'>
            <h2 className='text-lg font-bold text-base-subtitle'>
              Publicações
            </h2>
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
            <CardPost />
          </section>
        </main>
      </section>
    </div>
  );
}
