import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { SiLeetcode } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <div className="mt-10 p-10 ">
      <div className="inline-block rounded-full overflow-hidden border-2 bg-white border-white shadow-md">
        <Image
          src="/ai-image.png"
          alt="AI Image"
          width={300}
          height={300}
          className="rounded-full"
        />
      </div>
      <h1 className="text-center text-2xl font-semibold mt-5">
        Hello, It's Rk Shawon
      </h1>
      <h2 className="text-center text-3xl font-semibold mt-5">
        I am Software Developer
      </h2>
      <div className="flex justify-center items-center mt-5">
        <p>Email: rkshawon@gmail.com</p>
      </div>
      <div className="flex justify-center items-center mt-5">
        <FaGithub className="ml-2 text-xl" />
        <CiLinkedin className="ml-2 text-xl" />
        <SiLeetcode className="ml-2 text-xl" />
        <FaTwitter className="ml-2 text-xl" />
      </div>
    </div>
  );
}
