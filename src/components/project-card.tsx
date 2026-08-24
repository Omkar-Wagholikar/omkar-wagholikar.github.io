"use client";

import { Badge } from "@/components/ui/badge";
import { BorderBeam } from "@/components/ui/border-beam";
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
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
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
  shine?: boolean;
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
  shine = false,
}: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <Card
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen(true);
          }
        }}
        className={
          "group relative flex flex-col overflow-hidden rounded-xl border h-full cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5"
        }
      >
        {shine && (
          <BorderBeam
            size={150}
            duration={8}
            colorFrom="#640D5F"
            colorTo="#FFEB55"
          />
        )}
        <div className={cn("block overflow-hidden", className)}>
          {video && (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="pointer-events-none mx-auto aspect-[4/3] w-full object-cover object-center transition-transform duration-300 ease-out group-hover:scale-105" // needed because random black line at bottom of video
            />
          )}
          {image && (
            <Image
              src={image}
              alt={title}
              width={500}
              height={300}
              className="aspect-[4/3] w-full overflow-hidden object-cover object-center transition-transform duration-300 ease-out group-hover:scale-105"
            />
          )}
        </div>
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
            <Markdown className="prose line-clamp-4 max-w-full text-pretty font-sans text-xs leading-relaxed text-muted-foreground dark:prose-invert">
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
              {links?.map((linkItem, idx) => (
                <Link
                  href={linkItem?.href}
                  key={idx}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Badge
                    key={idx}
                    className="flex gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-normal"
                    variant="outline"
                  >
                    {linkItem.icon}
                    {linkItem.type}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </CardFooter>
      </Card>
      {mounted &&
        open &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setOpen(false)}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 flex max-h-[85vh] w-full max-w-lg flex-col overflow-hidden rounded-xl border bg-card shadow-2xl"
            >
              {(image || video) && (
                <div className="shrink-0 overflow-hidden">
                  {video && (
                    <video
                      src={video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="mx-auto h-40 w-full object-cover object-top"
                    />
                  )}
                  {image && !video && (
                    <Image
                      src={image}
                      alt={title}
                      width={800}
                      height={400}
                      className="h-40 w-full object-cover object-top"
                    />
                  )}
                </div>
              )}
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute right-3 top-3 flex size-7 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80"
              >
                ✕
              </button>
              <div className="flex flex-col gap-3 overflow-y-auto p-5">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold leading-tight">
                    {title}
                  </h3>
                  <time className="block font-sans text-xs text-muted-foreground">
                    {dates}
                  </time>
                </div>
                <Markdown className="prose max-w-full text-pretty font-sans text-sm leading-relaxed text-muted-foreground dark:prose-invert">
                  {description}
                </Markdown>
                {tags && tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                      <Badge
                        className="rounded-full px-2.5 py-0.5 text-[11px] font-normal"
                        variant="secondary"
                        key={tag}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
                {links && links.length > 0 && (
                  <div className="flex flex-row flex-wrap items-start gap-2 pt-1">
                    {links.map((linkItem, idx) => (
                      <Link href={linkItem?.href} key={idx} target="_blank">
                        <Badge
                          className="flex gap-1.5 rounded-full px-3 py-1 text-xs font-normal"
                          variant="outline"
                        >
                          {linkItem.icon}
                          {linkItem.type}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
