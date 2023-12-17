import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import { useState, useEffect } from "react";

export default function TrackingComponent() {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setLocations([
        {
          latitude: 3.0012515499439996,
          longitude: 101.6139173069731,
          location: "Puchong, Selangor, Malaysia",
          weather: {
            temperature: 0, // Celsius
            condition: "sunny", // clear, sunny, raini, cloudy, etc
            windSpeed: 0, // kph
          },
          description:
            "Here we go, all geared up and ready to roll! Today marks the beginning of my journey towards Denmark. Hoping to reach Sungai Besar before the rain pours down. 🙏🏻", // 2000 characters?
          updatedAt: new Date("2023-12-31T07:00:00+08:00"), // iso8601 with timezone
        },
      ]);
      // setLocations([
      //   {
      //     latitude: 3.003664916524096,
      //     longitude: 101.61663645306207,
      //     location: "Milan, Italy",
      //     weather: {
      //       temperature: 0, // Celsius
      //       condition: "sunny", // clear, sunny, raini, cloudy, etc
      //       windSpeed: 0, // kph
      //     },
      //     description:
      //       "Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.", // 2000 characters?
      //     updatedAt: new Date("2023-12-17T08:02:16.935Z"), // iso8601 with timezone
      //   },
      //   {
      //     latitude: 3.0559677940849603,
      //     longitude: 101.49782988750258,
      //     location: "Milan, Italy",
      //     weather: {
      //       temperature: 0, // Celsius
      //       condition: "windy", // clear, sunny, raini, cloudy, etc
      //       windSpeed: 0, // kph
      //     },
      //     description:
      //       "Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.", // 2000 characters?
      //     updatedAt: new Date(), // iso8601 with timezone
      //   },
      //   {
      //     latitude: 3.2558609628641193,
      //     longitude: 101.30816591820917,
      //     location: "Milan, Italy",
      //     weather: {
      //       temperature: 0, // Celsius
      //       condition: "cloudy", // clear, sunny, raini, cloudy, etc
      //       windSpeed: 0, // kph
      //     },
      //     description:
      //       "Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.", // 2000 characters?
      //     updatedAt: new Date(), // iso8601 with timezone
      //   },
      //   {
      //     latitude: 3.3220284585844224,
      //     longitude: 101.26533814132293,
      //     location: "Milan, Italy",
      //     weather: {
      //       temperature: 0, // Celsius
      //       condition: "rain", // clear, sunny, raini, cloudy, etc
      //       windSpeed: 0, // kph
      //     },
      //     description:
      //       "Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.", // 2000 characters?
      //     updatedAt: new Date(), // iso8601 with timezone
      //   },
      //   {
      //     latitude: 3.424245504492505,
      //     longitude: 101.1772101401936,
      //     location: "Milan, Italy",
      //     weather: {
      //       temperature: 0, // Celsius
      //       condition: "thunderstorm", // clear, sunny, raini, cloudy, etc
      //       windSpeed: 0, // kph
      //     },
      //     description:
      //       "Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.", // 2000 characters?
      //     updatedAt: new Date(), // iso8601 with timezone
      //   },
      // ]);
    }, 2000);
  }, []);

  return (
    <div
      id="i-am-here"
      className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                Where I've been?
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Tracking my journey on wheels in real time!
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Cheer for Me as I Roll: Follow my incredible journey as I pedal
                across continents, tracing my adventure from Malaysia to Denmark
                and beyond!
              </p>
              <p className="mt-3 text-sm leading-8 text-gray-500">
                Please note: only the most recent 5 locations will be displayed.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <GoogleMap locations={locations} />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <LocationTimelineComponents locations={locations} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WeatherComponent({ condition }) {
  // https://docs.tomorrow.io/reference/data-layers-weather-codes
  if (condition === "rain")
    return <FontAwesomeIcon icon="fa-solid fa-cloud-showers-heavy" />;
  if (condition === "sunny") return <FontAwesomeIcon icon="fa-solid fa-sun" />;
  if (condition === "cloudy")
    return <FontAwesomeIcon icon="fa-solid fa-cloud" />;
  if (condition === "thunderstorm")
    return <FontAwesomeIcon icon="fa-solid fa-cloud-bolt" />;
  if (condition === "windy") return <FontAwesomeIcon icon="fa-solid fa-wind" />;
  return <FontAwesomeIcon icon="fa-solid fa-question" />;
}

function LocationTimelineSkelatonComponents() {
  return (
    <div
      role="status"
      className="max-w-md p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
    >
      <div className="pt-4">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-600 w-16 mb-2.5"></div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      </div>

      <div className="pt-4">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-600 w-16 mb-2.5"></div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      </div>

      <div className="pt-4">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-600 w-16 mb-2.5"></div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      </div>

      <div className="pt-4">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-600 w-16 mb-2.5"></div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      </div>

      <div className="pt-4">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-600 w-16 mb-2.5"></div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  );
}

function LocationTimelineComponents({ locations }) {
  if (locations.length === 0) return <LocationTimelineSkelatonComponents />;

  return locations.map((item, index) => {
    return (
      <div className="group relative py-6 pl-8" key={index}>
        <div className="mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 after:bg-indigo-600 group-last:before:hidden">
          <time className="left-0 mb-3 inline-flex h-6 px-4 translate-y-0.5 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold uppercase text-emerald-600">
            {format(item.updatedAt, "dd MMM yyyy, p")}
          </time>

          <div className="text-xl font-bold text-slate-900 mb-2">
            {item.location}
          </div>
          <div className="flex flex-col sm:flex-row text-sm text-slate-500">
            <div className="pb-1 sm:pr-4 sm:pb-0">
              <FontAwesomeIcon icon={["fas", "map-location"]} />
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${item.latitude},${item.longitude}`}
                target="_blank"
                className="ml-4"
              >
                {item.latitude.toFixed(4)}, {item.longitude.toFixed(4)}
              </a>
            </div>
            <div className="py-1 sm:px-4 sm:py-0">
              <FontAwesomeIcon icon={["fas", "temperature-low"]} />{" "}
              <span className="ml-4">{item.weather.temperature} °C</span>
            </div>
            <div className="py-1 sm:px-4 sm:py-0">
              <FontAwesomeIcon icon={["fas", "wind"]} />{" "}
              <span className="ml-4">{item.weather.windSpeed} km/h</span>
            </div>
            <div className="pt-1 sm:pl-4 sm:pt-0">
              <WeatherComponent condition={item.weather.condition} />
              <span className="ml-4">{item.weather.condition}</span>
            </div>
          </div>
        </div>

        <div className="text-slate-500">{item.description}</div>
      </div>
    );
  });
}

function GoogleMap({ locations }) {
  const coordinates = locations.map(
    (item) => `${item.latitude},${item.longitude}`
  );

  if (coordinates.length === 0) return <></>;

  if (coordinates.length == 1)
    return (
      <iframe
        className={
          "aspect-video max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 w-full h-96"
        }
        referrerPolicy={"no-referrer-when-downgrade"}
        src={`https://www.google.com/maps/embed/v1/search?key=AIzaSyDw1nB817qQxGFQ4AtovQAQx6y23B-qsoA&q=${coordinates[0]}`}
        allowFullScreen
      ></iframe>
    );

  if (coordinates.length == 2)
    return (
      <iframe
        className={
          "aspect-video max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 w-full h-96"
        }
        referrerPolicy={"no-referrer-when-downgrade"}
        src={`https://www.google.com/maps/embed/v1/directions?key=AIzaSyDw1nB817qQxGFQ4AtovQAQx6y23B-qsoA&origin=${coordinates[0]}&destination=${coordinates[1]}&mode=driving&avoid=tolls|highways|ferries`}
        allowFullScreen
      ></iframe>
    );

  let origin = coordinates[0];
  let destination = coordinates[coordinates.length - 1];
  let waypoints = coordinates.slice(1, coordinates.length - 1);
  waypoints = waypoints.join("|");
  return (
    <iframe
      className={
        "aspect-video max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 w-full h-96"
      }
      referrerPolicy={"no-referrer-when-downgrade"}
      src={`https://www.google.com/maps/embed/v1/directions?key=AIzaSyDw1nB817qQxGFQ4AtovQAQx6y23B-qsoA&origin=${origin}&destination=${destination}&waypoints=${waypoints}&mode=driving&avoid=tolls|highways|ferries`}
      allowFullScreen
    ></iframe>
  );
}
