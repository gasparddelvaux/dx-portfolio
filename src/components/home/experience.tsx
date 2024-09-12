import Link from "next/link";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

type ExperienceItem = {
  title: string;
  project?: string;
  company: string;
  date: string;
  description: string;
  website?: string;
};

const experiences: ExperienceItem[] = [
  {
    title: "Développeur Full Stack",
    company: "Pyramidal SPRL",
    date: "Janvier 2023 à Septembre 2024",
    description:
      "Création et développement de sites web et plateformes web en autonomie, principalement en utilisant Laravel pour le backend et Bootstrap pour le frontend, ainsi que Next.js et TailwindCSS pour des projets spécifiques. Stage réalisé dans le cadre de ma formation IFAPME, où j'ai acquis une expertise approfondie dans l'intégration de fonctionnalités complexes et l'optimisation de l'expérience utilisateur.",
    website: "https://pyramidal.be",
  },
  {
    title: "Développeur Front End",
    project: "Thrills World",
    company: "Inovancy",
    date: "Avril 2023 à maintenant",
    description:
      "Responsable de la conception et du développement front-end de la plateforme Thrills World, en assurant une connectivité fluide avec le backend et en garantissant une expérience utilisateur optimale, tout en veillant à l'implémentation des meilleures pratiques de développement et à l'optimisation des performances de l'application. Participation active à la communication du projet.",
    website: "https://thrills.world",
  },
  {
    title: "Développeur Front End",
    project: "Ultimate Theme Park",
    company: "Inovancy",
    date: "Octobre 2021 à maintenant",
    description:
      "Conception et développement de plusieurs sites web, allant de sites vitrines à des espaces clients et des applications connectées via Socket.io. Implication dans toutes les phases de développement, de la conception initiale à la mise en production, ainsi que dans la gestion de la communication avec les clients et les équipes internes pour s'assurer que les exigences du projet sont respectées et que les solutions livrées sont de la plus haute qualité.",
    website: "https://ultimate-themepark.com",
  },
  {
    title: "Projets d'Apprentissage",
    company: "Aucune société",
    date: "Janvier 2013 à maintenant",
    description:
      "Développement de nombreux sites web et plateformes web pour divers projets d'apprentissage autodidacte, couvrant une large gamme de technologies et de langages. Expérimentation et implémentation de nouvelles technologies, gestion de projets de bout en bout, et perfectionnement de mes compétences en développement front-end et back-end. Ces projets m'ont permis de renforcer ma capacité à résoudre des problèmes complexes et à m'adapter aux besoins changeants de l'industrie.",
  },
];

export default function Experience() {
  return (
    <section className="container px-12 mx-auto mt-32 pt-40" id="experience">
      <h3 className="text-3xl font-medium text-center">{"Expérience"}</h3>
      <div className="grid xl:grid-cols-2 gap-8 mt-16">
        {experiences.map((experience, index) => (
          <Card key={index} className="relative animated-border-neutral">
            <CardHeader>
              <CardTitle>{experience.title}</CardTitle>
              <CardDescription>
                {experience.project
                  ? `${experience.company} (${experience.project})`
                  : experience.company}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                {experience.description}
              </p>
              <div className="flex items-center gap-2 mt-6">
                <Badge variant="outline" className="w-fit">
                  {experience.date}
                </Badge>
                {experience.website && (
                  <Badge variant="outline" className="w-fit">
                    <Link href={experience.website} target="_blank">
                      {experience.website}
                    </Link>
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
