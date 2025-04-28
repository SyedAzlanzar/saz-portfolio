"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/constants/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardHeader className="w-full  h-60 md:h-80">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={100}
                    height={100}
                    priority
                    unoptimized
                    className="rounded-t-lg w-full h-full"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className="mb-2 flex items-center justify-between">
                    <span className="text-lg">{project.name}</span>
                    <Badge variant="outline" className="text-sm">
                      {project.appearance}
                    </Badge>
                  </CardTitle>
                  <p className="text-muted-foreground">{project.tagline}</p>
                </CardContent>
                <CardFooter className="flex items-center justify-end gap-4">
                  <Link href={project.github} target="_blank">
                    <Button variant="outline">GitHub</Button>
                  </Link>
                  {project.videoUrl && (
                    <Link href={`/projects/${project.id}`}>
                      <Button variant="outline">View Demo</Button>
                    </Link>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
