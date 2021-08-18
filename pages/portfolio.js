import Head from "next/head";
import { Layout } from "../components/layout";
import PageTitle, { Strong } from "../components/pageTitle";
import Image from "next/image";
import Sophie from "../public/Sophie.jpg";

export default function PortfolioPage() {
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
        <PortfolioCard />
      </Layout>
    </>
  );
}

export function PortfolioCard() {
  return (
    <article className="bg-white rounded-xl shadow overflow-hidden">
      <div className="md:flex">
        <div className="relative h-48 w-full md:w-48 md:flex-shrink-0">
          <Image alt="kep" src={Sophie} layout="fill" objectFit="cover" />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-primary font-semibold">
            Weather App
          </div>
          <h3 className="mt-1 text-lg leading-tight font-medium text-black ">
            Up-to-date weather forecast
          </h3>
          <p className="mt-2 text-black">Hello szia en vagyok az elso elem</p>
        </div>
      </div>
    </article>
  );
}
