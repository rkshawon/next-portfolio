import Image from "next/image";

export default function Project() {
  return (
    <div className="my-20">
      <h1 className="text-center text-2xl font-semibold mt-3">My Work</h1>
      <div>
        <Image
          src="/ai-image.png"
          alt="AI Image"
          width={300}
          height={300}
          className="rounded-full"
        />
        <Image
          src="/ai-image.png"
          alt="AI Image"
          width={300}
          height={300}
          className="rounded-full"
        />
        <Image
          src="/ai-image.png"
          alt="AI Image"
          width={300}
          height={300}
          className="rounded-full"
        />
      </div>
    </div>
  );
}
