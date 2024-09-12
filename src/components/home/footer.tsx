import { IconGitFork, IconStar } from "@tabler/icons-react";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="border-t py-4 bg-background mt-60">
      <div className="container px-12 mx-auto flex justify-between flex-wrap gap-2">
        <p className="text-sm text-muted-foreground">
          {`© ${new Date().getFullYear()} Gaspard Delvaux. Tous droits réservés. Inspiré (non forké) du portfolio de Abu Said.`}
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link
            href="https://github.com/gasparddelvaux/portfolio"
            target="_blank"
            className="flex items-center gap-2 underline-offset-4 hover:underline "
          >
            <IconStar size={16} />
            {"Star"}
          </Link>
          <Link
            href="https://github.com/gasparddelvaux/portfolio/fork"
            target="_blank"
            className="flex items-center gap-2 underline-offset-4 hover:underline"
          >
            <IconGitFork size={16} />
            {"Fork"}
          </Link>
        </div>
      </div>
    </section>
  );
}
