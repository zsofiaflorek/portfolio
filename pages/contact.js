import Head from "next/head";
import { Layout } from "../components/layout";
import PageTitle, { Strong } from "../components/pageTitle";
import { Card } from "../components/card";
import classNames from "classnames";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Zsofia Florek - Contact</title>
      </Head>
      <Layout>
        <PageTitle>
          Contact
          <Strong> Me</Strong>
        </PageTitle>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:grid-rows-2 lg:grid-cols-6 lg:grid-rows-1">
          <div className="md:col-span-2">
            <ContactCard
              icon="fas fa-map-marker-alt"
              title="My location"
              text="Budapest, Hungary"
            />
          </div>
          <a
            href="https://www.linkedin.com/in/zsofiaflorek/"
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-2"
          >
            <ContactCard
              icon="fab fa-linkedin-in"
              title="LinkedIn"
              text="linkedin.com/in/zsofiaflorek"
            />
          </a>
          <div className="md:col-span-2 md:col-start-2 lg:col-start-auto">
            <ContactCard
              icon="fas fa-envelope"
              title="Email address"
              text="zsofia.florek@gmail.com"
            />
          </div>
        </div>
      </Layout>
    </>
  );
}

export function ContactCard({ icon, title, text }) {
  return (
    <Card>
      <div className="flex flex-col items-center">
        <div className="flex justify-center items-center bg-primary-light rounded-full w-16 h-16 mb-6">
          <i className={classNames("text-[1.8rem]", icon, "text-primary")} />
        </div>
        <h3 className="text-md text-black uppercase font-semibold mb-2">
          {title}
        </h3>
        <p>{text}</p>
      </div>
    </Card>
  );
}
