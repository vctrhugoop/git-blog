import { Outlet } from 'react-router-dom';
import Logo from './assets/Logo.png';

export function App() {
  return (
    <div>
      <header className="bg-[url('/src/assets/Cover.png')] h-[292px] bg-cover bg-center hidden md:flex items-center justify-center">
        <img src={Logo} className='mb-12' />
      </header>
      <Outlet />
    </div>
  );
}
