import Head from "next/head";
import Image from "next/image";
import Sophie from "../public/Sophie.jpg";
import { Layout } from "../components/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Zsofia Florek - Personal Portfolio</title>
        <meta name="description" content={description} />
      </Head>
      <Layout className="lg:flex lg:items-center lg:gap-8 ">
        <div className="ProfilePictureFrame p-8 shadow rounded-xl mb-8 lg:w-[500px]">
          <div className=" bg-white rounded-xl ">
            <Image
              layout="responsive"
              className="rounded-xl"
              src={Sophie}
              alt="profile picture"
              priority
            />
          </div>
        </div>
        <div className="lg:flex-1">
          <span className="GreetingBox">Hello</span>
          <h1 className="uppercase text-black text-xl font-bold mt-6">
            I&apos;m <strong className="text-primary">Zsofia Florek</strong>
          </h1>
          <h2 className="text-black text-lg uppercase font-semibold">
            I eat E-80 cake
          </h2>
          <p className="my-6">{description}</p>
          <button className="uppercase text-on-primary bg-primary px-4 py-2 rounded-md font-semibold shadow-sm">
            <i className="fas fa-th-list mr-2" />
            Portfolio
          </button>
        </div>
      </Layout>
    </>
  );
}

const description =
  "With over 4 years of job experience and 2 degrees of separation. " +
  "I studied Information Technology at University and later honed my skills through commercial and freelance experience." +
  " My skills include PHP, Laravel, jQuery, database design, JavaScript and MySQL.";
