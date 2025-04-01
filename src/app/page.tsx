import Header from "@/components/header";
import { Fjalla_One } from 'next/font/google';
import { Box, Flex } from "@radix-ui/themes";
import Image from "next/image";
import {
  Hammer,
  Sparkles,
  User,
  FileText,
  SatelliteDish,
} from 'lucide-react';
const fjallaOne = Fjalla_One({
  weight: '400',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <main
      className="min-h-screen flex flex-col bg-cover bg-center"
      style={{ backgroundImage: "url('/marbled-grained-bg.png')" }}
    >
      <Header />
      {/* This Flex fills the remaining space beneath the Header */}
      <Flex className="flex-1 w-full" align="start" justify="center">
        <Box className="bg-[#CA803A] p-9 rounded-2xl mt-60">
          <p className="text-xl mb-2">Bless the Maker and His water. I am</p>
          <h1 className={`${fjallaOne.className} text-7xl text-[#fccc8e] mb-6 mt-6 pl-10`}>Lucas Burle,</h1>
          <h2></h2>
          <p>
          software engineer, forged in the discipline of computer science,<br/>
          traveler of many code paths. This is my sietch — a place where my works are gathered.<br/>
          </p>
          <p className="font-bold mt-2 mb-2">Welcome.</p>
          <ul className="space-y-4 mt-3">
            <li className="flex items-center gap-3">
              <Hammer className="w-5 h-5 text-yellow-500" />
              <a href="#projects" className="hover:underline">My Projects</a>Echoes of systems crafted with purpose and precision.
            </li>
            <li className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-pink-400" />
              <a href="#hobbies" className="hover:underline">My Hobbies</a>Passions beyond the spice, where creativity flows freely.
            </li>
            <li className="flex items-center gap-3">
              <User className="w-5 h-5 text-blue-400" />
              <a href="#about-me" className="hover:underline">About Me</a>The journey, the vision, and the heart behind the code.
            </li>
            <li className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-green-400" />
              <a href="#curriculum" className="hover:underline">My Curriculum</a>The chronicles of skill, study, and experience.
            </li>
            <li className="flex items-center gap-3">
              <SatelliteDish className="w-5 h-5 text-indigo-400" />
              <a href="#contact" className="hover:underline">Contact Me</a>Speak, and I shall answer across the vastness of the net.
            </li>
          </ul>
        </Box>
        <Box className="ml-120 mt-30 rounded-full">
          <Image id="profile_picture"
            src="/profile.png"
            alt="Profile Image"
            width={600}
            height={600}
            className="
              rounded-full
            "
          />
        </Box>
      </Flex>
    </main>
  );
}
