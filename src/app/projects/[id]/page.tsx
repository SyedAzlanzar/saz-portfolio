"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/constants/projects";
import { ExternalLink, Github } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

export default function ProjectDetails() {
  const { id } = useParams();
  const router = useRouter();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  const routeBack = () => router.replace("/");

  return (
    <div className="container mx-auto min-h-screen py-4 flex md:items-center md:justify-center">
      <Card className="sm:w-full w-[350px] sm:max-w-3xl mx-auto h-full">
        <CardHeader>
          <CardTitle className="mb-1 flex items-center gap-3 justify-between">
            <span className="text-2xl">{project.name}</span>
            <Badge variant="outline" className="text-sm">
              {project.appearance}
            </Badge>
          </CardTitle>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} className="text-sm" variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <video
            controls
            autoPlay
            muted
            playsInline
            preload="auto"
            className="w-full aspect-video mb-4 rounded-lg"
          >
            <source src="/assets/VoterConnect-t.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="text-muted-foreground md:max-h-auto overflow-y-auto">
            {project.description}
          </p>
        </CardContent>
        <CardFooter className="flex justify-between  flex-wrap sm:flex-row flex-col-reverse items-center gap-4">
          <Button variant="ghost" onClick={routeBack}>
            Back
          </Button>
          <div className="flex justify-end gap-4">
            {project.github && (
              <Button variant="outline" asChild>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>
            )}
            {project.demo && (
              <Button asChild>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" /> Live Preview
                </a>
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
