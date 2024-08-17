import { lazy } from 'react';

const Header = lazy(() => import('../Components/Header/Header'));
const Landing = lazy(() => import('../Components/Landing/Landing'));
const Dashboard = lazy(() => import('../Components/Dashboard/Dashboard'));

import AuthProvider from '../Components/Auth/AuthProvider';
import SignIn from '../Components/Auth/SignIn';
import { ITravelGroupOptions } from './Types';

const GeminiAPIKey: string = import.meta.env.VITE_GOOGLE_GEMINI_API_KEY;
const GooglePlaceAPIKey: string = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;

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

export {
  Header,
  Landing,
  Dashboard,
  AuthProvider,
  SignIn,
  GeminiAPIKey,
  GooglePlaceAPIKey,
  travelGroupOptions,
  GEMINI_PROMPT
};
