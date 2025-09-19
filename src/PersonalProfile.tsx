// import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";
import MediumIcon from './MediumIcon';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "./components/theme-toggle";
import omkarPhoto from "./assets/omkar_photo.png";
import { User, Code, Briefcase, GraduationCap, MapPin, Calendar, ExternalLink } from "lucide-react";

import _skills from "./profile_info/skills.json";
import _experiences from "./profile_info/experiences.json";
import _projects from "./profile_info/projects.json";
import _education from "./profile_info/education.json";
import React from "react";

const skills = _skills.skills;
const experiences = _experiences.experiences;
const projects = _projects.projects;
const education = _education.education;

const PersonalProfile = () => {

  return (
    // <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 p-2 sm:p-4 transition-all duration-500">
    <div className="min-h-screen p-2 sm:p-4 transition-all duration-500">

      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <Card className="mb-6 sm:mb-8 border-0 shadow-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1 overflow-hidden">
          <CardHeader className="relative overflow-hidden rounded-b-2xl pb-6 sm:pb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-400/10 dark:to-purple-400/10"></div>
            <div className="relative flex flex-col items-center gap-4 sm:gap-6">
              {/* Mobile: Stack everything vertically, Desktop: Keep original layout */}
              <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4 sm:gap-6">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                  <div className="relative">
                    <Avatar className="w-24 h-24 sm:w-32 sm:h-32 ring-4 ring-blue-100 dark:ring-blue-900 shadow-xl">
                      <AvatarImage src={omkarPhoto} alt="Omkar Wagholikar" />
                      <AvatarFallback className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                        OW
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full border-2 sm:border-4 border-white dark:border-slate-800 animate-pulse"></div>
                  </div>
                  <div className="text-center sm:text-left">
                    <CardTitle className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Omkar Wagholikar
                    </CardTitle>
                    <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mt-1 sm:mt-2">
                      Software Developer Engineer
                    </p>
                    {/* Location and work info - stack on mobile */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0 mt-2 sm:mt-3 text-sm sm:text-base text-slate-500 dark:text-slate-400">
                      <div className="flex items-center justify-center sm:justify-start gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>Pune, Maharashtra</span>
                      </div>
                      <div className="flex items-center justify-center sm:justify-start gap-2 sm:ml-4">
                        <Calendar className="w-4 h-4" />
                        <span>Working at NiCE Solutions</span>
                      </div>
                    </div>
                    {/* Social buttons */}
                    <div className="flex justify-center sm:justify-start gap-3 mt-3 sm:mt-4">
                      {[
                        { icon: GitHubLogoIcon, href: "https://github.com/Omkar-Wagholikar", color: "hover:bg-gray-100 dark:hover:bg-gray-700" },
                        { icon: LinkedInLogoIcon, href: "https://linkedin.com/in/Omkar-Wagholikar", color: "hover:bg-blue-100 dark:hover:bg-blue-900" },
                        { icon: MediumIcon, href: "https://medium.com/@Omkar-Wagholikar", color: "hover:bg-gray-100 dark:hover:bg-gray-700" },
                        { icon: EnvelopeClosedIcon, href: "mailto:omkarrwagholikar@gmail.com", color: "hover:bg-green-100 dark:hover:bg-green-900" },
                      ].map((social, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          className={`transition-all duration-300 hover:scale-110 ${social.color} border-2 p-2`}
                          onClick={() => window.open(social.href, "_blank")}
                        >
                          <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Mode toggle - positioned better on mobile */}
                <div className="sm:self-start">
                  <ModeToggle />
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="mt-4 sm:mt-6 px-4 sm:px-6">
            <div className="flex items-start gap-3 sm:gap-4">
              <User className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">About Me</h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
I'm Omkar Wagholikar, a software engineer specializing in full-stack development and AI. I build production systems using Python, Django, React, and frameworks like Flask and Celery. I’m also into generative AI, having created a Python package for on-device document-based conversations.
<br /> <br />
I’ve won hackathons at AIT and Impetus, PICT, and served as a student leader at PICT IEEE. Outside of coding, I’m a graphic designer and photographer.
<br /> <br />
Let’s connect and chat tech!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card className="mb-6 sm:mb-8 border-0 shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
          <CardHeader className="px-4 sm:px-6">
            <div className="flex items-center gap-3">
              <Code className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500" />
              <CardTitle className="text-xl sm:text-2xl">Technical Skills</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {Object.entries(skills).map(([category, categorySkills]) => (
                <div key={category} className="space-y-2 sm:space-y-3">
                  <h3 className="text-base sm:text-lg font-semibold capitalize text-slate-700 dark:text-slate-300">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {categorySkills.map((skill, index) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="text-xs sm:text-sm transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default px-2 py-1"
                        style={{
                          animationDelay: `${index * 100}ms`
                        }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Experience & Projects Grid - Stack on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Experience Section */}
          <Card className="border-0 shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
            <CardHeader className="px-4 sm:px-6">
              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
                <CardTitle className="text-xl sm:text-2xl">Experience</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="px-4 sm:px-6">
              <div className="space-y-3 sm:space-y-4">
                {experiences.map((exp) => (
                  <Card 
                    key={exp.title} 
                    className="border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <CardHeader className="pb-2 sm:pb-3 px-3 sm:px-6 pt-3 sm:pt-6">
                      <CardTitle className="text-base sm:text-lg text-blue-600 dark:text-blue-400 leading-tight">
                        {exp.title}
                      </CardTitle>
                      <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                        {exp.company}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {exp.duration}
                      </p>
                    </CardHeader>
                    <CardContent className="px-3 sm:px-6 pt-0">
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {exp.description.split('\n').map((line, idx) => (
                          <React.Fragment key={idx}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Projects Section */}
          <Card className="border-0 shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
            <CardHeader className="px-4 sm:px-6">
              <div className="flex items-center gap-3">
                <Code className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                <CardTitle className="text-xl sm:text-2xl">Projects</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="px-4 sm:px-6">
              <div className="space-y-3 sm:space-y-4">
                {projects.map((project) => (
                  <Card 
                    key={project.name} 
                    className="border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <CardHeader className="pb-2 sm:pb-3 px-3 sm:px-6 pt-3 sm:pt-6">
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className="text-base sm:text-lg text-purple-600 dark:text-purple-400 leading-tight flex-1">
                          {project.name}
                        </CardTitle>
                        {/* <a href={project.link} className="flex-shrink-0"   target="_blank" >
                          <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors" />
                        </a> */}
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex-shrink-0"
                        >
                          <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors" />
                        </a>
                      </div>
                    </CardHeader>
                    <CardContent className="px-3 sm:px-6 pt-0">
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-2 sm:mb-3 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 sm:gap-1.5">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs px-1.5 py-0.5">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Education Section */}
        <Card className="border-0 shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
          <CardHeader className="px-4 sm:px-6">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-500" />
              <CardTitle className="text-xl sm:text-2xl">Education</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="px-4 sm:px-6">
            {education.map((item) => (
              <Card key={item.institution} className="border border-slate-200 dark:border-slate-700">
                <CardHeader className="pb-2 sm:pb-3 px-3 sm:px-6 pt-3 sm:pt-6">
                  <CardTitle className="text-base sm:text-lg text-indigo-600 dark:text-indigo-400 leading-tight">
                    {item.institution}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-3 sm:px-6 pt-0">
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium mb-1 sm:mb-2">
                    {item.degree}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {item.duration} | {item.cgpa}
                  </p>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default PersonalProfile;