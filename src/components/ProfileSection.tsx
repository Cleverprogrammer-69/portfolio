"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const ProfileSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4 gradient-text">
            Hi, I am Abdullah
          </h1>
          <h2 className="text-2xl text-gray-600 dark:text-gray-300 mb-6">
            Full Stack Developer
          </h2>
          <motion.p
            className="text-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            I create beautiful, functional, and user-centered digital
            experiences. With a passion for both design and technology, I bring
            a unique blend of creativity and technical expertise to every
            project.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Button size="lg" className="neon-border neon-shadow">
              Download CV
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative h-80 md:h-96"
        >
          <Image
            src="/placeholder.svg"
            alt="Profile"
            fill
            className="rounded-full object-cover shadow-lg neon-border"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ProfileSection;
