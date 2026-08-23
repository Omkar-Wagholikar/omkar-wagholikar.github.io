import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import IconCloud from "@/components/ui/icon-cloud";
import { DATA } from "@/data/resume";
import Link from "next/link";
import ShineBorder from "@/components/ui/shine-border";
import Image from "next/image";
import Markdown from "react-markdown";
import { Highlighter } from "@/components/ui/highlighter";
import { LineShadowText } from "@/components/ui/line-shadow-text";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <h1 className="text-3xl leading-none font-semibold tracking-tighter text-balance md:text-3xl lg:text-6xl">
                  Hi, I&apos;m{" "}
                  <LineShadowText className="italic">Omkar</LineShadowText>{" "}
                  👋
                </h1>
              </BlurFade>
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about" className="relative">
        <div className="container mx-auto px-0">
          <div className="flex flex-col md:flex-row items-start">
            <div className="w-full md:w-1/2 absolute right-[620px] top-[200px] z-50 hidden md:block">
              <Image
                src="coffee-doodle.svg"
                alt="Decorative illustration"
                width={400}
                height={400}
                className="object-cover rounded-lg"
              />
            </div>
            <div className="w-full z-10">
              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <h2 className="text-4xl font-bold mb-4">
                  <Highlighter
                    action="underline"
                    color="#FF9800"
                    animationDuration={1000}
                    iterations={5}
                    padding={3}
                    isView={true}
                  >
                    About
                  </Highlighter>
                </h2>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <ShineBorder
                  color={["#640D5F", "#D91656", "#EE66A6", "#FFEB55"]}
                  className="rounded-xl shadow-xl p-5 z-10"
                >
                  <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground bg-white dark:bg-black dark:prose-invert">
                    {DATA.summary}
                  </Markdown>
                </ShineBorder>
              </BlurFade>
            </div>
            <div className="w-full md:w-1/2 absolute -right-72 -top-10 -z-10 hidden md:block">
              <Image
                src="groovy-doodle.svg"
                alt="Decorative illustration"
                width={400}
                height={400}
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-3xl font-bold">
              <Highlighter
                action="underline"
                color="#640D5F"
                animationDuration={1000}
                iterations={5}
                padding={3}
                isView={true}
              >
                Work Experience
              </Highlighter>
            </h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-3xl font-bold">
              <Highlighter
                action="bracket"
                color="#008080"
                animationDuration={1000}
                iterations={5}
                padding={3}
                isView={true}
              >
                Education
              </Highlighter>
            </h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3 items-center justify-center">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-4xl font-bold">
              <Highlighter
                action="circle"
                color="#7f0aa3"
                animationDuration={1000}
                iterations={5}
                padding={5}
                isView={true}
              >
                Skills
              </Highlighter>
            </h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
          <div className="flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8">
            <IconCloud iconSlugs={DATA.iconCloud} />
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my{" "}
                  <Highlighter
                    action="highlight"
                    color="#87CEFA"
                    padding={5}
                    isView={true}
                  >
                    latest
                  </Highlighter>{" "}
                  work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-[1100px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like{" "}
                  <Highlighter
                    action="highlight"
                    color="#3bd62d"
                    padding={5}
                    isView={true}
                  >
                    building
                  </Highlighter>{" "}
                  things
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I have a knack for competing in hackathons and project
                  competitions. Its always eye-opening to see the endless
                  possibilities brought to life by a group of motivated and
                  passionate individuals.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    position={project.position ?? ""}
                    type={project.type}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a mail{" "}
                <Link
                  href={DATA.contact.social.Email.url}
                  className="text-blue-500 hover:underline"
                >
                  with a direct question
                </Link>{" "}
                and I&apos;ll respond as soon as I can.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
