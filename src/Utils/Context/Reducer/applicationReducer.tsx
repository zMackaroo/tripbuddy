/* eslint-disable @typescript-eslint/no-explicit-any */

export const initialStore = {
  application: {
    selectedTravelGroup: '',
    isFetching: false,
    showModal: false,
  },
  geminiParamsConfig: {
    destination: '',
    origin: '',
    days: 0,
    starDate: new Date(),
    endDate: new Date(),
    budget: 0,
    pax: '',
    currency: '',
  },
  geminiGenerativeResult: {
    hotels: [
      {
        hotelName: 'The Samaya Bali',
        hotelAddress:
          'Jl. Raya Seminyak, Seminyak, Kuta, Kabupaten Badung, Bali 80361, Indonesia',
        price: '₱2,500 - ₱5,000',
        hotelImageUrl:
          'https://www.thesamaya.com/seminyak/images/hero/samaya-seminyak.jpg',
        geoCoordinates: '-8.4214, 115.0822',
        rating: 4.5,
        descriptions:
          'A comfortable and stylish resort in Seminyak, offering a pool, restaurant, and spacious rooms at a reasonable price.',
      },
      {
        hotelName: 'The Jayakarta Nusa Dua',
        hotelAddress:
          'Jl. Pratama, Nusa Dua, Kuta Selatan, Kabupaten Badung, Bali 80363, Indonesia',
        price: '₱2,000 - ₱4,000',
        hotelImageUrl:
          'https://www.jayakartahotels.com/nusa-dua/images/gallery/hotel-nusa-dua-jayakarta-gallery-2.jpg',
        geoCoordinates: '-8.7031, 115.0992',
        rating: 4.0,
        descriptions:
          'A family-friendly hotel in Nusa Dua with a beachfront location, offering affordable rooms and amenities.',
      },
      {
        hotelName: 'The Kuta Beach Heritage Hotel',
        hotelAddress:
          'Jl. Pantai Kuta, Kuta, Kabupaten Badung, Bali 80361, Indonesia',
        price: '₱1,500 - ₱3,000',
        hotelImageUrl:
          'https://www.kutabeachheritagehotel.com/images/gallery/kuta-beach-heritage-hotel-bali-gallery-13.jpg',
        geoCoordinates: '-8.6527, 115.0915',
        rating: 3.5,
        descriptions:
          'A budget-friendly hotel in Kuta, offering basic accommodations with easy access to the beach and local attractions.',
      },
      {
        hotelName: 'The Puri Bambu Hotel & Spa',
        hotelAddress:
          'Jl. Raya Ubud, Ubud, Kabupaten Gianyar, Bali 80571, Indonesia',
        price: '₱2,250 - ₱4,500',
        hotelImageUrl:
          'https://www.puribambuhotel.com/images/gallery/puri-bambu-hotel-and-spa-gallery-1.jpg',
        geoCoordinates: '-8.3405, 115.0914',
        rating: 4.2,
        descriptions:
          'A charming hotel in Ubud, offering a tranquil setting, a spa, and comfortable rooms at a reasonable price.',
      },
      {
        hotelName: 'The Sun Island Hotel & Spa',
        hotelAddress:
          'Jl. Raya Uluwatu, Pecatu, Kuta Selatan, Kabupaten Badung, Bali 80361, Indonesia',
        price: '₱3,000 - ₱6,000',
        hotelImageUrl:
          'https://www.sunislandbali.com/images/gallery/sun-island-hotel-and-spa-gallery-1.jpg',
        geoCoordinates: '-8.6905, 115.1502',
        rating: 4.0,
        descriptions:
          'A modern hotel in Uluwatu with ocean views, offering a spa, pool, and comfortable rooms at a reasonable price.',
      },
      {
        hotelName: 'The Taman Sari Resort & Spa',
        hotelAddress:
          'Jl. Raya Uluwatu, Pecatu, Kuta Selatan, Kabupaten Badung, Bali 80361, Indonesia',
        price: '₱3,500 - ₱7,000',
        hotelImageUrl:
          'https://www.tamansariresort.com/images/gallery/taman-sari-resort-and-spa-gallery-1.jpg',
        geoCoordinates: '-8.6894, 115.1477',
        rating: 4.3,
        descriptions:
          'A beachfront resort in Uluwatu with stunning ocean views, offering a spa, swimming pools, and comfortable rooms.',
      },
      {
        hotelName: 'The  Kubu Hotel',
        hotelAddress:
          'Jl. Raya Seminyak, Seminyak, Kuta, Kabupaten Badung, Bali 80361, Indonesia',
        price: '₱1,750 - ₱3,500',
        hotelImageUrl:
          'https://www.thekubuhotel.com/images/gallery/the-kubu-hotel-gallery-1.jpg',
        geoCoordinates: '-8.4208, 115.0819',
        rating: 3.8,
        descriptions:
          'A budget-friendly hotel in Seminyak with a laid-back vibe, offering comfortable rooms, a pool, and a restaurant.',
      },
      {
        hotelName: 'The  Pondok Pitaya',
        hotelAddress:
          'Jl. Raya Canggu, Canggu, Kuta Utara, Kabupaten Badung, Bali 80351, Indonesia',
        price: '₱1,250 - ₱2,500',
        hotelImageUrl:
          'https://www.pondokpitaya.com/images/gallery/pondok-pitaya-gallery-1.jpg',
        geoCoordinates: '-8.4394, 115.0872',
        rating: 3.6,
        descriptions:
          'A simple and affordable guesthouse in Canggu, offering basic accommodations and a friendly atmosphere.',
      },
    ],
    itinerary: [
      {
        day: 1,
        title: 'Exploring the Cultural Heart of Ubud',
        description:
          'Start your day by getting ready for your flight to Bali from Manila. Enjoy a leisurely breakfast at home before heading to the airport. Once you arrive at your hotel in Ubud, settle in and unpack. Spend the afternoon exploring the Ubud Monkey Forest, a sanctuary for playful monkeys. Afterwards, enjoy a traditional Balinese lunch at a local restaurant with stunning views of the rice paddies. In the evening, visit the Ubud Palace, a beautiful palace showcasing the rich artistic heritage of Bali, and witness a captivating performance of traditional Balinese dance.',
        places: [
          {
            placeName: 'Ninoy Aquino International Airport (NAIA)',
            placeDetails: 'Departure airport for your flight to Bali.',
            placeImageUrl:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Ninoy_Aquino_International_Airport_%28NAIA%29.jpg/1280px-Ninoy_Aquino_International_Airport_%28NAIA%29.jpg',
            time: '07:00 AM',
            placeAddress: 'NAIA Rd, Pasay, 1300 Metro Manila, Philippines',
            commuteInstruction: {
              from: 'Marey Engineering, Vergano street, Taguig Metro Manila, Philippines',
              to: 'Ninoy Aquino International Airport (NAIA)',
              mode: 'Taxi',
              time: '1 hour',
              cost: '₱600 - ₱800',
              fontawesomeIconClass: 'fas fa-taxi',
            },
          },
          {
            placeName: 'Ngurah Rai International Airport (DPS)',
            placeDetails: 'Arrival airport in Bali.',
            placeImageUrl:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Ngurah_Rai_International_Airport_%28DPS%29.jpg/1280px-Ngurah_Rai_International_Airport_%28DPS%29.jpg',
            time: '12:00 PM',
            placeAddress:
              'Jl. Bypass Ngurah Rai, Tuban, Kuta, Kabupaten Badung, Bali 80361, Indonesia',
            commuteInstruction: {
              from: 'Ninoy Aquino International Airport (NAIA)',
              to: 'Ngurah Rai International Airport (DPS)',
              mode: 'Flight',
              time: '3 hours',
              cost: '₱5,000 - ₱7,500',
              fontawesomeIconClass: 'fas fa-plane',
            },
          },
          {
            placeName: 'Your Hotel in Ubud',
            placeDetails: 'Check-in to your hotel and settle in.',
            placeImageUrl:
              'https://www.puribambuhotel.com/images/gallery/puri-bambu-hotel-and-spa-gallery-1.jpg',
            time: '02:00 PM',
            placeAddress:
              'Your hotel address in Ubud (e.g., Jl. Raya Ubud, Ubud, Kabupaten Gianyar, Bali 80571, Indonesia)',
            commuteInstruction: {
              from: 'Ngurah Rai International Airport (DPS)',
              to: 'Your Hotel in Ubud',
              mode: 'Taxi',
              time: '1 hour 30 minutes - 2 hours',
              cost: '₱1,500 - ₱2,000',
              fontawesomeIconClass: 'fas fa-taxi',
            },
          },
          {
            placeName: 'Ubud Monkey Forest',
            placeDetails:
              'A sanctuary for playful monkeys where you can interact with them (with caution).',
            placeImageUrl:
              'https://www.ubudmonkeyforest.com/images/gallery/ubud-monkey-forest-gallery-1.jpg',
            time: '03:00 PM - 04:00 PM',
            placeAddress:
              'Jl. Monkey Forest, Ubud, Kabupaten Gianyar, Bali 80571, Indonesia',
            commuteInstruction: {
              from: 'Your Hotel in Ubud',
              to: 'Ubud Monkey Forest',
              mode: 'Walk',
              time: '15 minutes',
              cost: 'Free',
              fontawesomeIconClass: 'fas fa-walking',
            },
          },
          {
            placeName: 'Warung Sopa',
            placeDetails:
              'A local restaurant near the Ubud Monkey Forest offering delicious Balinese food with stunning rice paddy views.',
            placeImageUrl:
              'https://www.warungsopa.com/images/gallery/warung-sopa-gallery-1.jpg',
            time: '04:30 PM - 06:00 PM',
            placeAddress:
              'Jl. Raya Tegalalang, Tegalalang, Kintamani, Kabupaten Bangli, Bali 80571, Indonesia',
            commuteInstruction: {
              from: 'Ubud Monkey Forest',
              to: 'Warung Sopa',
              mode: 'Car',
              time: '30 minutes',
              cost: '₱400 - ₱600',
              fontawesomeIconClass: 'fas fa-car',
            },
          },
          {
            placeName: 'Ubud Palace',
            placeDetails:
              'A beautiful palace showcasing the rich artistic heritage of Bali, where you can witness a captivating performance of traditional Balinese dance.',
            placeImageUrl:
              'https://www.ubudpalace.com/images/gallery/ubud-palace-gallery-1.jpg',
            time: '07:00 PM - 08:30 PM',
            placeAddress:
              'Jl. Raya Ubud, Ubud, Kabupaten Gianyar, Bali 80571, Indonesia',
            commuteInstruction: {
              from: 'Warung Sopa',
              to: 'Ubud Palace',
              mode: 'Car',
              time: '45 minutes - 1 hour',
              cost: '₱600 - ₱800',
              fontawesomeIconClass: 'fas fa-car',
            },
          },
          {
            placeName: 'Warung Ibu Oka',
            placeDetails:
              'A popular restaurant in Ubud serving traditional Balinese cuisine, especially their famous Babi Guling (roast suckling pig).',
            placeImageUrl:
              'https://www.warungibuoka.com/images/gallery/warung-ibu-oka-gallery-1.jpg',
            time: '09:00 PM - 10:00 PM',
            placeAddress:
              'Jl. Raya Ubud, Ubud, Kabupaten Gianyar, Bali 80571, Indonesia',
            commuteInstruction: {
              from: 'Ubud Palace',
              to: 'Warung Ibu Oka',
              mode: 'Walk',
              time: '5 minutes',
              cost: 'Free',
              fontawesomeIconClass: 'fas fa-walking',
            },
          },
        ],
      },
      {
        day: 2,
        title: 'Beach Relaxation and Water Activities in Nusa Dua',
        description:
          'After breakfast at your hotel in Ubud, head to Nusa Dua for a day of beach relaxation and water activities. Enjoy swimming, sunbathing, and building sandcastles with your family on Nusa Dua Beach.  For lunch, savor delicious seafood at a beachfront restaurant. In the afternoon, head to Tanjung Benoa, a popular water sports destination, and try activities like jet skiing, parasailing, or banana boat rides. End the day with a delicious dinner at a restaurant with stunning ocean views.',
        places: [
          {
            placeName: 'Nusa Dua Beach',
            placeDetails:
              'A beautiful stretch of white sand with calm, clear waters, perfect for swimming, sunbathing, and playing beach games.',
            placeImageUrl:
              'https://www.nusa-dua.com/images/gallery/nusa-dua-beach-gallery-1.jpg',
            time: '10:00 AM - 01:00 PM',
            placeAddress:
              'Nusa Dua, Kuta Selatan, Kabupaten Badung, Bali 80363, Indonesia',
            commuteInstruction: {
              from: 'Your Hotel in Ubud',
              to: 'Nusa Dua Beach',
              mode: 'Car',
              time: '1 hour 30 minutes - 2 hours',
              cost: '₱1,500 - ₱2,000',
              fontawesomeIconClass: 'fas fa-car',
            },
          },
          {
            placeName: 'The Ritz-Carlton, Bali',
            placeDetails:
              'A beachfront restaurant at The Ritz-Carlton, Bali offering delicious international cuisine.',
            placeImageUrl:
              'https://www.ritzcarlton.com/en/hotels/indonesia/bali/images/default-hero-bali-beach.jpg',
            time: '01:30 PM - 03:00 PM',
            placeAddress:
              'Jl. Raya Nusa Dua Selatan, Nusa Dua, Kuta Selatan, Kabupaten Badung, Bali 80363, Indonesia',
            commuteInstruction: {
              from: 'Nusa Dua Beach',
              to: 'The Ritz-Carlton, Bali',
              mode: 'Walk',
              time: '10 minutes',
              cost: 'Free',
              fontawesomeIconClass: 'fas fa-walking',
            },
          },
          {
            placeName: 'Tanjung Benoa',
            placeDetails:
              'A popular water sports destination offering jet skiing, parasailing, banana boat rides, and more.',
            placeImageUrl:
              'https://www.tanjungbenoa.com/images/gallery/tanjung-benoa-gallery-1.jpg',
            time: '03:30 PM - 06:00 PM',
            placeAddress:
              'Tanjung Benoa, Nusa Dua, Kuta Selatan, Kabupaten Badung, Bali 80363, Indonesia',
            commuteInstruction: {
              from: 'The Ritz-Carlton, Bali',
              to: 'Tanjung Benoa',
              mode: 'Car',
              time: '15 minutes',
              cost: '₱400 - ₱600',
              fontawesomeIconClass: 'fas fa-car',
            },
          },
          {
            placeName: 'Nusa Dua Beach Walk',
            placeDetails:
              'An outdoor shopping mall with a variety of shops, restaurants, and entertainment options.',
            placeImageUrl:
              'https://www.nusaduabeachwalk.com/images/gallery/nusa-dua-beach-walk-gallery-1.jpg',
            time: '06:30 PM - 08:00 PM',
            placeAddress:
              'Jl. Nusa Dua Selatan, Nusa Dua, Kuta Selatan, Kabupaten Badung, Bali 80363, Indonesia',
            commuteInstruction: {
              from: 'Tanjung Benoa',
              to: 'Nusa Dua Beach Walk',
              mode: 'Car',
              time: '10 minutes',
              cost: '₱400 - ₱600',
              fontawesomeIconClass: 'fas fa-car',
            },
          },
          {
            placeName: 'Mulia Resort & Villas Nusa Dua',
            placeDetails:
              'A beachfront restaurant at the Mulia Resort & Villas Nusa Dua offering stunning ocean views and delicious cuisine.',
            placeImageUrl:
              'https://www.mulia.com/en/media/image/gallery/mulia-resort-nusa-dua-main-pool.jpg',
            time: '08:30 PM - 10:00 PM',
            placeAddress:
              'Jl. Nusa Dua Selatan, Nusa Dua, Kuta Selatan, Kabupaten Badung, Bali 80363, Indonesia',
            commuteInstruction: {
              from: 'Nusa Dua Beach Walk',
              to: 'Mulia Resort & Villas Nusa Dua',
              mode: 'Walk',
              time: '10 minutes',
              cost: 'Free',
              fontawesomeIconClass: 'fas fa-walking',
            },
          },
        ],
      },
    ],
    dressCulture: {
      proper: [
        'Clothing that covers shoulders and knees, especially when visiting temples.',
        'Modest swimwear for beaches and public pools.',
        'Light and comfortable clothing suitable for the tropical climate.',
        'Respectful attire when visiting religious sites (temples, shrines, etc.).',
      ],
      improper: [
        'Revealing clothing, such as tank tops, short shorts, and mini-skirts, especially in religious places.',
        'Wearing shoes inside temples (remove shoes before entering).',
      ],
    },
    potentialScamScheme: [
      'Taxi scams: Overcharging tourists, taking longer routes, or refusing to use the meter.',
      'Fake tour guides: Offering tours at a low price but then leading tourists to overpriced shops or attractions.',
      'Street vendors: Selling counterfeit goods, especially souvenirs and jewelry.',
      'Fake money scams: Trying to exchange fake money for real currency.',
      'Fake spiritual healers: Offering to cure ailments for a fee, but actually performing a scam.',
      'Begging scams: Children or adults pretending to be disabled to elicit pity and donations.',
      'Fake temple ceremonies: Offering to perform religious ceremonies for a fee, but actually performing a scam.',
    ],
  },
  auth: {},
};

export const applicationReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'UPDATE_STORE':
      return { ...state, ...action.payload };
  }

  return state;
};
