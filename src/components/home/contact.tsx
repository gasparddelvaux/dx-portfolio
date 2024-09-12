import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconClick,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import Link from "next/link";
import { Card } from "../ui/card";

type ContactItem = {
  title: string;
  subtitle: string;
  icon: JSX.Element;
  link: string;
  target: "_blank" | "_self";
};

const contact: ContactItem[] = [
  {
    title: "Par e-mail",
    subtitle: "gaspard@delvaux.dev",
    icon: <IconMail size={30} />,
    link: "mailto:gaspard@gaspard.dev",
    target: "_self",
  },
  {
    title: "Par LinkedIn",
    subtitle: "@gaspard-delvaux-b178aa2a4",
    icon: <IconBrandLinkedin size={30} />,
    link: "https://www.linkedin.com/in/gaspard-delvaux-b178aa2a4/",
    target: "_blank",
  },
  {
    title: "Par téléphone",
    subtitle: "+32 (0) 472 02 06 63",
    icon: <IconPhone size={30} />,
    link: "tel:+32472020663",
    target: "_self",
  },
  {
    title: "Par Facebook",
    subtitle: "@gaspard.dlx",
    icon: <IconBrandFacebook size={30} />,
    link: "https://www.facebook.com/gaspard.dlx",
    target: "_blank",
  },
];

export default function Contact() {
  return (
    <section className="container px-12 mx-auto mt-32 pt-40" id="contact">
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-medium">{"Contact"}</h3>
        <p className="text-sm text-muted-foreground lg:w-1/3">
          {
            "Envie de travailler avec moi ? Ou bien de me poser une question ? N'hésitez pas à me contacter via les réseaux sociaux ou par mail."
          }
        </p>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mt-16">
        {contact.map((item, index) => (
          <Card key={index}>
            <div className="flex h-full w-full items-center flex-col justify-center p-6">
              <div className="flex items-center gap-2">
                {item.icon}
                <h4 className="text-xl font-medium">{item.title}</h4>
              </div>

              <Link
                href={item.link}
                target={item.target}
                className="mt-2 text-sm text-muted-foreground flex items-center gap-2 hover:underline underline-offset-4"
              >
                {item.subtitle} <IconClick size={16} />
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
