/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from 'react';
import { chatSession } from '@Utils/AIService/Gemini';

import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Backdrop,
} from '@mui/material';
import FetchingImage from '../../Assets/Images/Fetching.gif';
import SampleImage from '../../Assets/Images/360_F_91638843_ys2jBBI00psXxig5JkFX8PELNKyexJMl.jpg';

import { Store } from '@Utils/Context/Context';
import {
  Header,
  GooglePlaceAPIKey,
  travelGroupOptions,
  GEMINI_PROMPT,
  supportedCurrency,
} from '@Utils/Constant';

import './Dashboard.scss';

function Dashboard() {
  const {
    application,
    geminiParamsConfig,
    geminiGenerativeResult,
    updateStore,
  }: any = useContext(Store);
  const fieldValidate =
    geminiParamsConfig.destination !== '' &&
    geminiParamsConfig.days !== 0 &&
    geminiParamsConfig.budget !== 0 &&
    geminiParamsConfig.pax !== 0;

  const handleGroupSelection = (pax: string, selectedTravelGroup: string) => {
    updateStore({
      application: {
        ...application,
        selectedTravelGroup,
      },
      geminiParamsConfig: {
        ...geminiParamsConfig,
        pax,
      },
    });
  };

  const dismissModal = () => {
    updateStore({
      application: {
        ...application,
        showModal: !application.showModal,
      },
    });
  };

  const showBackDrop = (isFetching: boolean, showModal: boolean) => {
    updateStore({
      application: {
        ...application,
        isFetching,
        showModal,
      },
    });
  };

  const handleSubmit = async () => {
    showBackDrop(true, false);
    const transformedPrompt = GEMINI_PROMPT.replace(
      '{location}',
      geminiParamsConfig.destination
    )
      .replace('{days}', geminiParamsConfig.days)
      .replace('{pax}', geminiParamsConfig.pax)
      .replace('{budget}', geminiParamsConfig.budget)
      .replace('{currency}', geminiParamsConfig.currency)
      .replace('{days}', geminiParamsConfig.days);

    await chatSession.sendMessage(transformedPrompt).then(({ response }) => {
      try {
        updateStore({
          geminiGenerativeResult: JSON.parse(response.text()),
        });
        showBackDrop(false, true);
      } catch (er) {
        alert('Encountered an error with GeminiAI, Please try again....');
        console.log(er);
        showBackDrop(false, false);
      }
    });
  };
  console.log(geminiGenerativeResult);
  return (
    <>
      <Header />
      <div className="dashboard__wrapper">
        <div className="form__container">
          <div className="form__header">
            <h2 className="form__headline">
              Tell us your travel preferences 🏕️🌴
            </h2>
            <p className="form__description">
              Just provide some basic information, and our trip planner will
              generate a customized itinerary based on your preferences.
            </p>
          </div>
          <div className="form__input-group">
            <h2>What is destination of choice?</h2>
            <GooglePlacesAutocomplete
              apiKey={GooglePlaceAPIKey}
              selectProps={{
                onChange: ({ label }: any) => {
                  updateStore({
                    geminiParamsConfig: {
                      ...geminiParamsConfig,
                      destination: label,
                    },
                  });
                },
              }}
            />
          </div>
          <div className="form__input-group">
            <h2>How many days are you planning your trip?</h2>
            <input
              title="days"
              className="form__input-type-number"
              type="number"
              placeholder="Ex. 5"
              onChange={(element) =>
                updateStore({
                  geminiParamsConfig: {
                    ...geminiParamsConfig,
                    days: Number(element.target.value),
                  },
                })
              }
            />
          </div>
          <div className="form__input-group">
            <h2>What is your currency?</h2>
            <select
              title="currency"
              name="currency"
              className="form__input-type-number"
              onChange={(e) =>
                updateStore({
                  geminiParamsConfig: {
                    ...geminiParamsConfig,
                    currency: e.target.value,
                  },
                })
              }
            >
              <option value="Dollar">$ - Dollar</option>
              <option value="Peso">₱ - Peso</option>
              <option value="Yen">¥ - Yen</option>
              <option value="Won">₩ - Won</option>
              <option value="Baht">฿ - Baht</option>
            </select>
          </div>
          <div className="form__input-group">
            <h2>How much is your budget?</h2>
            <input
              title="budget"
              className="form__input-type-number"
              type="number"
              placeholder="Ex. 50,000"
              onChange={(element) =>
                updateStore({
                  geminiParamsConfig: {
                    ...geminiParamsConfig,
                    budget: Number(element.target.value),
                  },
                })
              }
            />
          </div>
          <div className="form__input-group">
            <h2>Who do you plan on traveling with on your next adventure?</h2>
            <div className="form__input-option-group">
              {travelGroupOptions.map(
                ({ type, icon, title, description, pax }) => (
                  <div
                    key={title}
                    className={`option ${
                      application.selectedTravelGroup === type ? 'active' : ''
                    }`}
                    onClick={() => handleGroupSelection(pax, type)}
                  >
                    <h2 className="option-icon">{icon}</h2>
                    <p className="option-choice">{title}</p>
                    <p className="option-description">{description}</p>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="form__submit">
            <button
              className="btn-submit"
              onClick={handleSubmit}
              disabled={!fieldValidate || application.isFetching}
              aria-hidden
            >
              Create my Itinerary
            </button>
          </div>
        </div>
        {application.isFetching && (
          <Backdrop
            className="backdrop"
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={application.isFetching}
          >
            <img
              title="fetching"
              className="fetching-image"
              src={FetchingImage}
            />
            <h2 className="backdrop-message">
              Prepare your bags; you're about to embark on your next adventure!
            </h2>
          </Backdrop>
        )}

        <Dialog
          fullWidth
          maxWidth="xl"
          open={application.showModal}
          onClose={dismissModal}
        >
          <DialogContent>
            <div className="itinerary__wrapper">
              <img
                title="destination"
                className="itinerary__destination"
                src={SampleImage}
              />
              <h2>{geminiParamsConfig.destination}</h2>
              <div className="itinerary__details">
                <div className="details__container">
                  📅 {geminiParamsConfig.days} day(s)
                </div>
                <div className="details__container">
                  💰 {supportedCurrency[geminiParamsConfig.currency]}
                  {geminiParamsConfig.budget.toLocaleString()} budget
                </div>
                <div className="details__container">
                  🥂 No. Of Traveler: {geminiParamsConfig.pax}
                </div>
              </div>
              <h2>Dress Culture & Potential Scam Schemes</h2>
              <div className="keypoints__wrapper">
                <div className="dress__culture">
                  {geminiGenerativeResult?.dressCulture}
                </div>
                <div className="scam__schemes__wrapper">
                  <h3>Watch out for</h3>
                  {geminiGenerativeResult?.potentialScamSchemes.map(
                    (scam: string) => (
                      <h2 className="scam__schemes">• {scam}</h2>
                    )
                  )}
                </div>
              </div>
              <h2>Hotel Recommendations</h2>
              <div className="hotel__wrapper">
                {geminiGenerativeResult !== null &&
                  geminiGenerativeResult?.hotelOptions?.map(
                    ({ hotelAddress, hotelName, price, rating }: any) => (
                      <div key={hotelName} className="hotel__card">
                        <img
                          title="destination"
                          className="hotel__card-image"
                          src={SampleImage}
                        />
                        <h2 className="hotel__card-name">{hotelName}</h2>
                        <p>📍 {hotelAddress}</p>
                        <div className="hotel__card-details">
                          <div>💰 {price}</div>
                          <div>⭐ {rating}</div>
                        </div>
                      </div>
                    )
                  )}
              </div>
              <h2>Itinerary</h2>
              {geminiGenerativeResult !== null &&
                Object.keys(geminiGenerativeResult.itinerary).map(
                  (key, index) => (
                    <>
                      <h2>Day {index + 1}</h2>
                      <div className="trip__wrapper">
                        <div className="trip__item">
                          <p className="trip__time">
                            {geminiGenerativeResult.itinerary[key].morning.time}{' '}
                            (Morning)
                          </p>
                          <div className="trip__details">
                            <img
                              title="trip"
                              className="trip__image"
                              src={SampleImage}
                            />
                            <div className="trip__information">
                              <h2 className="trip__destination">
                                {
                                  geminiGenerativeResult.itinerary[key].morning
                                    .placeName
                                }{' '}
                              </h2>
                              <p>
                                {
                                  geminiGenerativeResult.itinerary[key].morning
                                    .placeDetails
                                }
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="trip__item">
                          <p className="trip__time">
                            {
                              geminiGenerativeResult.itinerary[key].afternoon
                                .time
                            }{' '}
                            (Afternoon)
                          </p>
                          <div className="trip__details">
                            <img
                              title="trip"
                              className="trip__image"
                              src={SampleImage}
                            />
                            <div className="trip__information">
                              <h2 className="trip__destination">
                                {
                                  geminiGenerativeResult.itinerary[key]
                                    .afternoon.placeName
                                }
                              </h2>
                              <p>
                                {
                                  geminiGenerativeResult.itinerary[key]
                                    .afternoon.placeDetails
                                }
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="trip__item">
                          <p className="trip__time">
                            {geminiGenerativeResult.itinerary[key].evening.time}
                            (Evening)
                          </p>
                          <div className="trip__details">
                            <img
                              title="trip"
                              className="trip__image"
                              src={SampleImage}
                            />
                            <div className="trip__information">
                              <h2 className="trip__destination">
                                {
                                  geminiGenerativeResult.itinerary[key].evening
                                    .placeName
                                }
                              </h2>
                              <p>
                                {
                                  geminiGenerativeResult.itinerary[key].evening
                                    .placeDetails
                                }
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                )}
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={dismissModal}>Close</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}

export default Dashboard;
