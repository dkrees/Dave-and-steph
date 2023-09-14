import { FlowerImg } from "../../public/images/flower";

export default function RootPage() {
  const backgroundImg = "/images/flower.svg";
  return (
    <>
      <div className="absolute bottom-10 left-0 right-0 top-10 z-0 max-h-screen md:left-80">
        <FlowerImg />
      </div>
      <div className="z-10">
        <section className="container mx-auto flex w-full max-w-sm flex-col md:w-full md:max-w-md">
          <header className="mt-6 flex justify-center rounded-t-md bg-stone-400 px-4 py-2">
            <h1 className=" text-center text-2xl font-light text-white md:text-4xl">
              Save the Date!
            </h1>
          </header>

          <div className="flex flex-col gap-6 rounded-b-md bg-white/30 p-6 text-center font-light text-neutral-700 backdrop-blur-[2px]">
            <h2 className="text-4xl font-medium md:text-6xl">
              Saturday 8th June 2024
            </h2>
            <p className="my-4 text-lg">
              Wedding Ceremony and Reception in Cardiff.
            </p>
            <p>Invitation and details to follow soon.</p>
          </div>
        </section>
      </div>
    </>
  );
}
