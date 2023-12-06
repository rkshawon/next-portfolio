import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { SiLeetcode } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";

function Home() {
  return (
    <div className="mt-10 p-10 flex flex-col justify-center items-center">
      <div className="inline-block overflow-hidden rounded-full border-2 border-black  bg-white  ">
        <Image
          src="/ai-image.png"
          alt="AI Image"
          width={300}
          height={300}
          className="rounded-full"
        />
      </div>
      <h1 className="text-center text-2xl font-semibold mt-3">
        Hello, It&apos;s Rk Shawon
      </h1>
      <h2 className="text-center text-3xl font-semibold mt-3">
        I am Software Developer
      </h2>
      <div className="flex justify-center items-center mt-3">
        <p>Email: rkshawon@gmail.com</p>
      </div>
      <div className="flex justify-center items-center mt-3">
        <FaGithub className="ml-2 text-xl" />
        <CiLinkedin className="ml-2 text-xl" />
        <SiLeetcode className="ml-2 text-xl" />
        <FaTwitter className="ml-2 text-xl" />
      </div>
    </div>
  );
}
export default Home;
