import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <Card
      className={
        "group flex flex-col overflow-hidden rounded-xl border h-full transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5"
      }
    >
      <Link
        href={href || "#"}
        className={cn("block cursor-pointer overflow-hidden", className)}
      >
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-32 w-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-105" // needed because random black line at bottom of video
          />
        )}
        {image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-32 w-full overflow-hidden object-cover object-top transition-transform duration-300 ease-out group-hover:scale-105"
          />
        )}
      </Link>
      <CardHeader className="px-4 pb-0 pt-3">
        <div className="space-y-1.5">
          <CardTitle className="line-clamp-2 text-sm font-semibold leading-tight">
            {title}
          </CardTitle>
          <time className="block font-sans text-[11px] text-muted-foreground">
            {dates}
          </time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose line-clamp-2 max-w-full text-pretty font-sans text-xs leading-relaxed text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-4 pb-0">
        {tags && tags.length > 0 && (
          <div className="mt-2.5 flex flex-wrap gap-1">
            {tags?.slice(0, 4).map((tag) => (
              <Badge
                className="rounded-full px-2 py-0 text-[10px] font-normal"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-4 pb-3 pt-2.5">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1.5">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge
                  key={idx}
                  className="flex gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-normal"
                  variant="outline"
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
