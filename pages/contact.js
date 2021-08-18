import Head from "next/head";
import { Layout } from "../components/layout";
import PageTitle, { Strong } from "../components/pageTitle";

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
      </Layout>
    </>
  );
}
