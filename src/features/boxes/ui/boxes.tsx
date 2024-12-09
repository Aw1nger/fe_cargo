import { Button } from "@/shared/components/ui/button";

export const Boxes = () => {
  return (
    <section className="relative bg-[url('/boxes.webp')] bg-cover bg-center bg-no-repeat after:absolute after:inset-0 after:bg-black/50 after:content-['']">
      <div className="container relative z-50 my-24 flex flex-wrap justify-center">
        <div className="flex basis-full flex-col md:basis-2/3">
          <h2 className="mb-10 text-center text-2xl font-bold text-white md:text-4xl">
            Затеяли переезд? Не знаете как его организовать? Заполните заявку и
            наш менеджер свяжется с Вами!
          </h2>
          <div className="flex justify-center">
            <Button className="px-10 py-6">Заполнить заявку</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
