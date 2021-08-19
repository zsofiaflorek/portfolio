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
        <PortfolioCard
          image={Sophie}
          header="Weather app"
          secondarytitle="Up-to-date weather forecast"
          text="Hello szia en vagyok az elso elem"
        />
        <PortfolioCard
          image={Sophie}
          header="Weather app"
          secondarytitle="Up-to-date weather forecast"
          text="Hello szia en vagyok az elso elem"
        />
        <PortfolioCard
          image={Sophie}
          header="Weather app"
          secondarytitle="Up-to-date weather forecast"
          text="Hello szia en vagyok az elso elem"
        />
      </Layout>
    </>
  );
}

export function PortfolioCard({ image, header, secondarytitle, text }) {
  return (
    <article className="bg-white rounded-xl shadow overflow-hidden mb-8">
      <div className="md:flex">
        <div className="relative h-48 w-full md:w-48 md:flex-shrink-0">
          <Image alt="kep" src={image} layout="fill" objectFit="cover" />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-primary font-semibold">
            {header}
          </div>
          <h3 className="mt-1 text-lg leading-tight font-medium text-black ">
            {secondarytitle}
          </h3>
          <p className="mt-2 text-black">{text}</p>
        </div>
      </div>
    </article>
  );
}
