import { useContext, Fragment, useEffect } from 'react';

import { Timeline } from 'rsuite';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Calendar from '@rsuite/icons/legacy/Calendar';

import { Store } from '@Utils/Context/Context';
import useItinerary from '@Utils/Hooks/useItinerary';
import {
  IHotel,
  IItinerary,
  ITimelineHeader,
  ITimelinePlaces,
} from '@Utils/Types';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Hotels({ hotelName, hotelAddress, price, rating }: IHotel) {
  const { getPlaces, destinationImage } = useItinerary();

  useEffect(() => {
    getPlaces(hotelName);
  }, []);

  return (
    <div className="itinerary__hotel__container">
      <LazyLoadImage
        className="itinerary__hotel__image"
        src={destinationImage}
        effect="blur"
      />

      <div className="itinerary__hotel__details">
        <p>{hotelName}</p>
        <p className="itinerary__hotel__details--address">
          <i className="fa-solid fa-location-dot" /> {hotelAddress}
        </p>
        <p className="itinerary__hotel__details--price">
          <span>
            <i className="fa-solid fa-tag" /> {price}
          </span>
          <span>
            <i className="fa-solid fa-star" /> {rating}
          </span>
        </p>
      </div>
    </div>
  );
}

function TimelineHeader({ day, title, description }: ITimelineHeader) {
  return (
    <Timeline.Item dot={<Calendar />}>
      <div className="itinerary__timeline__header">
        <h1>Day {day}</h1>
        <p className="title">{title}</p>
        <p>{description}</p>
      </div>
    </Timeline.Item>
  );
}

function TimelinePlaces({
  placeAddress,
  placeDetails,
  placeName,
  time,
  commuteInstruction,
}: ITimelinePlaces) {
  const { getPlaces, destinationImage } = useItinerary();

  useEffect(() => {
    getPlaces(placeName);
  }, []);

  return (
    <Timeline.Item key={`places-${placeName}`}>
      <div className="itinerary__timeline__day__wrapper">
        <LazyLoadImage
          className="itinerary__timeline__day__image"
          src={destinationImage}
          effect="blur"
        />
        <div className="itinerary__timeline__day__details__wrapper">
          <div className="itinerary__timeline__day__details">
            <span className="itinerary__timeline__day__details--time">
              {time}
            </span>
            <span className="itinerary__timeline__day__details--title">
              {placeName} - {placeDetails}
            </span>
            <span>
              <i className="fa-solid fa-location-dot" /> {placeAddress}
            </span>
          </div>
          <div className="itinerary__timeline__day__details__commute">
            <h3>How to get there?</h3>
            <span>
              Take a{' '}
              <i
                className={`fa-solid ${commuteInstruction.fontawesomeIconClass}`}
              />{' '}
              from{' '}
              <span className="itinerary__timeline__day__details__commute--destination">
                {commuteInstruction.from}
              </span>{' '}
              to{' '}
              <span className="itinerary__timeline__day__details__commute--destination">
                {commuteInstruction.to}
              </span>
            </span>
            <p>
              <i className="fa-solid fa-coins" /> {commuteInstruction.cost}
            </p>
          </div>
        </div>
      </div>
    </Timeline.Item>
  );
}

function Itineraries({ itinerary }: IItinerary) {
  return (
    <Timeline className="custom-timeline">
      {itinerary.map(({ day, title, description, places }) => (
        <Fragment key={`timeline-${day}-${title}`}>
          <TimelineHeader day={day} title={title} description={description} />
          {places?.map(
            ({
              placeAddress,
              placeDetails,
              placeName,
              time,
              commuteInstruction,
            }) => (
              <TimelinePlaces
                key={placeName}
                placeAddress={placeAddress}
                placeDetails={placeDetails}
                placeName={placeName}
                time={time}
                commuteInstruction={commuteInstruction}
              />
            )
          )}
        </Fragment>
      ))}
    </Timeline>
  );
}

function Itinerary() {
  const { geminiParamsConfig, geminiGenerativeResult } = useContext(Store);
  const { hotels, itinerary } = geminiGenerativeResult;
  const { getPlaces, destinationImage } = useItinerary();

  useEffect(() => {
    getPlaces(geminiParamsConfig.destination);
  }, []);

  console.log(geminiGenerativeResult, 'a', 'b');

  return (
    <div className="itinerary__wrapper">
      <div className="itinerary__details">
        <LazyLoadImage
          className="itinerary__details--destination"
          src={destinationImage}
          effect="blur"
        />
        <h1>{geminiParamsConfig.destination}</h1>
      </div>
      <h1>Hotels in {geminiParamsConfig.destination}</h1>
      <div className="itinerary__hotel__wrapper">
        {hotels.map(({ hotelName, hotelAddress, price, rating }, index) => (
          <Hotels
            key={`${hotelName} - ${rating} - ${price} - ${index}`}
            hotelName={hotelName}
            hotelAddress={hotelAddress}
            price={price}
            rating={rating}
          />
        ))}
      </div>
      <Itineraries itinerary={itinerary} />
    </div>
  );
}

export default Itinerary;
