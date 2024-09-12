import { IconCar, IconLanguage, IconLifebuoy } from "@tabler/icons-react";
import Image from "next/image";
import { Badge } from "../ui/badge";

const texts: string[] = [
  "Je m'appelle Gaspard Delvaux, développeur web passionné originaire de Namur, en Belgique. Depuis l'âge de 12 ans, je m'aventure dans le monde du développement web en autodidacte, explorant et maîtrisant divers langages et frameworks pour créer des sites et des applications web dynamiques. Durant cet apprentissage, j'ai eu l'occasion de réaliser des dizaines de projets web pour mes propres créations, en travaillant à la fois sur le front-end et le back-end.",
  "Après avoir obtenu mon CESS en juin 2022, j'ai décidé de formaliser mes compétences et d'approfondir mes connaissances en suivant la formation IFAPME de 'Développeur web' à Charleroi, que j'ai réussie avec 94.15% de moyenne en juin 2024.",
  "En dehors de mon travail de développeur, je suis un passionné des parcs d'attractions et des montagnes russes. Cette passion me pousse constamment à chercher de nouvelles sensations, que ce soit dans la conception de projets ambitieux ou dans la recherche d'adrénaline dans les meilleures attractions du monde.",
];

type Badge = {
  icon: JSX.Element;
  text: string;
};

const badges: Badge[] = [
  {
    icon: <IconCar size={18} />,
    text: "Permis B",
  },
  {
    icon: <IconLifebuoy size={18} />,
    text: "BEPS",
  },
  {
    icon: <IconLanguage size={18} />,
    text: "Français C2",
  },
  {
    icon: <IconLanguage size={18} />,
    text: "Anglais B2",
  },
];

export default function About() {
  return (
    <section className="container px-12 mx-auto mt-32 pt-40" id="about">
      <div className="grid xl:grid-cols-2 gap-24">
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl font-medium">{"À propos"}</h3>
          <ul className="flex flex-col gap-4 text-sm text-muted-foreground">
            {texts.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            {badges.map((badge, index) => (
              <Badge
                key={index}
                variant="outline"
                className="flex items-center gap-2 text-sm"
              >
                {badge.icon} {badge.text}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex-1 -me-16">
            <div className="p-6">
              <Image
                src="/assets/img/chiapas.png"
                alt="Chiapas at Phantasialand"
                width={500}
                height={500}
                className="object-cover rounded-lg shadow-sm"
              />
            </div>
          </div>
          <div className="flex-1 -me-16">
            <div className="p-4">
              <Image
                src="/assets/img/laika.png"
                alt="My dog Laika"
                width={500}
                height={500}
                className="object-cover rounded-lg shadow-sm"
              />
            </div>
          </div>
          <div className="flex-1 -me-16">
            <div className="p-2">
              <Image
                src="/assets/img/zadra.png"
                alt="Zadra at Energylandia"
                width={500}
                height={500}
                className="object-cover rounded-lg shadow-sm-"
              />
            </div>
          </div>
          <div className="flex-1">
            <Image
              src="/assets/img/newyork.png"
              alt="Me in Time Square, New York"
              width={500}
              height={500}
              className="object-cover rounded-lg shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
