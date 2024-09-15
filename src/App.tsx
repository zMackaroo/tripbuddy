import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {
  AuthProvider,
  Landing,
  Maintenance,
  TripPlanner,
} from '@Utils/Constant';
import { ContextProvider } from '@Utils/Context/Context';

function App() {
  return (
    <Suspense>
      <Maintenance>
        <ContextProvider>
          <BrowserRouter>
            <Routes>
              <Route index element={<Landing />} />
              <Route path="/trip-planner" element={<AuthProvider />}>
                <Route path="/trip-planner" element={<TripPlanner />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ContextProvider>
      </Maintenance>
    </Suspense>
  );
}

export default App;
