import { Outlet } from 'react-router-dom';

export function App() {
  return (
    <div>
      <header className="bg-[url('/src/assets/Cover.png')] h-[292px] bg-cover bg-center hidden md:block" />
      <Outlet />
    </div>
  );
}
