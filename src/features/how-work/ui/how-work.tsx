export const HowWork = () => {
  return (
    <section className="container my-10">
      <h2 className="mb-4 text-center text-4xl font-bold">Как это работает?</h2>
      <div className="flex flex-wrap">
        <div className="flex basis-full flex-wrap justify-center pb-4">
          <div className="relative mr-16 flex basis-full flex-col items-end gap-2 after:absolute after:-right-16 after:top-1/2 after:-translate-y-1/2 after:rounded-full after:bg-primary after:p-5 after:font-bold after:leading-[.45rem] after:text-white after:content-['1'] md:mr-0 md:basis-1/3 md:-translate-x-1/2 lg:basis-1/4">
            <h3 className="text-end text-xl font-semibold">Заявка</h3>
            <p className="text-end">
              Вы заполняете заявку и мы связываемся с Вами в ближайшее время или
              звоните сами.
            </p>
          </div>
        </div>
        <div className="flex basis-full flex-wrap justify-center pb-4">
          <div className="relative ml-16 flex basis-full flex-col gap-2 after:absolute after:-left-16 after:top-1/2 after:-translate-y-1/2 after:rounded-full after:bg-primary after:p-5 after:font-bold after:leading-[.45rem] after:text-white after:content-['2'] md:ml-0 md:mr-0 md:basis-1/3 md:translate-x-1/2 lg:basis-1/4">
            <h3 className="text-xl font-semibold">Консультация </h3>
            <p className="">
              Рассчитываем цену, подбираем транспорт и маршрут. Выполняем все
              меры для качественной перевозки Вашего груза.
            </p>
          </div>
        </div>
        <div className="flex basis-full flex-wrap justify-center pb-4">
          <div className="relative mr-16 flex basis-full flex-col items-end gap-2 after:absolute after:-right-16 after:top-1/2 after:-translate-y-1/2 after:rounded-full after:bg-primary after:p-5 after:font-bold after:leading-[.45rem] after:text-white after:content-['3'] md:mr-0 md:basis-1/3 md:-translate-x-1/2 lg:basis-1/4">
            <h3 className="text-end text-xl font-semibold">Пункт назначения</h3>
            <p className="text-end">Доставка груза и оплата.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
