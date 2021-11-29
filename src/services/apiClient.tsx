const BASE_URL = "http://localhost:3001";

const MOCK_CASTLES = [
  {
    name: "Patrulla Canina",
    description: "Precioso Castillo con tobogán y muñecos",
    dimensions_width: 4,
    dimensions_length: 5,
    dimensions_height: 7,
    persons_capacity: 4,
    minimum_age: 8,
    latitude: 41.38998,
    longitude: 2.16149,
    fixed_price: 100,
    distance_unitary_price: 10,
    distance_price_km_step: 1,
    instructor_available: true,
    instructor_hourly_price: 20,
    light_source_available: true,
    light_source_hourly_price: 4,
    keywords: "tobogán patrulla canina verde rojo muñecos",
    booked_dates: [
      "2021-12-27T21:17:58.092Z",
      "2021-12-29T21:17:58.092Z",
      "2021-12-01T21:17:58.092Z",
    ],
  },
  {
    name: "Frozen",
    description: "La película más exitosa de Disney",
    dimensions_width: 3,
    dimensions_length: 3,
    dimensions_height: 4,
    persons_capacity: 6,
    minimum_age: 6,
    latitude: 41.98316060715271,
    longitude: 2.817173638088591,
    fixed_price: 75,
    distance_unitary_price: 15,
    distance_price_km_step: 5,
    instructor_available: true,
    instructor_hourly_price: 20,
    light_source_available: true,
    light_source_hourly_price: 4,
    keywords: "frozen disney pixar niños",
    booked_dates: [
      "2021-12-20T21:17:58.092Z",
      "2021-12-13T21:17:58.092Z",
      "2021-12-04T21:17:58.092Z",
    ],
  },
];

function parseCastlesFromHttp(castles) {
  return castles.map((castle) => ({
    name: castle.name,
    description: castle.description,
    keywords: castle.keywords,
    dimensions: {
      width: castle.dimensions_width,
      length: castle.dimensions_length,
      height: castle.dimensions_height,
    },
    personsCapacity: castle.persons_capacity,
    minimumAge: castle.minimum_age,
    location: {
      latitude: castle.latitude,
      longitude: castle.longitude,
    },
    price: {
      fixed: castle.fixed_price,
      distanceUnitary: castle.distance_unitary_price,
      distanceKmStep: castle.distance_price_km_step,
    },
    services: {
      instructor: {
        available: castle.instructor_available,
        hourlyPrice: castle.instructor_hourly_price,
      },
      lightSource: {
        available: castle.light_source_available,
        hourlyPrice: castle.light_source_hourly_price,
      },
    },
    bookedDates: castle.booked_dates,
  }));
}

function getCastles(latitude, longitude) {
  // return fetch(`${BASE_URL}/bouncy-castles`, {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // })
  //   .then(sleeper(1000)) // to test loading icon
  //   .then((res) => res.json())
  //   .catch((err) => {
  //     console.error(err);
  //     throw new Error("apiClient error when fetching bouncy castles data");
  //   });
  return parseCastlesFromHttp(MOCK_CASTLES);
}

// // Helper function for testing (loading icons, etc)
// function sleeper(ms) {
//   return function (x) {
//     return new Promise((resolve) => setTimeout(() => resolve(x), ms));
//   };
// }

const api = {
  getCastles,
};

export default api;
