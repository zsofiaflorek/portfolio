import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zsofia Florek - Personal Portfolio</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="md:flex gap-8 max-w-[500px] m-auto">
          <div>
            <img
              src="https://geniusdevs.com/themeforest/icard/icard/assets/images/main-img.jpg"
              alt="profile picture"
            />
          </div>
          <div>
            <span className="bg-primary text-on-primary px-2 py-1 inline-block uppercase font-semibold">
              Hello
            </span>
            <h1 className="uppercase text-black text-xl font-bold">
              I&apos;m <strong className="text-primary">Fuszi</strong>
            </h1>
            <h2 className="text-black text-lg uppercase font-semibold">
              I eat E-80 cake
            </h2>
            <p>{description}</p>
            <button>Portfolio</button>
          </div>
        </div>
      </main>
    </div>
  );
}

const description =
  "With over 4 years of job experience and 2 degrees of separation. " +
  "I studied Information Technology at University and later honed my skills through commercial and freelance experience." +
  " My skills include PHP, Laravel, jQuery, database design, JavaScript and MySQL.";
