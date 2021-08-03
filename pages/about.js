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
        <div className="lg:grid lg:grid-cols-2 lg:gap-6 my-6">
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
        </div>
      </Layout>
    </>
  );
}
export function SkillBar({ tech, percentage }) {
  return (
    <div>
      <div className="flex justify-between pt-2">
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
