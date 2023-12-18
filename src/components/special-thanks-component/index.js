const data = [
  {
    name: "Malcalm Chew",
    avatar: "img/thanks/malcalm.jpg",
    message:
      "Malcalm has been amazing in preparing me for this journey. He's trained me for long-distance cycling, connected me with J Cycles Garage who generously taught me basic bike repair skills, lent me his bike computer, and offered invaluable advice and support. Grateful for his guidance every step of the way!",
    pictureUrl: "img/thanks/malcalm-1.jpg",
  },
  {
    name: "Siong Yuen Cheah",
    avatar: "img/thanks/siong-yuen.jpg",
    message:
      "Siong Yuen's my running mate, and when he heard about my bike tour, he came through big time, offering his solar panel. That thing's gonna be a game-changer when I'm in the middle of nowhere needing a charge for my devices. Huge thanks for your generosity",
    pictureUrl: "img/thanks/siong-yuen-1.jpg",
  },
  {
    name: "J Cycles Garage",
    avatar: "img/thanks/j-cycle.jpg",
    url: "https://www.facebook.com/jcyclesgarage",
    message:
      "This bike shop stepped up big time, teaching me basic bike repair skills and prepping my bike for this trip. I was struggling to find someone, but they saved the day. Super grateful for their generosity and support!",
  },
  {
    name: "Kim Lykke Pedersen",
    avatar: "img/thanks/kim.jpg",
    message:
      "Kim, my gym, running, and soon-to-be cycling buddy, has been an amazing support system. He's given me advice on what gear to wear, what to expect on the trip, and what to buy. While he was here in Malaysia, he motivated me to push harder in my runs. I'm thrilled that he'll be joining me for the last 200KM of this incredible journey. Looking forward to seeing him again and sharing this unforgettable experience together. So grateful for his friendship and unwavering support!",
    pictureUrl: "img/thanks/kim-1.jpg",
  }
];

function NameComponent({ name, url }) {
  if (url)
    return (
      <a
        href={url}
        target="_blank"
        className="font-bold text-xl text-gray-900 leading-none flex-1 text-indigo-600"
      >
        {name}
      </a>
    );
  return (
    <span className="font-bold text-xl text-gray-900 leading-none flex-1">
      {name}
    </span>
  );
}

function PersonalThanksComponent({ personalThanks }) {
  return (
    <div className="mb-8 sm:break-inside-avoid">
      <div className="border rounded-lg shadow-lg">
        <div className="p-6 sm:p-8">
          <div className="flex items-center">
            <img
              className="w-14 h-14 rounded-full mr-4"
              src={personalThanks.avatar}
              alt={personalThanks.name}
            />
            <NameComponent
              name={personalThanks.name}
              url={personalThanks.url}
            />
          </div>

          <p className="mt-4 text-gray-700">{personalThanks.message}</p>
        </div>
        {personalThanks.pictureUrl && (
          <img
            class="w-full rounded-b-lg"
            src={personalThanks.pictureUrl}
            alt={personalThanks.name}
          ></img>
        )}
      </div>
    </div>
  );
}

export default function SpecialThanksComponent() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-base font-semibold leading-7 text-indigo-600">
          I can't thank them enough
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          The trip is made possible by these awesome people
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          These incredible folks have been instrumental in prepping me for this
          bike tour, offering the guidance and support I needed to make this
          trip possible. I greatly appreciate you and all that you do for me.
        </p>

        <div className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
          {data.map((item) => {
            return <PersonalThanksComponent personalThanks={item} />;
          })}
        </div>
      </div>
    </section>
  );
}
