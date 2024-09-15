/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { createContext, useMemo, useReducer } from 'react';
import { applicationReducer, initialStore } from './Reducer/applicationReducer';
import { GooglePlaceAPIKey } from '@Utils/Constant';

const Store = createContext(initialStore);

function ContextProvider({ children }: any) {
  const [applicationStore, dispatch] = useReducer(
    applicationReducer,
    initialStore
  );

  const updateStore = (objValue: any) => {
    dispatch({ type: 'UPDATE_STORE', payload: objValue });
  };

  const getPlace = async (place: any) => {
    const BASE_URL = import.meta.env.VITE_GOOGLE_PLACES_API_BASE_URL;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': import.meta.env.VITE_GOOGLE_PLACES_API_KEY,
        'X-Goog-FieldMask': [
          'places.photos',
          'places.displayName',
          'places.id',
        ],
      },
    };
    const request = axios.post(BASE_URL, { textQuery: place }, config);
    const { image, media } = await request.then((res) => {
      const randomPicker = Math.floor(
        Math.random() * res.data.places[0].photos.length
      );
      const image = res.data.places[0].photos[randomPicker].name;
      const media = {
        maxWidth: res.data.places[0].photos[randomPicker].widthPx,
        maxHeight: res.data.places[0].photos[randomPicker].heightPx,
      };

      return { image, media };
    });
    return `https://places.googleapis.com/v1/${image}/media?maxHeightPx=${media.maxHeight}&maxWidthPx=${media.maxWidth}&key=${GooglePlaceAPIKey}`;
  };

  const MemoStore = useMemo(() => {
    return {
      ...applicationStore,
      updateStore,
      getPlace,
    };
  }, [applicationStore]);

  return <Store.Provider value={MemoStore}>{children}</Store.Provider>;
}

export { ContextProvider, Store };
