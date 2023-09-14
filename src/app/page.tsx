import Image from "next/image";
import Link from "next/link";

export default function RootPage() {
  return (
    <>
      <div className="absolute bottom-0 left-0 right-0 top-0 z-0 h-screen w-full">
        <Image
          className="object-cover"
          fill={true}
          alt="background"
          src="/images/savethedate-bg.jpg"
        />
      </div>
      <div className="container z-10 mx-auto mt-6 flex max-w-md flex-col gap-6 bg-white/10 p-6 text-left font-light text-neutral-700 ">
        <div className="">
          <h1 className="text-4xl font-light">Save the Date!</h1>
          <h2 className="text-4xl font-medium md:text-6xl">
            Saturday 8th June 2024
          </h2>
          <p className="my-4 text-lg">Wedding Ceremony and Party in Cardiff.</p>
          <p>RSVP invitations and details to follow soon.</p>
        </div>
      </div>
    </>
  );
}
