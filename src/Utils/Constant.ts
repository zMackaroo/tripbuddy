/* eslint-disable @typescript-eslint/no-explicit-any */
import { lazy } from 'react';

const Header = lazy(() => import('@Components/Header/Header'));
const Landing = lazy(() => import('@Components/Landing/Landing'));
const Maintenance = lazy(() => import('@Components/Maintenance/Maintenance'));
const TripPlanner = lazy(
  () => import('@Components/TripPlanner/TripPlannerWrapper')
);
import SelectDestination from '@Components/TripPlanner/Steps/SelectDestination';
import SelectDates from '@Components/TripPlanner/Steps/SelectDates';
import CurrencyAndBudget from '@Components/TripPlanner/Steps/CurrencyAndBudget';
import DestinationOrigin from '@Components/TripPlanner/Steps/DestinationOrigin';
import NumberOfTravellers from '@Components/TripPlanner/Steps/NumberOfTravellers';
import Itinerary from '@Components/TripPlanner/Steps/Itinerary';

import RadioButtonGroup from '@Components/Radio/RadioButtonGroup';


import AuthProvider from '@Components/Auth/AuthProvider';
import SignIn from '@Components/Auth/SignIn';
import { ITravelGroupOptions } from './Types';

const GeminiAPIKey: string = import.meta.env.VITE_GOOGLE_GEMINI_API_KEY;
const GooglePlaceAPIKey: string = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;

const ApplicationMaintenanceMode: string = import.meta.env
  .VITE_APPLICATION_MAINTENANCE_MODE;

const travelGroupOptions: Array<ITravelGroupOptions> = [
  {
    type: 'just_me',
    icon: '✈️',
    title: 'Just Me',
    description: 'A sole traveles in exploration',
    pax: '1 people',
  },
  {
    type: 'couple',
    icon: '🥂',
    title: 'A Couple',
    description: 'Two traveles in tandem',
    pax: '2 people',
  },
  {
    type: 'family',
    icon: '🏡',
    title: 'Family',
    description: 'A group of fun loving adv',
    pax: 'family',
  },
  {
    type: 'friends',
    icon: '⛵',
    title: 'friends',
    description: 'A bunch of thrill-seekes',
    pax: '5 to 9 people',
  },
];

const GEMINI_PROMPT = import.meta.env.VITE_GOOGLE_GEMINI_PROMPT;

const supportedCurrency: any = {
  Dollar: '$',
  Peso: '₱',
  Won: '₩',
  Yen: '¥',
  Baht: '฿',
};

export {
  Header,
  Landing,
  Maintenance,
  TripPlanner,
  SelectDestination,
  SelectDates,
  CurrencyAndBudget,
  DestinationOrigin,
  NumberOfTravellers,
  Itinerary,
  RadioButtonGroup,
  AuthProvider,
  SignIn,
  GeminiAPIKey,
  GooglePlaceAPIKey,
  ApplicationMaintenanceMode,
  travelGroupOptions,
  GEMINI_PROMPT,
  supportedCurrency,
};
