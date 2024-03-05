export default function FundContributorsComponent() {
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
            These incredible folks have fund me.
            </p>

            {/* <div className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
            {data.map((item) => {
                return <PersonalThanksComponent key={item.name} personalThanks={item} />;
            })}
            </div> */}
        </div>
        </section>
    );
}