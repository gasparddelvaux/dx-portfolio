import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Code } from "@/types/ui";
import CodeBlock from "./code";

const projects: Code[] = [
  {
    variableName: "thrillsworld",
    type: "Project",
    content: {
      title: "ThrillsWorld",
      company: "INOVANCY",
      description:
        "ThrillsWorld est une plateforme web destinée aux passionnés de parcs d'attractions. Elle regroupe toutes les fonctionnalités essentielles pour les passionnés.",
      year: "2024",
      stack: [
        "NextJS",
        "TailwindCSS",
        "Shadcn/UI",
        "MongoDB",
        "AdonisJS",
        "Plesk",
      ],
      status: "En développement",
      website: "https://thrills.world",
    },
  },
  {
    variableName: "singlepost",
    type: "Project",
    content: {
      title: "SinglePost",
      company: "Pyramidal SPRL",
      description:
        "SinglePost est une application web permettant de publier sur tous les réseaux sociaux connectés en une seule fois. Elle permet également de programmer des publications, etc.",
      year: "2024",
      stack: [
        "NextJS",
        "TailwindCSS",
        "Shadcn/UI",
        "MySQL",
        "Laravel",
        "Plesk",
      ],
      status: "En développement",
      website: "https://thrills.world",
    },
  },
  {
    variableName: "mypyramidal",
    type: "Project",
    content: {
      title: "MyPyramidal",
      company: "Pyramidal SPRL",
      description:
        "MyPyramidal est l'espace client de Pyramidal. Il permet aux clients de gérer leurs sites web, de demander facilement des modifications sur leur site, de consulter les statistiques de leur site, etc.",
      year: "2023",
      stack: ["Laravel", "Blade", "Bootstrap", "MySQL", "Plesk"],
      status: "En production",
      website: "https://my.pyramidal.be",
    },
  },
  {
    variableName: "ultimatethemepark",
    type: "Project",
    content: {
      title: "Ultimate Theme Park",
      company: "INOVANCY",
      description:
        "Ultimate Theme Park est un plugin Minecraft permettant de créer des parcs d'attractions dans le jeu. Avec ce plugin vient 3 interfaces web complexes (site vitrine, espace client et application Socket.IO).",
      year: "2021",
      stack: [
        "NextJS",
        "TailwindCSS",
        "Shadcn/UI",
        "Laravel",
        "Blade",
        "Bootstrap",
        "Socket.IO",
        "Java",
        "MySQL",
        "Plesk",
      ],
      status: "En production",
      website: "https://ultimate-themepark.com",
    },
  },
  {
    variableName: "inovancy",
    type: "Project",
    content: {
      title: "INOVANCY (Site vitrine)",
      company: "INOVANCY",
      description:
        "INOVANCY est un projet d'agence web spécialisée dans la création de sites web pour les parcs d'attractions. A l'heure actuelle, l'agence se concentre sur le développement de ThrillsWorld.",
      year: "2021",
      stack: ["HTML", "CSS", "JavaScript", "Plesk"],
      status: "En production",
      website: "https://inovancy.dev",
    },
  },
  {
    variableName: "f2architecte.be",
    type: "Project",
    content: {
      title: "f2architecte.be",
      company: "F2 Architecte",
      description:
        "f2architecte.be est le site web de l'architecte de M. FILIPUCCI Frédéric, architecte Belge. Le site a été développé pour mettre en avant les projets et les réalisations de l'architecte.",
      year: "2021",
      stack: ["Wordpress", "Elementor", "SEO & Analytics", "MySQL", "Plesk"],
      status: "En production",
      website: "https://f2architecte.be",
    },
  },
  {
    variableName: "emilievanlaethem.be",
    type: "Project",
    content: {
      title: "emilievanlaethem.be",
      company: "Emilie Van Laethem",
      description:
        "emilievanlaethem.be est le site web personnel d'Emilie Van Laethem, une professeure de chant. Le site a été développé pour mettre en avant les activités et les projets d'Emilie.",
      year: "2021",
      stack: ["Wordpress", "Elementor", "SEO & Analytics", "MySQL", "Plesk"],
      status: "En production",
      website: "https://emilievanlaethem.be",
    },
  },
  {
    variableName: "walibiminecraft",
    type: "Project",
    content: {
      title: "Walibi Minecraft",
      company: "N/A",
      description:
        "Walibi Minecraft était un projet ayant pour but de recréer le parc Walibi Belgium dans Minecraft. Ce projet incluait le développement d'un site web et d'une plateforme Socket.IO.",
      year: "2017",
      stack: [
        "HTML",
        "CSS",
        "JavaScript",
        "Socket.IO",
        "Java",
        "MySQL",
        "Plesk",
      ],
      status: "En pause",
      website: "https://walibi-minecraft.eu (offline)",
    },
  },
];

export default function Projects() {
  return (
    <section className="container px-12 mx-auto mt-40 pt-40" id="projects">
      <h3 className="text-3xl font-medium text-center">Projets</h3>
      <Carousel className="mt-8">
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index} className="lg:basis-1/2">
              <CodeBlock code={project} animated={false} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
