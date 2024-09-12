"use client";
import { IconMenu2 } from "@tabler/icons-react";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import ThemeSwitcher from "./theme-switcher";

type NavItems = {
  name: string;
  section: string;
};

const navItems: NavItems[] = [
  { name: "A propos", section: "about" },
  { name: "Expérience", section: "experience" },
  { name: "Compétences", section: "skills" },
  { name: "Éducation", section: "education" },
  { name: "Projets", section: "projects" },
  { name: "Contact", section: "contact" },
];

export default function Navbar() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  function scrollToSection(section: string) {
    const el = document.getElementById(section);
    if (el) {
      if (isSheetOpen) setIsSheetOpen(false);
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section className="border-b py-4 bg-background fixed top-0 left-0 w-full z-50">
      <nav className="container px-12 mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold bg-gradient-to-tr from-violet-500 to-rose-500 inline-block text-transparent bg-clip-text">
          {"Gaspard Delvaux"}
        </h1>
        <div className="flex items-center gap-4 xl:gap-8">
          <ul className="hidden xl:flex items-center gap-8">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="text-muted-foreground cursor-pointer hover:text-primary transition-colors duration-300"
                onClick={() => scrollToSection(item.section)}
              >
                {item.name}
              </li>
            ))}
          </ul>
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild className="xl:hidden">
              <Button variant="outline" size="icon">
                <IconMenu2 size={18} />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>{"Gaspard Delvaux"}</SheetTitle>
                <SheetDescription>{"Développeur full-stack"}</SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-2 mt-4">
                {navItems.map((item, index) => (
                  <Button
                    key={index}
                    onClick={() => scrollToSection(item.section)}
                    variant="ghost"
                    className="justify-start"
                  >
                    {item.name}
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
          <ThemeSwitcher />
        </div>
      </nav>
    </section>
  );
}
