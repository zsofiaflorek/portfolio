import Head from "next/head";
import { Layout } from "../components/layout";
import PageTitle, { Strong } from "../components/pageTitle";
import Image from "next/image";
import Badge from "../components/badge";
import * as fs from "fs";
import path from "path";
import { PortfolioButton } from "../components/button";

const projectsFile = path.join(process.cwd(), "data", "projects.json");
export async function getStaticProps() {
  const fileContents = fs.readFileSync(projectsFile, "utf-8");
  const data = JSON.parse(fileContents);
  return {
    props: {
      projects: data,
    },
  };
}

export default function PortfolioPage({ projects }) {
  return (
    <>
      <Head>
        <title>Zsofia Florek - Contact</title>
      </Head>
      <Layout>
        <PageTitle>
          My
          <Strong> Portfolio</Strong>
        </PageTitle>
        <div>
          {projects.map((project, index) => (
            <PortfolioCard
              key={index}
              image={`/${project.image}`}
              badges={project.badges}
              text={project.description.map((sentence, index) => {
                return (
                  <p key={index} className="mt-1.5">
                    {sentence}
                  </p>
                );
              })}
              title={project.title}
              repoUrl={project["github-url"]}
              demoUrl={project["demo-url"]}
            />
          ))}
        </div>
      </Layout>
    </>
  );
}

export function PortfolioCard({
  image,
  badges,
  title,
  text,
  repoUrl,
  demoUrl,
}) {
  return (
    <article className="bg-white rounded-xl shadow overflow-hidden mb-8">
      <div className="md:flex">
        <div className="relative h-48 w-full md:w-56 lg:w-80 md:flex-shrink-0">
          <Image alt="" src={image} layout="fill" objectFit="cover" />
        </div>
        <div className="py-4 px-6">
          <div className="uppercase tracking-wide text-sm text-primary font-semibold flex gap-2">
            {badges.map((badge, index) => (
              <Badge key={index}>{badge}</Badge>
            ))}
          </div>
          <h3 className="mt-1 text-lg leading-tight font-medium text-black ">
            {title}
          </h3>
          <p className="mt-2 text-black">{text}</p>
          <div className="flex gap-4 mt-4">
            {repoUrl ? (
              <PortfolioButton href={repoUrl} portfolioIcon="fab fa-github">
                Github
              </PortfolioButton>
            ) : null}
            {demoUrl ? (
              <PortfolioButton portfolioIcon="fas fa-chalkboard" href={demoUrl}>
                Demo
              </PortfolioButton>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
