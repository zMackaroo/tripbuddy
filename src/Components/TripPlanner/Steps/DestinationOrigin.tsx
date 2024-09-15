/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

import { GooglePlaceAPIKey } from '@Utils/Constant';
import { Store } from '@Utils/Context/Context';

function DestinationOrigin() {
  const { updateStore, geminiParamsConfig }: any = useContext(Store);
  const [origin, setOrigin] = useState(geminiParamsConfig.origin);

  return (
    <>
      <h2 className="headline">
        Tell us more about you. Where will you originate?{' '}
        <i className="fa-solid fa-plane-departure"></i>
      </h2>
      <p className="description">{geminiParamsConfig.destination}</p>
      <div className="search-destination">
        <GooglePlacesAutocomplete
          apiKey={GooglePlaceAPIKey}
          selectProps={{
            defaultInputValue: origin,
            onChange: ({ label }: any) => {
              updateStore({
                geminiParamsConfig: {
                  ...geminiParamsConfig,
                  origin: label,
                },
              });
              setOrigin(label);
            },
            placeholder:
              'Ex. Hotel101-Fort, Target Street, Taguig. Metro Manila Philippines',
          }}
        />
      </div>
    </>
  );
}

export default DestinationOrigin;
