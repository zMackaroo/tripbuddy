/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import { IconButton, Backdrop, LinearProgress } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import Logo from '@Images/Logo2.svg';
import AirplaneFetching from '@Assets/Lottie/AirplaneFetching.json';

import {
  SelectDestination,
  SelectDates,
  DestinationOrigin,
  CurrencyAndBudget,
  NumberOfTravellers,
  Itinerary,
  GEMINI_PROMPT,
} from '@Utils/Constant';

import { chatSession } from '@Utils/Services/Gemini';

import './TripPlannerWrapper.scss';
import { Store } from '@Utils/Context/Context';

const StepsElement = {
  0: <SelectDestination />,
  1: <DestinationOrigin />,
  2: <SelectDates />,
  3: <CurrencyAndBudget />,
  4: <NumberOfTravellers />,
  5: <Itinerary />,
};

function TripPlannerWrapper() {
  const { geminiParamsConfig, updateStore }: any = useContext(Store);
  const [step, setStep] = useState(0);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);
  const [showFetchingLottie, setShowFetchingLottie] = useState(false);
  const StepsLength = Object.keys(StepsElement).length - 1;

  const RenderStepElement = StepsElement[step as keyof typeof StepsElement];

  const handleSubmit = async () => {
    setShowFetchingLottie(true);

    const { destination, days, pax, budget, currency, origin } =
      geminiParamsConfig;
    const data = GEMINI_PROMPT.replace('{destination}', destination)
      .replace('{days}', days)
      .replace('{pax}', pax)
      .replace('{origin}', origin)
      .replace('{destination}', destination)
      .replace('{destination}', destination)
      .replace('{budget}', budget)
      .replace('{currency}', currency);

    await chatSession.sendMessage(data).then(({ response }) => {
      updateStore({
        geminiGenerativeResult: JSON.parse(response.text()),
      });
      setShowFetchingLottie(false);
      setStep((prev) => (prev < StepsLength ? prev + 1 : prev));
    });
  };

  const handleAction = (direction: string) => {
    if (direction === 'next') {
      if (step === 4) {
        handleSubmit();
      } else {
        setStep((prev) => (prev < StepsLength ? prev + 1 : prev));
      }
    } else {
      if (step > 0) {
        setStep((prev) => (prev !== 0 ? prev - 1 : prev));
      }
    }
  };

  useEffect(() => {
    switch (step) {
      case 0:
        if (geminiParamsConfig.destination !== '')
          setIsNextButtonDisabled(false);
        else setIsNextButtonDisabled(true);
        break;
      case 1:
        if (geminiParamsConfig.origin !== '') setIsNextButtonDisabled(false);
        else setIsNextButtonDisabled(true);
        break;
      case 2:
        if (geminiParamsConfig.days > 0) setIsNextButtonDisabled(false);
        else setIsNextButtonDisabled(true);
        break;
      case 3:
        if (geminiParamsConfig.currency !== '' && geminiParamsConfig.budget > 0)
          setIsNextButtonDisabled(false);
        else setIsNextButtonDisabled(true);
        break;
      case 4:
        if (geminiParamsConfig.pax !== '') setIsNextButtonDisabled(false);
        else setIsNextButtonDisabled(true);
        break;
      default:
        setIsNextButtonDisabled(false);
    }
  }, [step, geminiParamsConfig]);

  return (
    <main className="TripPlannerWrapper">
      <div className="trip__planner__header">
        <Link to="/">
          <img className="logo" title="logo" src={Logo} />
        </Link>
        <Link to="/">
          <IconButton aria-label="delete">
            <CloseIcon />
          </IconButton>
        </Link>
      </div>

      <div
        className={`trip__planner__content ${
          step === 5 ? 'is__itinerary' : ''
        }`}
      >
        {step !== 5 && (
          <LinearProgress
            className="linear-progress"
            variant="determinate"
            value={step * 20}
            color="warning"
            sx={{ width: '50%', backgroundColor: 'rgb(245 101 81 / 0.5)' }}
          />
        )}

        {RenderStepElement}
      </div>
      <div className="trip__planner__footer">
        <div>
          {step > 0 && (
            <button
              className="btn btn-back"
              onClick={() => handleAction('back')}
            >
              Back
            </button>
          )}
        </div>
        <div>
          {step < 5 && (
            <button
              className="btn btn-next"
              onClick={() => handleAction('next')}
              disabled={isNextButtonDisabled}
            >
              Next
            </button>
          )}
        </div>
      </div>
      {showFetchingLottie && (
        <Backdrop
          sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
          open={showFetchingLottie}
        >
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: AirplaneFetching,
            }}
            width={500}
            height={500}
          />
        </Backdrop>
      )}
    </main>
  );
}

export default TripPlannerWrapper;
