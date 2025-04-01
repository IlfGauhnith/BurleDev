"use client";

import React, { useState, MouseEvent } from 'react';
import "@radix-ui/themes/styles.css";
import { Box, Flex } from "@radix-ui/themes";
import Image from "next/image";
import { Github, Linkedin } from "lucide-react";
import styles from "../style/header.module.css"

// Define the shape of our particle data
interface Particle {
  id: string;
  top: number;      // where to place the particle on Y axis
  left: number;     // where to place the particle on X axis
  randomX: number;  // random horizontal offset for the animation
  randomFinalY: number; // random vertical offset for the final fall height
  size: number;     // 1..8 (square)
  color: string;    // one of the desired hex colors
  duration: number; // random speed
}

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

// A simple Box-Muller transform to generate approximate normal distribution
function randomNormal(mean = 0, stdDev = 1) {
  let u = 0, v = 0;
  // Convert [0,1) to (0,1] to avoid log(0)
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();

  // Box-Muller transform
  const num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  return num * stdDev + mean;
}

// Colors to pick from (uniform distribution)
const COLORS = ["#C25C10", "#CE7D19", "#D88425", "#ECA348", "#593020", "#CA803A"];


export default function Header() {
  const [particles, setParticles] = useState<Particle[]>([]);

  // Spawns new particles whenever a user hovers over a link
  const handleMouseEnter = (event: MouseEvent<HTMLAnchorElement>) => {
    console.debug("handleMouseEnter");
 
    const rect = (event.target as HTMLElement).getBoundingClientRect();

    const newParticlesCount = 50;
    const newParticles: Particle[] = Array.from({ length: newParticlesCount }).map(() => ({
      id: crypto.randomUUID(),
      top: rect.top + rect.height + Math.random() * 80,
      left: rect.left + (rect.width / 2) + ((Math.random() - 0.5) * 50), 
      randomX: (Math.random() - 0.5) * 500,
      randomFinalY: (Math.random()) * 50,
      size: Math.round(Math.max(1, Math.min(randomNormal(4.5, 2), 8))),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      duration: randomBetween(1.0, 3.0),
    }));

    console.debug(newParticles);

    setParticles((prev) => [...prev, ...newParticles]);

    // Remove these particles after 1.5s (to match CSS animation duration)
    setTimeout(() => {
      setParticles((prev) => {
        const newParticleIds = new Set(newParticles.map((p) => p.id));
        return prev.filter((p) => !newParticleIds.has(p.id));
      });
    }, 1500);
  };

  return (
    <header className="w-full bg-[#501A00]">
      {/* Render each sand particle */}
      {particles.map((particle) => {
        const particleStyle = {
          position: 'absolute',
          top: particle.top,
          left: particle.left,
          '--random-x': `${particle.randomX}px`,
          '--random-final-y': `${particle.randomFinalY + 200}px`, 
          width: `${particle.size}px`,
          height: `${particle.size}px`,
          backgroundColor: particle.color,
          animationDuration: `${particle.duration}s`,
        } as React.CSSProperties & Record<string, string | number>;

        return (
          <span
            key={particle.id}
            className={styles.sandParticle}
            style={particleStyle}
          />
        );
      })}

      <Flex align="center" justify="between">
        {/* Left side */}
        <Box className="ml-10">
          <Image src="/burle-dev-logo.png" alt="BURLE.DEV Logo" width={100} height={100} />
        </Box>

        {/* Navigation links */}
        <Flex>
          <Box className="mr-10">
            <a
              onMouseEnter={handleMouseEnter}
              className="
                font-extrabold 
                text-lg 
                text-[#CA803A] 
                cursor-pointer"
            >
              About
            </a>
          </Box>
          <Box className="mr-10">
            <a
              onMouseEnter={handleMouseEnter}
              className="
                font-extrabold 
                text-lg 
                text-[#CA803A] 
                cursor-pointer"
            >
              Projects
            </a>
          </Box>
          <Box className="mr-10">
            <a
              onMouseEnter={handleMouseEnter}
              className="
                font-extrabold 
                text-lg 
                text-[#CA803A] 
                cursor-pointer"
            >
              Gallery
            </a>
          </Box>
          <Box className="mr-10">
            <a
              onMouseEnter={handleMouseEnter}
              className="
                font-extrabold 
                text-lg 
                text-[#CA803A] 
                cursor-pointer"
            >
              Contact
            </a>
          </Box>
        </Flex>

        {/* Right side */}
        <Flex gap="10">
          <Box
            className="bg-[#CA803A] border-2 border-[#ca8647] shadow
              mr-6 rounded-xl p-1 transition-transform
              transform-gpu
              duration-200
              hover:scale-105
              hover:translate-0.5
              hover:cursor-pointer"
          >
            <Box asChild>
              <a
                href="https://www.linkedin.com/in/lucas-burle-121551165/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin
                  size={35}
                  color="#501A00"
                  className="hover:stroke-[#501b0086]"
                />
              </a>
            </Box>
          </Box>
          <Box>
            <Box
              asChild
              className="bg-[#CA803A] border-2 border-[#ca8647] shadow 
              mr-12 rounded-xl p-1 transition-transform
              transform-gpu
              duration-200
              hover:scale-105
              hover:translate-0.5
              hover:cursor-pointer"
            >
              <a
                href="https://github.com/IlfGauhnith"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github
                  size={35}
                  color="#501A00"
                  className="hover:stroke-[#501b0086]"
                />
              </a>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </header>
  );
}
