"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoscroll from "embla-carousel-auto-scroll";
import Image from "next/image";

type StackItem = {
  title: string;
  svg: string;
};

const stack: StackItem[] = [
  { title: "HTML", svg: "html" },
  { title: "CSS", svg: "css" },
  { title: "JavaScript", svg: "javascript" },
  { title: "TypeScript", svg: "typescript" },
  { title: "PHP", svg: "php" },

  // Frameworks et Librairies

  { title: "ReactJS", svg: "react" },
  { title: "NextJS", svg: "next" },
  { title: "AngularJS", svg: "angular" },
  { title: "AdonisJS", svg: "adonis" },
  { title: "Laravel", svg: "laravel" },
  { title: "Blade", svg: "blade" },
  { title: "TailwindCSS", svg: "tailwindcss" },
  { title: "Bootstrap", svg: "bootstrap" },
  { title: "Shadcn/UI", svg: "shadcn" },
  { title: "Socket.IO", svg: "websocket" },

  // Autres
  { title: "Node.js", svg: "node" },
  { title: "Git", svg: "git" },
  { title: "MongoDB", svg: "mongodb" },
  { title: "MySQL", svg: "mysql" },
  { title: "Plesk", svg: "plesk" },
];

export default function Skills() {
  return (
    <section className="container px-6 mx-auto mt-32 pt-40" id="skills">
      <h3 className="text-3xl font-medium text-center">{"Compétences"}</h3>
      <Carousel
        className="w-full mt-16"
        opts={{ loop: true }}
        plugins={[
          Autoscroll({
            speed: 2,
            stopOnInteraction: false,
            stopOnFocusIn: false,
            stopOnMouseEnter: true,
          }),
        ]}
      >
        <CarouselContent>
          {stack.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 sm:basis-1/3 md:basis-1/5 lg:basis-1/6 2xl:basis-1/12"
            >
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="flex flex-col items-center justify-center p-6">
                  <Image
                    src={`/assets/img/logos/${item.svg}.svg`}
                    width={64}
                    height={64}
                    alt={item.title}
                    className="h-16"
                  />
                  <h6 className="font-medium text-sm mt-4">{item.title}</h6>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="grid xl:grid-cols-2 gap-8 mt-8"></div>
    </section>
  );
}
