import Image from "next/image";

export default function Project() {
  return (
    <div className="my-10 px-10">
      <h1 className="text-center text-4xl font-semibold mt-3">My Work</h1>
      <div>
        <Image
          src="/p1.jpg"
          alt="AI Image"
          width={600}
          height={600}
          className="mt-10 md:my-20"
        />
        <Image
          src="/p2.jpg"
          alt="AI Image"
          width={600}
          height={600}
          className="mt-10 md:my-20"
        />
        <Image
          src="/p3.jpg"
          alt="AI Image"
          width={600}
          height={600}
          className="mt-10 md:my-20"
        />
      </div>
    </div>
  );
}
