/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import Palawan from '@Images/Places/Palawan.jpeg';
import Baguio from '@Images/Places/Baguio.jpg';
import Siargao from '@Images/Places/Siargao.jpg';
import Boracay from '@Images/Places/boracay.webp';
import LaUnion from '@Images/Places/LaUnion.jpg';

import { GooglePlaceAPIKey } from '@Utils/Constant';
import { Store } from '@Utils/Context/Context';

const TopPickedDestination = () => {
  return (
    <div className="suggested__places__details">
      <div className="suggested__places__details--place">
        <img loading="lazy" src={Palawan} />
        <div>Palawan Island</div>
      </div>
      <div className="suggested__places__details--place">
        <img loading="lazy" src={Baguio} />
        <div>Baguio, Benguet</div>
      </div>
      <div className="suggested__places__details--place">
        <img loading="lazy" src={Siargao} />
        <div>Siargao Island</div>
      </div>
      <div className="suggested__places__details--place">
        <img loading="lazy" src={Boracay} />
        <div>Boracay Island</div>
      </div>
      <div className="suggested__places__details--place">
        <img loading="lazy" src={LaUnion} />
        <div>La Union, Ilocos</div>
      </div>
    </div>
  );
};

function SelectDestination() {
  const { updateStore, geminiParamsConfig }: any = useContext(Store);
  const [destination, setDestination] = useState(
    geminiParamsConfig.destination
  );

  return (
    <>
      <h2 className="headline">
        Tell us your travel preferences <i className="fa-solid fa-plane"></i>
      </h2>
      <p className="description">Where do you want to go?</p>
      <div className="search-destination">
        <GooglePlacesAutocomplete
          apiKey={GooglePlaceAPIKey}
          selectProps={{
            defaultInputValue: destination,
            onChange: ({ label }: any) => {
              updateStore({
                geminiParamsConfig: {
                  ...geminiParamsConfig,
                  destination: label,
                },
              });
              setDestination(label);
            },
            placeholder: 'Start typing, Ex: Siargao, Philippines',
          }}
        />
      </div>
      <TopPickedDestination />
    </>
  );
}

export default SelectDestination;
