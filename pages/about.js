import Head from "next/head";
import { Layout } from "../components/layout";
import { Card, CVCard } from "../components/card";
import { AnchorButton } from "../components/button";
import Personal from "../public/personal.jpg";
import Image from "next/image";
import PageTitle, { Strong } from "../components/pageTitle";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Zsofia Florek - About</title>
      </Head>
      <Layout>
        <PageTitle>
          About
          <Strong> Me</Strong>
        </PageTitle>
        <Card>
          <div className="lg:flex lg:items-center lg:gap-6">
            <div className="hidden lg:block w-[25%] lg:flex-1">
              <Image
                layout="responsive"
                className="rounded-lg h-full"
                src={Personal}
                alt="profile picture"
                priority
              />
            </div>
            <div className="lg:flex-1 lg:flex-grow-[3]">
              <p className="mb-6 lg:text-indent text-justify leading-7">
                <div className="lg:hidden rounded-lg h-full float-left mr-3 w-[130px] h-[160px] relative">
                  <Image
                    layout="fill"
                    className=""
                    objectFit="contain"
                    src={Personal}
                    alt="profile picture"
                    priority
                  />
                </div>
                I have always been described as an extremely empathetic,
                open-minded and supportive person. Since I grew up I have worked
                in widely different fields, ranging from being an analytical
                chemist at a pharmaceutical company to working on data analytics
                at a Big Four. Throughout that, my heart always drives me back
                to making connections with people and focusing on their needs
                and goals.
              </p>
              <AnchorButton
                icon="fas fa-download"
                href="./zsofia-florek-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download my CV
              </AnchorButton>
            </div>
          </div>
        </Card>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 my-6">
          <CVCard title="Professional skills">
            <SkillBar tech="CSS" percentage="80%" />
            <SkillBar tech="HTML" percentage="40%" />
            <SkillBar tech="JS" percentage="70%" />
          </CVCard>
          <CVCard title="Professional skills">
            <SkillBar tech="CSS" percentage="80%" />
            <SkillBar tech="HTML" percentage="40%" />
            <SkillBar tech="JS" percentage="70%" />
          </CVCard>
          <CVCard title="Experience">
            <TimelineItem
              title="Deloitte forever"
              subtitle="BSc in CSS"
              timeframe="2019 - Present"
              description="The University of British Columbia is a public research university with campuses in Vancouver and Kelowna, British Columbia."
            />
          </CVCard>
          <CVCard title="Education">
            <TimelineItem
              title="University of the Incarnate Word"
              subtitle="BSc in CSSSSSS"
              timeframe="2019 - Present"
              description="The University of British Columbia is a public research university with campuses in Vancouver and Kelowna, British Columbia."
            />
          </CVCard>
        </div>
      </Layout>
    </>
  );
}

function SkillBar({ tech, percentage }) {
  return (
    <div className="my-2 last:mb-0">
      <div className="flex justify-between">
        <div className="font-semibold text-base uppercase text-left leading-7">
          {tech}
        </div>
        <div className="font-semibold text-base uppercase text-right leading-7">
          {percentage}
        </div>
      </div>
      <div className="ProgressBar">
        <div className="Progress" style={{ width: percentage }} />
      </div>
    </div>
  );
}

function TimelineItem({ title, subtitle, description, timeframe }) {
  return (
    <div className="TimelineItem">
      <h4 className="text-md font-semibold text-black uppercase">{title}</h4>
      <div className="font-semibold my-2 text-black">
        {subtitle} | {timeframe}
      </div>
      <p>{description}</p>
    </div>
  );
}
