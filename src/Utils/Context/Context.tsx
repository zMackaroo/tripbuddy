/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useMemo, useReducer } from 'react';
import { applicationReducer, initialStore } from './Reducer/applicationReducer';

const Store = createContext(initialStore);

function ContextProvider({ children }: any) {
  const [applicationStore, dispatch] = useReducer(
    applicationReducer,
    initialStore
  );

  const updateStore = (objValue: any) => {
    dispatch({ type: 'UPDATE_STORE', payload: objValue });
  };

  const MemoStore = useMemo(() => {
    return {
      ...applicationStore,
      updateStore,
    };
  }, [applicationStore]);

  return <Store.Provider value={MemoStore}>{children}</Store.Provider>;
}

export { ContextProvider, Store };
