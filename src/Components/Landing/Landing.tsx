/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from 'react-router-dom';
import { Header } from '@Utils/Constant';

import LandingImage from '../../Assets/Images/branding.png';

import './Landing.scss';

function Landing() {
  return (
    <>
      <Header />
      <section className="landing__wrapper">
        <h1 className="landing__headline">
          <span className="emphasized">
            Discover Your Next Adventure with Trip Buddy:
          </span>{' '}
          Personalized Itineraries at Your Fingertips
        </h1>
        <p className="landing__description">
          Your personal trip planner and travel curator, creating custom
          itineraries tailored to your interests and budget.
        </p>
        <Link to="/trip-planner">
          <button className="get-started" type="button">
            Get Started. It's free.
          </button>
        </Link>
        <img title="Landing" loading="lazy" src={LandingImage} />
      </section>
    </>
  );
}

export default Landing;
