import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthProvider, Dashboard, Landing, Maintenance } from '@Utils/Constant';
import { ContextProvider } from '@Utils/Context/Context';

function App() {
  return (
    <Suspense>
      <Maintenance>
        <ContextProvider>
          <BrowserRouter>
            <Routes>
              <Route index element={<Landing />} />
              <Route path="/create" element={<AuthProvider />}>
                <Route path="/create" element={<Dashboard />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ContextProvider>
      </Maintenance>
    </Suspense>
  );
}

export default App;
