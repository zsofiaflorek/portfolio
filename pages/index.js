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
            Frontend Developer
          </h2>
          <div className="mt-6 mb-8">
            {description.map((sentence, index) => (
              <p key={index} className="my-3.5">
                {sentence}
              </p>
            ))}
          </div>
          <div>
            <Link href="/portfolio" passHref>
              <AnchorButton heavy icon="fas fa-th-list">
                Portfolio
              </AnchorButton>
            </Link>
            <Link href="/about" passHref>
              <AnchorButton heavy icon="fas fa-user" className="ml-2.5">
                Resume
              </AnchorButton>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}

const description = [
  "Frontend-focused developer with a strong interest in building clear, intuitive user experiences.",
  "Currently part of the Capture Age team, where we develop real-time analytical overlays for Age of Empires II — combining performance-sensitive UI with rich data visualization.",
  "Leading a small dev team has taught me a lot about communication, feedback, and creating an environment where people can grow.",
  "I care deeply about aligning product and engineering, and believe that open, ongoing collaboration between the two is essential for building thoughtful features.",
  "While most of my experience is on the frontend, I’m also diving into backend development. I’m actively learning C# and C++ to broaden my perspective and better understand how systems fit together across the stack.",
  "My previous work includes esports tools, internal dashboards, and marketing websites. I approach every project with a mix of curiosity, structure, and a strong focus on user needs — whether I’m writing code, reviewing PRs, or shaping product ideas with the team.",
];
