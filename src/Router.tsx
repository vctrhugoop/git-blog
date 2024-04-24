import { Route, Routes } from 'react-router-dom';
import { App } from './pages/App';
import { Post } from './pages/Post';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/issues/:number' element={<Post />} />
    </Routes>
  );
}
