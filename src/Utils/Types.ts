export interface ITravelGroupOptions {
  type: string;
  icon: string;
  title: string;
  description: string;
  pax: string;
}

export interface IRadioButtonGroup {
  name: string;
  className: string;
  options: {
    icon: string;
    title: string;
    itemClassName?: string;
    activeClassName?: string;
  }[];
}

export interface IHotel {
  hotelName: string;
  hotelAddress: string;
  price: string;
  hotelImageUrl?: string;
  geoCoordinates?: string;
  rating: number;
  descriptions?: string;
}

export interface IItinerary {
  itinerary: {
    day: number;
    title: string;
    description: string;
    places: {
      placeName: string;
      placeDetails: string;
      placeImageUrl: string;
      time: string;
      placeAddress: string;
      commuteInstruction: {
        from: string;
        to: string;
        mode: string;
        time: string;
        cost: string;
        fontawesomeIconClass: string;
      };
    }[];
  }[];
}

export interface ITimelinePlaces {
  placeName: string;
  placeDetails: string;
  placeImageUrl?: string;
  time: string;
  placeAddress: string;
  commuteInstruction: {
    from: string;
    to: string;
    mode: string;
    time: string;
    cost: string;
    fontawesomeIconClass: string;
  };
}

export interface ITimelineHeader {
  day: number;
  title: string;
  description: string;
}
