import Head from "next/head";
import Image from "next/image";
import Professional from "../public/professional.jpg";
import { Layout } from "../components/layout";
import { AnchorButton } from "../components/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Zsofia Florek - Personal Portfolio</title>
        <meta name="description" content={description.join(" ")} />
      </Head>
      <Layout className="lg:flex lg:items-center lg:gap-8 ">
        <div className="ProfilePictureFrame p-8 shadow rounded-xl mb-8 lg:w-[500px]">
          <div className=" bg-white rounded-xl ">
            <Image
              layout="responsive"
              className="rounded-xl"
              src={Professional}
              alt="profile picture"
            />
          </div>
        </div>
        <div className="lg:flex-1">
          <span className="GreetingBox">Hello</span>
          <h1 className="uppercase text-black text-xl font-bold mt-6">
            I'm <strong className="text-primary">Zsofia Florek</strong>
          </h1>
          <h2 className="text-black text-lg uppercase font-semibold">
            Junior Frontend Developer
          </h2>
          <div className="mt-6 mb-8">
            {description.map((sentence, index) => (
              <p key={index} className="my-3.5">
                {sentence}
              </p>
            ))}
          </div>
          <Link href="/portfolio" passHref>
            <AnchorButton heavy icon="fas fa-th-list">
              Portfolio
            </AnchorButton>
          </Link>
        </div>
      </Layout>
    </>
  );
}

const description = [
  "With over 4 years of job experience in various fields, I decided to pursue frontend development as my new full-time profession.",
  "I am enthusiastic about React / Next.js and I'm a firm believer of semantic HTML and the mobile-first approach.",
  "Check out my portfolio of example projects below!",
];
