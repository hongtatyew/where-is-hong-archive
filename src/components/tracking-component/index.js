import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import { useState, useEffect } from "react";

export default function TrackingComponent() {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setLocations([
        {
          latitude: 3.003664916524096,
          longitude: 101.61663645306207,
          location: "Milan, Italy",
          weather: {
            temperature: 0, // Celsius
            condition: "sunny", // clear, sunny, raini, cloudy, etc
            windSpeed: 0, // kph
          },
          description:
            "Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.", // 2000 characters?
          updatedAt: new Date("2023-12-17T08:02:16.935Z"), // iso8601 with timezone
        },
        {
          latitude: 3.0559677940849603,
          longitude: 101.49782988750258,
          location: "Milan, Italy",
          weather: {
            temperature: 0, // Celsius
            condition: "windy", // clear, sunny, raini, cloudy, etc
            windSpeed: 0, // kph
          },
          description:
            "Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.", // 2000 characters?
          updatedAt: new Date(), // iso8601 with timezone
        },
        {
          latitude: 3.2558609628641193,
          longitude: 101.30816591820917,
          location: "Milan, Italy",
          weather: {
            temperature: 0, // Celsius
            condition: "cloudy", // clear, sunny, raini, cloudy, etc
            windSpeed: 0, // kph
          },
          description:
            "Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.", // 2000 characters?
          updatedAt: new Date(), // iso8601 with timezone
        },
        {
          latitude: 3.3220284585844224,
          longitude: 101.26533814132293,
          location: "Milan, Italy",
          weather: {
            temperature: 0, // Celsius
            condition: "rain", // clear, sunny, raini, cloudy, etc
            windSpeed: 0, // kph
          },
          description:
            "Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.", // 2000 characters?
          updatedAt: new Date(), // iso8601 with timezone
        },
        {
          latitude: 3.424245504492505,
          longitude: 101.1772101401936,
          location: "Milan, Italy",
          weather: {
            temperature: 0, // Celsius
            condition: "thunderstorm", // clear, sunny, raini, cloudy, etc
            windSpeed: 0, // kph
          },
          description:
            "Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.", // 2000 characters?
          updatedAt: new Date(), // iso8601 with timezone
        },
      ]);
    }, 2000);
  }, []);

  return (
    <>
      <div className="bg-white py-24 sm:py-32" id="i-am-here">
        <div className="mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Where am I now?
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to deploy your app
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit
              at. In mi viverra elit nunc.
            </p>
          </div>
          <div className="mx-0 mt-16 sm:mt-20 lg:mt-24">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <LocationTimelineComponents locations={locations} />
              </div>
              <div className="relative pl-16">
                <GoogleMap locations={locations} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
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

function LocationTimelineComponents({ locations }) {
  if (locations.length === 0) return <>Loading...</>;
  return locations.map((item, index) => {
    return (
      <div className="group relative py-6 pl-8" key={index}>
        <div className="mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-slate-300 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 after:bg-indigo-600 group-last:before:hidden">
          <time className="left-0 mb-3 inline-flex h-6 px-4 translate-y-0.5 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold uppercase text-emerald-600">
            {format(item.updatedAt, "Pp")}
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

function HeaderComponent() {
  return (
    <div className="max-w-2xl mb-10 sm:mb-6">
      <h2 className="leading-snug text-3xl font-bold tracking-tight mb-3 uppercase sm:text-4xl">
        Where am i?
      </h2>
      <p className="text-lg leading-8 text-zinc-600">
        Stay in the loop on my whereabouts. Follow my journey in real time.
      </p>
    </div>
  );
}

function GoogleMap({ locations }) {
  const coordinates = locations.map(
    (item) => `${item.latitude},${item.longitude}`
  );

  if (coordinates.length === 0) return <></>;

  if (coordinates.length == 1)
    return (
      <iframe
        className={"w-full h-full aspect-video"}
        referrerPolicy={"no-referrer-when-downgrade"}
        src={`https://www.google.com/maps/embed/v1/places?key=AIzaSyDw1nB817qQxGFQ4AtovQAQx6y23B-qsoA&q=${coordinates[0]}`}
        allowFullScreen
      ></iframe>
    );

  if (coordinates.length == 2)
    return (
      <iframe
        className={"w-full h-full aspect-video"}
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
      className={"w-full h-full aspect-video"}
      referrerPolicy={"no-referrer-when-downgrade"}
      src={`https://www.google.com/maps/embed/v1/directions?key=AIzaSyDw1nB817qQxGFQ4AtovQAQx6y23B-qsoA&origin=${origin}&destination=${destination}&waypoints=${waypoints}&mode=driving&avoid=tolls|highways|ferries`}
      allowFullScreen
    ></iframe>
  );
}
