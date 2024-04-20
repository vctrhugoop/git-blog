import { CardInfo } from './components/CardInfos';

export function App() {
  return (
    <div>
      <header className="bg-[url('/src/assets/Cover.png')] h-[292px] bg-cover bg-center"></header>
      <div className='px-4'>
        <CardInfo />
      </div>
    </div>
  );
}
