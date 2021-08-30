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
          <CVCard title="Soft skills">
            <SkillBar tech="Conflict Handling" percentage="100%" />
            <SkillBar tech="Critical Thinking" percentage="80%" />
            <SkillBar tech="Empathy" percentage="100%" />
            <SkillBar tech="Adaptability " percentage="90%" />
          </CVCard>
          <CVCard title="Experience">
            <TimelineItem
              title="Deloitte Ltd."
              subtitle="Data Analyst"
              timeframe="Aug 2019 - Present"
              description="Facilitated the loading transformation and analysis of large accounting data sets, enabling the financial audit of many of the largest firms in Central Europe. Trained interns in Excel, T-SQL and alike."
            />
            <TimelineItem
              title="Oney Ltd."
              subtitle="Customer Relationship Management Intern"
              timeframe="Mar 2019 - Aug 2019"
              description="Provided operational support to the project leads such as managing Excel analytics and reporting from customer data. Partnered with managers to complete all essential reports on time. "
            />
            <TimelineItem
              title="Gedeon Richter Plc."
              subtitle="Analytical Chemist"
              timeframe="Mar 2019 - Aug 2019"
              description="Developed techniques for the analysis of drug products and validation of analytical methods. Implemented a method to resolve the differences between the Hungarian and US pharmaceutical quality assurance system, allowing the company to bring products to market faster while also saving millions of dollars in QA costs."
            />
          </CVCard>
          <CVCard title="Education">
            <TimelineItem
              title="Corvinus University of Budapest"
              subtitle="BSc in Business Information Systems"
              timeframe="2017 - 2021"
              description="The Business Information Systems at Corvinus University is a hybrid programme, offering courses in computer science while also teaching basics of business administration, with a special emphasis on IT management."
            />
            <TimelineItem
              title="Szent Istvan University"
              subtitle="BSc in Food Engineering"
              timeframe="2014 - 2017"
              description="I was provided a general knowledge of biology, chemistry, physics, and engineering, and special knowledge in food science, practical knowledge in food processing, preservation, and food development"
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
      <div className="font-semibold my-1 text-black">
        {subtitle} | {timeframe}
      </div>
      <p>{description}</p>
    </div>
  );
}
