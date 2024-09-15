/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useContext } from 'react';

import { Store } from '@Utils/Context/Context';

function useItinerary() {
  const { getPlace }: any = useContext(Store);
  const [destinationImage, setDestinationImage] = useState('');

  const getPlaces = async (place: any) => {
    const image = await getPlace(place);
    setDestinationImage(image);
  };

  return {
    getPlaces,
    destinationImage,
  };
}

export default useItinerary;
