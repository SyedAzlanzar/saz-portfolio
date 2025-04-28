"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center relative bg-gradient-to-b from-background to-background/50 z-0"
    >
      <div className="min-h-screen bg bg-hero-pattern bg-no-repeat bg-cover bg-center absolute top-0 left-0 w-full opacity-[6.5%] -z-10"></div>
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          className="text-3xl font-bold mb-4 text-primary-custom"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hello World
        </motion.h1>
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          I&apos;m Syed Azlan Zar
        </motion.h1>
        <motion.p
          className="text-lg font-extralight  tracking-wider mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A Full Stack Developer passionate about creating amazing web
          experiences
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            size="lg"
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-primary-custom hover:bg-[#04927d] text-white"
          >
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
