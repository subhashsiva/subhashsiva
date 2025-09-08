"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProjectsPage() {
  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "A full-stack Next.js e-commerce app with authentication, shopping cart, and Stripe payments.",
      tech: ["Next.js", "Tailwind", "Prisma", "PostgreSQL"],
    },
    {
      title: "Chat Application",
      description:
        "Real-time chat app using Next.js API routes, WebSockets, and MongoDB.",
      tech: ["Next.js", "Socket.IO", "MongoDB"],
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio built with Next.js and TailwindCSS, deployed on Vercel.",
      tech: ["Next.js", "Tailwind", "Vercel"],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-16 px-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-green-400">
        My Projects
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="bg-gray-900 border border-gray-700 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <CardHeader>
              <CardTitle className="text-xl text-green-300">
                {project.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm bg-green-900 text-green-200 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
