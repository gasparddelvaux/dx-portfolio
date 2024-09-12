import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import Link from "next/link";
import { Badge } from "../ui/badge";

type ContactItem = {
  title: string;
  icon: JSX.Element;
  link: string;
  target: "_blank" | "_self";
};

const contact: ContactItem[] = [
  {
    title: "gaspard@delvaux.dev",
    icon: <IconMail size={18} />,
    link: "mailto:gaspard@gaspard.dev",
    target: "_self",
  },
  {
    title: "LinkedIn",
    icon: <IconBrandLinkedin size={18} />,
    link: "https://www.linkedin.com/in/gaspard-delvaux-b178aa2a4/",
    target: "_blank",
  },
  {
    title: "+32 (0) 472 02 06 63",
    icon: <IconPhone size={18} />,
    link: "tel:+32472020663",
    target: "_self",
  },
  {
    title: "Facebook",
    icon: <IconBrandFacebook size={18} />,
    link: "https://www.facebook.com/gaspard.dlx",
    target: "_blank",
  },
];

export default function Contact() {
  return (
    <section className="container px-12 mx-auto mt-40 pt-40" id="contact">
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-medium">Contact</h3>
        <p className="text-sm text-muted-foreground lg:w-1/3">
          Envie de travailler avec moi ? Ou bien de me poser une question ?
          N'hésitez pas à me contacter via les réseaux sociaux ou par mail.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {contact.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            target={item.target}
            className={`w-full flex justify-center ${
              index % 2 === 0 ? "lg:mb-8" : "lg:mt-8"
            }`}
          >
            <Badge
              variant="outline"
              className="flex items-center justify-center gap-2 w-fit sm:text-base sm:px-4 sm:py-1.5"
            >
              {item.icon}
              <span>{item.title}</span>
            </Badge>
          </Link>
        ))}
      </div>
    </section>
  );
}
