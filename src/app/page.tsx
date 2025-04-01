import Header from "@/components/header";
import { Fjalla_One } from "next/font/google";
import { Box, Flex } from "@radix-ui/themes";
import Image from "next/image";
import {
  Hammer,
  Sparkles,
  User,
  FileText,
  SatelliteDish,
} from "lucide-react";

const fjallaOne = Fjalla_One({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main
      className="min-h-screen flex flex-col bg-cover bg-center"
      style={{ backgroundImage: "url('/marbled-grained-bg.png')" }}
    >
      <Header />

      {/* Flex for centering #content-box in the screen */}
      <Flex 
        id="main-flex"
        className="tw-center flex-1 w-full items-center justify-center"
      >
        <Box
          id="content-box"
          className="
            relative 
            bg-[#CA803A]
            p-6
            pt-4
            mr-5
            rounded-3xl 
            border-1 
            border-[#CA803A]/50
            text-[#501A00]
            font-bold
            max-w-4/5

            2xl:mt-0
            2xl:mb-0
            2xl:p-14
            2xl:max-w-2/5
            xl:p-10
            xl:mt-16
            xl:mb-2
            xl:mr-0
            xl:max-w-4/5
            xl:max-h-4/5
            sm:pt-18
            "
        >
          <p className="text-lg xl:text-xl mb-2">Bless the Maker and His water. I am</p>
          <h1
            className={`${fjallaOne.className} text-4xl xl:text-7xl text-[#fccc8e] mb-6 mt-6 pl-10`}
          >
            Lucas,
          </h1>
          <p className="text-sm xl:text-lg">
            also know as Luk’an al-Qatari, he who maps the paths.
            I am a software engineer, forged in the discipline of computer science,
            traveler of many code paths. This is my sietch — a place where my
            works are gathered.
            <br />
          </p>
          <p className="text-lg font-bold mt-2 mb-2">Welcome.</p>
          <ul className="space-y-4 mt-3 text-sm xl:text-lg">
            <li className="flex items-center gap-3">
              <Hammer className="w-5 h-5 text-yellow-500" />
              <a href="#projects" className="hover:underline">
                My Projects
              </a>
              Echoes of systems crafted with purpose and precision.
            </li>
            <li className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-pink-400" />
              <a href="#hobbies" className="hover:underline">
                My Hobbies
              </a>
              Passions beyond the spice, where creativity flows freely.
            </li>
            <li className="flex items-center gap-3">
              <User className="w-5 h-5 text-blue-400" />
              <a href="#about-me" className="hover:underline">
                About Me
              </a>
              The journey, the vision, and the heart behind the code.
            </li>
            <li className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-green-400" />
              <a href="#curriculum" className="hover:underline">
                My Curriculum
              </a>
              The chronicles of skill, study, and experience.
            </li>
            <li className="flex items-center gap-3">
              <SatelliteDish className="w-5 h-5 text-indigo-400" />
              <a href="#contact" className="hover:underline">
                Contact Me
              </a>
              Speak, and I shall answer across the vastness of the net.
            </li>
          </ul>

          {/* Profile picture pinned in top-right corner of #content-box */}
          <Box
            id="profile-picture-box"
            className="
              absolute
              top-0
              right-0
              rounded-full
              translate-x-1/2
              -translate-y-1/2

              2xl:-translate-y-8/12
              xl:-translate-y-4/12
              xl:translate-x-2/3
            "
          >
            <Image
              id="profile_picture"
              src="/profile.png"
              alt="Profile Image"
              width={100}
              height={100}
              className="
                rounded-full 
                object-contain
                h-auto  

                2xl:w-[350px]
                xl:w-[250px]
              "
            />
          </Box>
        </Box>
      </Flex>
    </main>
  );
}
