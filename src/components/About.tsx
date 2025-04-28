"use client";

import { Card, CardContent } from "@/components/ui/card";
import { skills, techStack } from "@/constants/about";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20  bg-background/50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div className="grid grid-cols-1 md:grid-cols-1 gap-3">
            <Card className="">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
                <p className="text-muted-foreground">
                  Fullstack Engineer with a solid foundation in frontend
                  development technologies such as React, Next.js, and
                  Bootstrap, complemented by intermediate proficiency in backend
                  technologies including Nest.js, Node.js with Express, and SQL
                  and NoSQL databases. Leveraging expertise in both frontend and
                  backend realms to develop scalable and responsive web
                  applications that deliver seamless user experiences. Eager to
                  contribute innovative solutions and collaborate with
                  cross-functional teams to drive projects forward.
                </p>
              </CardContent>
            </Card>
            <Card className="">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">
                  Social Interactions
                </h3>
                <div className="space-y-2">
                  {techStack.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target={social.target}
                      rel="noopener noreferrer"
                      className="flex gap-4 py-2 hover:underline sm:text-base text-xs text-wrap items-center  "
                    >
                      <social.icon className="min-w-6 h-6 " />
                      {social.username}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-4">My Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex  flex-col items-center border rounded-md p-2 py-3  "
                  >
                    <skill.icon className="w-8 h-8 mb-2 text-primary-custom" />
                    <span className="text-sm text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
