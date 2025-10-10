import { BrowserRouter, Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import LogPage from './pages/LogPage';
import NotFoundPage from './pages/NotFoundPage';


function App() {
  return (  
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} index/>
        <Route element={<LogPage />} path='log' />
        <Route element={<NotFoundPage />} path='*'/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;