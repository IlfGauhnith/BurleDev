"use client";

import React from "react";
import "@radix-ui/themes/styles.css";
import { Box, Flex } from "@radix-ui/themes";
import Image from "next/image";
import { Github, Linkedin } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-[#501A00]">
      <Flex align="center" justify="between">
        {/* Left side */}
        <Box className="ml-10">
          <Image src="/burle-dev-logo.png" alt="BURLE.DEV Logo" width={100} height={100} />
        </Box>
        <Flex>
          <Box className="mr-10">
            <a 
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
          <Box className="bg-[#CA803A] border-2 border-[#ca8647] shadow
              mr-6 rounded-xl p-1 transition-transform
              transform-gpu /* Ensures that the transform is hardware accelerated. */
              duration-200 /* 200ms duration */
              hover:scale-105
              hover:translate-0.5
              hover:cursor-pointer">
            <Box asChild>
              <a href="https://www.linkedin.com/in/lucas-burle-121551165/" target="_blank" rel="noopener noreferrer">
                <Linkedin
                  size={35}
                  color="#501A00"
                  className="hover:stroke-[#501b0086]"
                />
              </a>
            </Box>
          </Box>
          <Box>
            <Box asChild className="bg-[#CA803A] border-2 border-[#ca8647] shadow 
              mr-12 rounded-xl p-1 transition-transform
              transform-gpu /* Ensures that the transform is hardware accelerated. */
              duration-200 /* 200ms duration */
              hover:scale-105
              hover:translate-0.5
              hover:cursor-pointer">
              <a href="https://github.com/IlfGauhnith" target="_blank" rel="noopener noreferrer">
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
