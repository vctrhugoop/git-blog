import { CardInfo } from './components/CardInfos';

export function App() {
  return (
    <div>
      <header className="bg-[url('/src/assets/Cover.png')] h-[292px] bg-cover bg-center hidden md:block"></header>
      <div className='px-4'>
        <CardInfo />
        <main></main>
      </div>
    </div>
  );
}
