import { Route, Routes } from 'react-router-dom';
import { App } from './App';
import { Home } from './pages/Home';
import { Post } from './pages/Post';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Home />} />
        <Route path='/issues/:number' element={<Post />} />
      </Route>
    </Routes>
  );
}
