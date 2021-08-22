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
        <ContactCard
          icon="fas fa-map-marker-alt"
          title="My location"
          text="Budapest, Hungary"
        />
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
