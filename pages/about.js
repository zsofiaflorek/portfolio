import Head from "next/head";
import { Layout } from "../components/layout";
import { Card, CVCard } from "../components/card";
import { Button } from "../components/button";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Zsofia Florek - About</title>
      </Head>
      <Layout>
        <h1 className="uppercase text-black text-xxl font-bold mt-6 text-center">
          About <strong className="text-primary">Me</strong>
        </h1>
        <Card>
          <Button icon="fas fa-download">Download my CV</Button>
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
          <CVCard title="Basic Knowledge" />
          <CVCard title="Education">
            <TimelineItem
              title="University of the Incarnate Word"
              subtitle="BSc in CSS"
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
