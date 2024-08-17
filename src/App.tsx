import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthProvider, Dashboard, Landing } from '@Utils/Constant';
import { ContextProvider } from '@Utils/Context/Context';

function App() {
  return (
    <Suspense>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Landing />} />
            <Route path="/create" element={<AuthProvider />}>
              <Route index element={<Dashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </Suspense>
  );
}

export default App;
