import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaCss3 } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";

const skills = [
  {
    id: 1,
    icon: <FaReact />,
    label: "React",
  },
  {
    id: 1,
    icon: <TbBrandNextjs />,
    label: "Nextjs",
  },
  {
    id: 1,
    icon: <SiTailwindcss />,
    label: "Tailwind",
  },
  {
    id: 1,
    icon: <IoLogoJavascript />,
    label: "JS",
  },
  {
    id: 1,
    icon: <FaCss3 />,
    label: "CSS",
  },
  {
    id: 1,
    icon: <FaHtml5 />,
    label: "HTML",
  },
];

export default function About() {
  return (
    <div className="bg-[#111319] w-full  md:flex px-10 lg:px-20 py-20 my-10">
      <div className="md:w-[40%] bg-red-100">
        <Image
          src="/about.png"
          alt="AI Image"
          width={300}
          height={300}
          className="rounded-full mb-5"
        />
      </div>
      <div className="md:w-[60%] md:pl-20">
        <h1 className="text-4xl font-bold ">About me</h1>
        <p>
          Hello! 👋 I am Rk Shawon. I am a software developer. I specialize in
          creating dynamic and engaging user experiences using cutting-edge
          technologies like React and Next.js. I look forward to contributing my
          skills to innovative projects and building solutions that make a
          difference. Lets connect and explore the endless possibilities in the
          world of software development together!
        </p>

        <div>
          <h2 className="font-bold text-2xl mt-10">Skills</h2>
          <div className="flex mt-3">
            {skills.map((skill) => {
              return (
                <span key={skill.id}>
                  <p className="hidden lg:block">{skill.label}</p>
                  <p className="text-3xl lg:mr-12 mr-5">{skill.icon}</p>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
