import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard, Landing } from '@Utils/Constant';

function App() {
  return (
    <Suspense fallback="Loading">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
