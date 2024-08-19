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
  Rating,
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
    const { destination, days, pax, budget, currency } = geminiParamsConfig;
    const transformedPrompt = GEMINI_PROMPT.replace(
      '{destination}',
      destination
    )
      .replace('{days}', days)
      .replace('{pax}', pax)
      .replace('{budget}', budget)
      .replace('{currency}', currency)
      .replace('{destination}', destination)
      .replace('{destination}', destination)
      .replace('{currency}', currency);

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
          maxWidth="lg"
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
                  <i className="fa-regular fa-calendar" />{' '}
                  {geminiParamsConfig.days} day(s)
                </div>
                <div className="details__container">
                  <i className="fa-solid fa-money-bill-1" />{' '}
                  {supportedCurrency[geminiParamsConfig.currency]}
                  {geminiParamsConfig.budget.toLocaleString()} budget
                </div>
                <div className="details__container">
                  <i className="fa-solid fa-people-group" /> No. Of Traveler:{' '}
                  {geminiParamsConfig.pax}
                </div>
              </div>
              <h2>
                <i className="fa-solid fa-shirt" /> Dress Culture & Scam Schemes
              </h2>
              <div className="dress__culture__wrapper">
                <div className="dress__culture__improper__wrapper">
                  <h2 className="dress__culture__title">
                    <i className="fa-solid fa-check" /> Proper
                  </h2>
                  {geminiGenerativeResult?.dressCulture?.proper?.map(
                    (key: string) => (
                      <p>- {key}</p>
                    )
                  )}
                </div>
                <div className="dress__culture__improper__wrapper">
                  <h2 className="dress__culture__title">
                    <i className="fa-solid fa-xmark" /> Improper
                  </h2>
                  {geminiGenerativeResult?.dressCulture?.improper?.map(
                    (key: string) => (
                      <p>- {key}</p>
                    )
                  )}
                </div>
                <div className="dress__culture__improper__wrapper">
                  <h2 className="dress__culture__title">
                    <i className="fa-solid fa-bullseye" /> Watch out for
                  </h2>
                  {geminiGenerativeResult?.potentialScamScheme?.map(
                    (key: string) => (
                      <p>- {key}</p>
                    )
                  )}
                </div>
              </div>
              <h2>
                <i className="fa-solid fa-bed" /> Hotel Recommendations
              </h2>
              <div className="hotel__wrapper">
                {geminiGenerativeResult !== null &&
                  geminiGenerativeResult?.hotels?.map(
                    ({
                      hotelAddress,
                      hotelName,
                      description,
                      price,
                      rating,
                    }: any) => (
                      <div key={hotelName} className="hotel__card">
                        <img
                          title="destination"
                          className="image"
                          src={SampleImage}
                        />

                        <div className="name-address">
                          <h2 className="name">
                            {hotelName}
                            <span className="rating">
                              <Rating value={rating} precision={0.1} readOnly />
                              {rating}
                            </span>
                          </h2>
                          <p className="price">
                            <i className="fa-solid fa-tag" /> {price}
                          </p>
                          <p className="address">
                            <i className="fa-solid fa-location-dot" />{' '}
                            {hotelAddress}
                          </p>
                          <p className="description">{description}</p>
                        </div>
                      </div>
                    )
                  )}
              </div>
              <h2>
                <i className="fa-solid fa-table-list" /> Itinerary
              </h2>
              {geminiGenerativeResult?.itinerary?.map(
                (key: any, index: any) => (
                  <div key={key + index} className="trip__container">
                    <h2>Day {index + 1}</h2>
                    <div className="trip__wrapper">
                      {geminiGenerativeResult?.itinerary[
                        index
                      ]?.destinations?.map((key: any) => (
                        <div className="trip__card">
                          <img
                            title="destination"
                            className="image"
                            src={SampleImage}
                          />
                          <div className="details">
                            <h2 className="name">
                              <span className="time">
                                <i className="fa-solid fa-clock" /> {key.time}
                              </span>
                              <span>{key.placeName}</span>
                            </h2>
                            <p>
                              <i className="fa-solid fa-location-dot" />{' '}
                              {key.placeAddress}
                            </p>
                            <p>{key.placeDetails}</p>
                            <h2>How to get there?</h2>
                            <div className="commute">
                              <div className="instruction">
                                <i
                                  className={`${key.commuteInstruction?.iconClass}`}
                                />{' '}
                                {key.commuteInstruction?.mode} from{' '}
                                {key.commuteInstruction?.from}{' '}
                                <i className="fa-solid fa-arrow-right" />{' '}
                                {key.commuteInstruction?.to}
                              </div>
                              <div className="cost-time">
                                <div className="time">
                                  <i className="fa-solid fa-clock" />{' '}
                                  <span>{key.commuteInstruction?.time}</span>
                                </div>
                                <div className="cost">
                                  <i className="fa-solid fa-coins" />{' '}
                                  <span>{key.commuteInstruction?.cost}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
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
