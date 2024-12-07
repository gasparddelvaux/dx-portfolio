"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  IconArrowLeft,
  IconArrowRight,
  IconPlayerPause,
  IconPlayerPlay,
} from "@tabler/icons-react";
import Autoscroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

type StackItem = {
  title: string;
  svg: string;
  usage: "front" | "back" | "tool";
};

const stack: StackItem[] = [
  { title: "HTML", svg: "html", usage: "front" },
  { title: "CSS", svg: "css", usage: "front" },
  { title: "JavaScript", svg: "javascript", usage: "front" },
  { title: "TypeScript", svg: "typescript", usage: "front" },
  { title: "PHP", svg: "php", usage: "back" },

  // Frameworks et Librairies

  { title: "ReactJS", svg: "react", usage: "front" },
  { title: "NextJS", svg: "next", usage: "front" },
  { title: "AngularJS", svg: "angular", usage: "front" },
  { title: "AdonisJS", svg: "adonis", usage: "back" },
  { title: "Laravel", svg: "laravel", usage: "back" },
  { title: "Blade", svg: "blade", usage: "back" },
  {
    title: "TailwindCSS",
    svg: "tailwindcss",
    usage: "front",
  },
  { title: "Bootstrap", svg: "bootstrap", usage: "front" },
  { title: "Shadcn/UI", svg: "shadcn", usage: "front" },
  { title: "Socket.IO", svg: "websocket", usage: "back" },

  // Autres
  { title: "Node.js", svg: "node", usage: "back" },
  { title: "Git", svg: "git", usage: "tool" },
  { title: "MongoDB", svg: "mongodb", usage: "back" },
  { title: "MySQL", svg: "mysql", usage: "back" },
  { title: "Plesk", svg: "plesk", usage: "tool" },
];

export default function Skills() {
  const [api, setApi] = useState<CarouselApi>();
  const [isScrolling, setIsScrolling] = useState(true);

  function Control(action: "prev" | "next" | "startStop") {
    if (api) {
      if (action === "prev" && !isScrolling) {
        api.scrollPrev();
      }
      if (action === "next" && !isScrolling) {
        api.scrollNext();
      }
      if (action === "startStop") {
        if (isScrolling) {
          api.plugins().autoScroll.stop();
        } else {
          api.plugins().autoScroll.play();
        }
      }
    }
  }

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("autoScroll:play", () => {
      setIsScrolling(true);
    });
    api.on("autoScroll:stop", () => {
      setIsScrolling(false);
    });
  });
  const UsageMap = (type: "front" | "back" | "tool") => {
    switch (type) {
      case "front":
        return "Front-end";
      case "back":
        return "Back-end";
      case "tool":
        return "Outil";
    }
  };
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
        setApi={setApi}
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
                  <p className="text-xs text-muted-foreground">
                    {UsageMap(item.usage)}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="w-full flex items-center justify-center gap-4 mt-4">
        <Button
          onClick={() => Control("prev")}
          variant="outline"
          disabled={isScrolling}
        >
          <IconArrowLeft size={14} />
        </Button>
        <Button onClick={() => Control("startStop")} variant="outline">
          {isScrolling ? (
            <IconPlayerPause size={14} />
          ) : (
            <IconPlayerPlay size={14} />
          )}
        </Button>
        <Button
          onClick={() => Control("next")}
          variant="outline"
          disabled={isScrolling}
        >
          <IconArrowRight size={14} />
        </Button>
      </div>
    </section>
  );
}
