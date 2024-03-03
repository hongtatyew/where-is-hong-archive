import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import { useState, useEffect } from "react";

const NUMBER_OF_RECORD = 20;

async function getLocations() {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const response = await fetch(
    `https://fnmpxq6dxh5o3e2yuctzcjbnmu0sxuex.lambda-url.ap-southeast-1.on.aws/journalentries`,
    requestOptions
  );
  let locations = await response.json();

  return locations
    .sort(
      (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime()
    )
    .slice(0, NUMBER_OF_RECORD)
    .filter((location) => location.coordinates != null);
}

export default function TrackingComponent() {
  const [locations, setLocations] = useState(null);
  useEffect(() => {
    getLocations().then((locations) => {
      setLocations(locations);
    });
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
              <p className="mt-6 text-xl leading-8 text-gray-600">
                Cheer for Me as I Roll: Follow my incredible journey as I pedal
                across continents, tracing my adventure from Malaysia to Denmark
                and beyond!
              </p>
              <p className="mt-3 text-sm leading-8 text-gray-500">
                Please note: only the most recent {NUMBER_OF_RECORD} locations
                will be displayed.
              </p>
            </div>
          </div>
        </div>
        <div className="-mt-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
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

function WeatherComponent({ weather }) {
  let conditionImageName = weather.condition.toLowerCase().replace(/ /g, "_");
  return (
    <img
      src={`img/weather-conditions/${conditionImageName}.svg`}
      alt={weather.condition}
      className="w-3.5 h-3.5"
    />
  );
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
  if (locations == null) return <LocationTimelineSkelatonComponents />;
  if (locations.length === 0) return <div>No records</div>;

  return locations.map((item, index) => {
    return (
      <div className="group relative py-6 pl-8" key={index}>
        <div className="mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 after:bg-indigo-600 group-last:before:hidden">
          <time className="left-0 mb-3 inline-flex h-6 px-4 translate-y-0.5 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold uppercase text-emerald-600">
            {format(new Date(item.created), "dd MMM yyyy, p")}
          </time>

          <div className="text-xl font-bold text-slate-900 mb-2">
            {item.location.city}, {item.location.country}
          </div>
          <div className="flex flex-col sm:flex-row md:grid md:grid-cols-2 text-sm text-slate-500 md:mb-2">
            <div className="pb-1 sm:pr-4 sm:pb-0">
              <FontAwesomeIcon icon={["fas", "map-location"]} />
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${item.coordinates.latitude},${item.coordinates.longitude}`}
                target="_blank"
                className="ml-4"
              >
                {item.coordinates.latitude.toFixed(4)},{" "}
                {item.coordinates.longitude.toFixed(4)}
              </a>
            </div>
            <div className="py-1 sm:px-4 sm:py-0">
              <FontAwesomeIcon icon={["fas", "temperature-low"]} />{" "}
              <span className="ml-4">{item.weather.temperature} °C</span>
            </div>
            <div className="py-1 sm:px-4 sm:py-0 md:pl-0">
              <FontAwesomeIcon icon={["fas", "wind"]} />{" "}
              <span className="ml-4">{item.weather.windSpeed} m/s</span>
            </div>
            <div className="pt-1 sm:pl-4 sm:pt-0 flex items-center">
              <WeatherComponent weather={item.weather} />
              <span className="ml-4">{item.weather.condition}</span>
            </div>
          </div>
        </div>

        <div className="text-slate-500">{item.notes}</div>
      </div>
    );
  });
}

function GoogleMap({ locations }) {
  if (locations == null) return <></>;
  const coordinates = locations.map(
    (item) => `${item.coordinates.latitude},${item.coordinates.longitude}`
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
