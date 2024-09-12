import { IconCalendar, IconMapPin } from "@tabler/icons-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type EducationItem = {
  title: string;
  location: string;
  date: string;
  link?: string;
};

const education: EducationItem[] = [
  {
    title: "Apprentissage auto-didacte",
    location: "Chez moi",
    date: "Janvier 2013 à maintenant",
  },
  {
    title: "CESS & BEPS",
    location: "Institut Sainte-Ursule Namur (Technique sociale)",
    date: "Juin 2023",
  },
  {
    title: "Diplôme de Développeur Web",
    location: "IFAPME Charleroi (X75)",
    date: "Juin 2024",
  },
];

export default function Education() {
  return (
    <section className="container px-12 mx-auto mt-40 pt-40" id="education">
      <h3 className="text-3xl font-medium text-center">Éducation</h3>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
        {education.map((cert, index) => (
          <Card
            key={index}
            className={`relative animated-border-neutral ${
              index === 2 && "md:col-span-2 xl:col-span-1"
            }`}
          >
            <CardHeader>
              <CardTitle>{cert.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="flex gap-1 flex-col text-sm text-muted-foreground">
                <li className="flex items-center gap-1">
                  <IconMapPin size={16} />
                  {cert.location}
                </li>
                <li className="flex items-center gap-1">
                  <IconCalendar size={16} />
                  {cert.date}
                </li>
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
