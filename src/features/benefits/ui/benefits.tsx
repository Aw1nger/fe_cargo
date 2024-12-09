import Image from "next/image";
import { BenefitsList } from "../config/config";
export const Benefits = () => {
  return (
    <section className="container py-16" id="benefits">
      <h2 className="mb-6 text-center text-4xl font-bold">Наши преимущества</h2>
      <div className="flex flex-wrap">
        {BenefitsList.map((benefit, index) => (
          <div key={index} className="flex basis-full gap-5 p-3 md:basis-1/2">
            <div className="flex basis-1/6 items-center justify-center">
              <Image
                className="h-12 w-12 dark:invert"
                src={benefit.icon}
                alt={benefit.title}
                width={50}
                height={50}
              />
            </div>
            <div className="flex basis-5/6 flex-col gap-2">
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
