import Head from "next/head";
import { Layout } from "../components/layout";
import { Card } from "../components/card";

export default function AboutPage() {
  return (
    <div>
      <Head>
        <title>Zsofia Florek - About</title>
      </Head>
      <Layout>
        <h1 className="uppercase text-black text-xxl font-bold mt-6 text-center">
          About <strong className="text-primary">Me</strong>
        </h1>
        <Card>
          <button>Download my CV</button>
        </Card>
      </Layout>
    </div>
  );
}
