export const Intro = () => {
  return (
    <section className="h-screen bg-[url('/gasel_intro.jpg')] bg-center">
      <div className="container flex h-full flex-wrap">
        <div className="flex basis-full flex-col justify-center md:basis-1/2">
          <h1 className="rounded-xl bg-primary/70 p-5 text-2xl font-black text-white md:text-3xl lg:text-4xl">
            Предоставляем услуги по грузоперевозкам и грузотакси в Рязани,
            Рязанской области : Рыбное Старожилово, Поляны, Дядьково.
          </h1>
        </div>
      </div>
    </section>
  );
};
