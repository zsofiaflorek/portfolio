import Head from "next/head";
import Image from "next/image";
import Sophie from "../public/Sophie.jpg";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zsofia Florek - Personal Portfolio</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="md:flex gap-8 max-w-[500px] mx-auto mt-10 mb-16">
        <div className="ProfilePictureFrame p-8 shadow-xl rounded-xl mb-8">
          <div className=" bg-white rounded-xl">
            <Image
              layout="responsive"
              className="rounded-xl"
              src={Sophie}
              alt="profile picture"
              priority
            />
          </div>
        </div>
        <div>
          <span className="GreetingBox">Hello</span>
          <h1 className="uppercase text-black text-xl font-bold mt-6">
            I&apos;m <strong className="text-primary">Zsofia Florek</strong>
          </h1>
          <h2 className="text-black text-lg uppercase font-semibold">
            I eat E-80 cake
          </h2>
          <p className="my-6">{description}</p>
          <button className="uppercase text-on-primary bg-primary px-4 py-2 rounded-md font-semibold">
            Portfolio
          </button>
        </div>
      </main>
    </div>
  );
}

const description =
  "With over 4 years of job experience and 2 degrees of separation. " +
  "I studied Information Technology at University and later honed my skills through commercial and freelance experience." +
  " My skills include PHP, Laravel, jQuery, database design, JavaScript and MySQL.";
